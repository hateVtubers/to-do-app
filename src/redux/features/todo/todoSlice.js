import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid'

const initialState = {
	list: JSON.parse(window.localStorage.getItem('todoList')) ?? [],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.list.push({ name: action.payload, id: uniqid(action.payload) });
      window.localStorage.setItem('todoList', JSON.stringify(state.list));
		},
		deleteTodo: (state, action) => {
			const todoId = action.payload;
			const todosFiltered = state.list.filter(todo => todo.id !== todoId);
			state.list = todosFiltered;

      window.localStorage.setItem('todoList', JSON.stringify(state.list));
		},
    updateTodo: (state, { payload }) => {
      const todosUpdated = state.list.map(({ id, ...res }) =>
        id === payload.id ? { id, name: payload.name } : { ...res, id }
      )

      state.list = todosUpdated
      window.localStorage.setItem('todoList', JSON.stringify(todosUpdated))
    },
	},
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
