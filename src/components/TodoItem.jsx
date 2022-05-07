import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/features/todo/todoSlice';

const TodoItem = ({ name, id }) => {
	const dispatch = useDispatch();
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<span>{name}</span>
			<button
				type='button'
				className='btn btn-danger'
				onClick={() => dispatch(deleteTodo(id))}
			>
				X
			</button>
		</li>
	);
};

export default TodoItem;
