import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todosList: [],
};

let id = 0;
export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todosList.push({ name: action.payload, id: id++ });
		},
		deleteTodo: (state, action) => {
			const todoId = action.payload;
			const todosFiltered = state.todosList.filter(todo => todo.id !== todoId);
			state.todosList = todosFiltered;
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
