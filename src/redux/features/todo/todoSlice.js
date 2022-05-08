import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [],
};

let id = 0;
export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.list.push({ name: action.payload, id: id++ });
		},
		deleteTodo: (state, action) => {
			const todoId = action.payload;
			const todosFiltered = state.list.filter(todo => todo.id !== todoId);
			state.list = todosFiltered;
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
