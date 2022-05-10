import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/features/todo/todoSlice';
import TodoItem from './TodoItem';

const Todos = () => {
	const todos = useSelector(state => state.todosData.list);
	const dispatch = useDispatch();

	const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { todo } = Object.fromEntries(new FormData(e.target));

    dispatch(addTodo(todo));
		e.target.reset();
  }, [dispatch]);

	return (
		<section>
			<form className='input-group mb-3' onSubmit={handleSubmit}>
				<input
					type='text'
					className='form-control'
					name='todo'
					placeholder='Add a new task here...'
					aria-label='Add a new task here...'
					aria-describedby='button-addon2'
					required
				/>
				<button className='btn btn-primary'>
					Add
				</button>
			</form>
			{!!todos.length && ( // 0 is falsy, https://developer.mozilla.org/en-US/docs/Glossary/Falsy
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
