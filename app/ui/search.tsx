"use client";
import { useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                onChange={(e) => {
                    e.preventDefault();
                    handleSearch(e.target.value);
                }}
                ref={inputRef}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 pr-7 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                defaultValue={searchParams.get("query")?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            <XMarkIcon
                className="absolute right-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                onClick={(e) => {
                    e.preventDefault();
                    handleSearch("");
                    if (inputRef.current) {
                        inputRef.current.value = "";
                        inputRef.current.blur();
                    }
                }}
            />
        </div>
    );
}
