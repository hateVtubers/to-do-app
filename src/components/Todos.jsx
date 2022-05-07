import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/features/todo/todoSlice';
import TodoItem from './TodoItem';

const Todos = () => {
	const todos = useSelector(state => state.todos.todosList);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState('');

	const handleClick = () => {
		inputValue === '' ? alert('Write a todo') : dispatch(addTodo(inputValue));
	};

	return (
		<section>
			<div className='input-group mb-3'>
				<input
					type='text'
					className='form-control'
					placeholder='Add a task'
					aria-label='Add a task'
					aria-describedby='button-addon2'
					required
					onChange={e => setInputValue(e.target.value)}
				/>
				<button className='btn btn-primary' type='button' onClick={handleClick}>
					Add
				</button>
			</div>

			<div className='card'>
				<ul className='list-group list-group-flush'>
					{todos.map(({ name, id }) => (
						<TodoItem key={id} name={name} id={id} />
					))}
				</ul>
			</div>
			<span>
				You have {todos.length} {todos.length > 1 ? 'tasks' : 'task'}{' '}
			</span>
		</section>
	);
};

export default Todos;
