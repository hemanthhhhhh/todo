import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../features/taskSlice'

const EditTask = ({ task }) => {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)

    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(editTask({id: task.id, title, description, status}))
        setEdit(false)
    }

    return (
        <div>
            {edit ? (
                <div className='bg-white p-4 rounded-md shadow-lg z-10 absolute border'>
                    <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Edit task</h2>
                    <div className='mb-4'>
                        <input value={title}
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Task Title'
                            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                    </div>
                    <div className='mb-4'>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Task Description'
                            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                    </div>
                    <div className='mb-4'>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                            <option value="To Do">To Do</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className='flex justify-between'>
                        <button type='submit'
                            className='bg-indigo-500 text-white px-2 py-2 rounded-md hover:bg-indigo-600'
                            onClick={handleEdit}
                        >
                            Save
                        </button>
                        <button className='bg-gray-300 py-2 rounded-md px-2' onClick={() => setEdit(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setEdit(true)}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                    Edit
                </button>
            )}
        </div>
    )
}

export default EditTask
