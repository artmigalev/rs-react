import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter, Route, Routes } from 'react-router';

describe('render App', () => {
  it('should be in DOM', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const appContainer = document.getElementById('app');

    expect(appContainer).toBeInTheDocument();
  });
  it('should be render child routes', () => {
    const ChildTest = () => <div>Child Content</div>;

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ChildTest />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/child content/i));
  });
});
