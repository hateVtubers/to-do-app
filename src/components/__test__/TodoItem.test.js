import { render, screen } from './test-utils';
import TodoItem from '../TodoItem';

describe('<TodoItem/>', () => {
	test('Button is render', () => {
		render(<TodoItem />);
		const el = screen.getByText(/x/i);
		expect(el).toBeInTheDocument;
	});
});
