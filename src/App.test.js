import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Respuesta: 6/);
  expect(linkElement).toBeInTheDocument();
});
// npm test