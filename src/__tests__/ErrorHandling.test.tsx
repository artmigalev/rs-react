import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { render } from '@testing-library/react';

test('error boundary catches error', () => {
  const { container } = render(
    <ErrorHandling>
      <span>Something went wrong.</span>
    </ErrorHandling>
  );

  expect(container.textContent).toEqual('Something went wrong.');
});
