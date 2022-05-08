import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/features/todo/todoSlice';
import TodoItem from './TodoItem';

const Todos = () => {
	const todos = useSelector(state => state.todosData.list);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState('');

	const handleClick = () => {
		inputValue === '' ? alert('Write a todo') : dispatch(addTodo(inputValue));
		setInputValue('');
	};

	return (
		<section>
			<div className='input-group mb-3'>
				<input
					type='text'
					className='form-control'
					placeholder='Add a new task here...'
					aria-label='Add a new task here...'
					aria-describedby='button-addon2'
					required
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button className='btn btn-primary' type='button' onClick={handleClick}>
					Add
				</button>
			</div>
			{todos.length >= 1 && (
				<div className='card'>
					<ul className='list-group list-group-flush'>
						{todos.map(({ name, id }) => (
							<TodoItem key={id} name={name} id={id} />
						))}
					</ul>
				</div>
			)}

			<span>
				You have {todos.length} {todos.length > 1 ? 'tasks' : 'task'}{' '}
			</span>
		</section>
	);
};

export default Todos;
