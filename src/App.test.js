import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is where the article part will be going/i);
  expect(linkElement).toBeInTheDocument();
});
