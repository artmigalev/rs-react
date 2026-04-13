import ErrorCard, { type PropsErrorCard } from '@/components/error-handling/error-card/ErrorCard';
import { render, screen } from '@testing-library/react';

describe('ErrorCard', () => {
  const mockData: PropsErrorCard = {
    title: 'mockErrorName',
    subtitle: 'mock message by this Error',
    'error-code': '404',
  };
  it('should be  render in the DOM', () => {
    render(<ErrorCard {...mockData} />);

    const title = screen.getByText(/mockErrorName/i);
    const subtitle = screen.getByText(/mock message by this Error/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  it('should be render empty props', () => {
    render(<ErrorCard title="Error" subtitle="" error-code="404" />);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
