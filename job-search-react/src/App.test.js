import { render, screen } from '@testing-library/react';
import App from './App';

test('renders donate link', () => {
	render(<App />);
	const linkElement = screen.getByText('Donate');
	expect(linkElement).toBeInTheDocument();
});
