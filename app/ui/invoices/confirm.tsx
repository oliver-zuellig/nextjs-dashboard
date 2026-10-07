import {
    confirmable,
    createConfirmation,
    type ConfirmDialogProps,
} from "react-confirm";

function ConfirmDialog({
    show,
    proceed,
    message,
}: ConfirmDialogProps<{ message: string }, boolean>) {
    return (
        <div
            className={`fixed inset-0 z-50 items-center justify-center bg-black/50 p-4 ${
                show ? "flex" : "hidden"
            }`}
        >
            <div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirm-dialog-message"
                className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
            >
                <p id="confirm-dialog-message" className="text-sm text-gray-900">
                    {message}
                </p>
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => proceed(false)}
                        className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => proceed(true)}
                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export const confirm = createConfirmation(confirmable(ConfirmDialog));
