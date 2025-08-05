import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditTodoModalProps {
    initialValue: string;
    onCancel: () => void;
    onSubmit: (updatedNote: string) => void;
}

interface FormValues {
    note: string;
}

export default function EditTodoModal({ initialValue, onCancel, onSubmit }: EditTodoModalProps) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues: { note: "" }
    });

    useEffect(() => {
        setValue("note", initialValue);
    }, [initialValue, setValue]);

    const submitHandler = (data: FormValues) => {
        onSubmit(data.note.trim());
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-themeWhite dark:bg-themeBlack rounded-3xl p-6 w-[90%] max-w-md shadow-lg transition-colors duration-300">
                <h2 className="text-xl font-bold text-center text-themeBlack dark:text-themeWhite mb-6">EDIT NOTE</h2>

                <form onSubmit={handleSubmit(submitHandler)} className="space-y-10">
                    <div>
                        <input
                            type="text"
                            {...register("note", { required: "Note cannot be empty" })}
                            placeholder="Edit your note..."
                            className="w-full border border-themeBlue text-themeBlack dark:text-themeWhite dark:bg-themeBlack dark:placeholder-gray-400 placeholder-themeBlue rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-themeBlue"
                        />
                        {errors.note && (
                            <p className="text-red-500 text-sm mt-2">{errors.note.message}</p>
                        )}
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="border border-themeBlue text-themeBlue dark:text-themeBlue dark:border-themeBlue font-bold px-6 py-2 rounded-lg hover:bg-themeBlue hover:text-white transition"
                        >
                            CANCEL
                        </button>
                        <button
                            type="submit"
                            className="bg-themeBlue text-white font-bold px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            APPLY
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}