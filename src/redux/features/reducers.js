import { combineReducers } from 'redux';
import todoSlice from './todo/todoSlice';

export default combineReducers({
	todo: todoSlice,
});
