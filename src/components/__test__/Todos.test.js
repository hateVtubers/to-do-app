import { render, screen } from './test-utils';
import Todos from '../Todos';
import { store } from '../../redux/app/store';

describe('<Todos/>', () => {
	test('Field is render', () => {
		render(<Todos />);
		const el = screen.getByPlaceholderText(/add a new task here.../i);
		expect(el).toBeInTheDocument;
	});
});
