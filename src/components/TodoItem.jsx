// @ts-check
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../redux/features/todo/todoSlice';

const TodoItem = ({ name, id }) => {
	const dispatch = useDispatch();
  const [editting, setEditting] = useState(false);

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{editting ? (
        <input
          type='text'
          defaultValue={name}
					className='form-control w-50'
          autoFocus
          onBlur={(e) => { // unfocus, https://reactjs.org/docs/events.html#onblur
						dispatch(updateTodo({ name: e.currentTarget.value, id }))
						setEditting(!editting)
					}}
        />
      ) : (
        <span>{name}</span>
      )}
			<div>
        <button
          type='button'
          className='btn btn-warning text-white mr-5'
          style={{ marginRight: '5px' }}
          onClick={() => setEditting(!editting)}
        >
          rename
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => dispatch(deleteTodo(id))}
        >
          X
        </button>
      </div>
		</li>
	);
};

export default TodoItem;
