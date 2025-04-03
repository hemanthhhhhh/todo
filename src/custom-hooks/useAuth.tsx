// hooks/useAuth.js
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addTask } from '../features/taskSlice';
import { useForm } from 'react-hook-form';

const useFormHandler = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const newTask = {
            id: uuid4(),
            title: data.title,
            description: data.description,
            status: data.status || "To Do",
        };
        
        dispatch(addTask(newTask));
        reset(); // Clears the form fields after submission
    };

    return { register, handleSubmit, reset, onSubmit };
};

export default useFormHandler;
