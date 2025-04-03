import React from 'react';
import useFormHandler from '../custom-hooks/useAuth';

const AddTask = () => {
    const { register, handleSubmit, onSubmit } = useFormHandler();

    return (
        <form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-xl font-semibold mb-3 text-indigo-500">Add new task</h2>

            {/* Title Input */}
            <div className="mb-4">
                <input
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    placeholder="Task Title"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Description Input */}
            <div className="mb-4">
                <textarea
                    {...register("description")}
                    placeholder="Task Description"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Status Select */}
            <div className="mb-4">
                <select
                    {...register("status")}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="To Do">To Do</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 w-full rounded-md hover:bg-indigo-600"
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTask;
