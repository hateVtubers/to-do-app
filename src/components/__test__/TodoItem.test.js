import { render, screen, fireEvent } from './test-utils';
import TodoItem from '../TodoItem';

describe('<TodoItem/>', () => {
	test('Todo is render', () => {
		render(<TodoItem name='Jeff' id={5} />);
		const todoElement = screen.getByText(/jeff/i);

		expect(todoElement).toBeInTheDocument;
	});
	test('Todo must be deleted', () => {
		render(<TodoItem name='Jeff' id={5} />);
		const todoElement = screen.getByText(/jeff/i);
		const btnElement = screen.getByText(/x/i);
		fireEvent.click(btnElement);

		expect(todoElement).not.toBeInTheDocument;
	});
});
