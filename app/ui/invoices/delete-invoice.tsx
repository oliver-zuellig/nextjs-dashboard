"use client";

import { useRef, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteInvoice } from "@/app/lib/actions";
import { confirm } from "@/app/ui/invoices/confirm";

export function DeleteInvoice({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);
    const formRef = useRef<HTMLFormElement>(null);
    const [isConfirming, setIsConfirming] = useState(false);

    async function handleDelete() {
        setIsConfirming(true);
        try {
            const shouldDelete = await confirm({
                message: "Are you sure you want to delete this invoice?",
            });

            if (shouldDelete) {
                formRef.current?.requestSubmit();
            }
        } finally {
            setIsConfirming(false);
        }
    }

    return (
        <form ref={formRef} action={deleteInvoiceWithId}>
            <button
                type="button"
                onClick={handleDelete}
                disabled={isConfirming}
                className="rounded-md border p-2 hover:bg-gray-100 disabled:cursor-wait disabled:opacity-50"
            >
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </form>
    );
}
