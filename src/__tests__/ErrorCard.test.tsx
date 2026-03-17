import ErrorCard, { type PropsErrorCard } from '@/components/error-handling/error-card/ErrorCard';
import { render, screen } from '@testing-library/react';

describe('ErrorCard', () => {
  it('should be  render in the DOM', () => {
    const mockData: PropsErrorCard = {
      title: 'mockErrorName',
      subtitle: 'mock message by this Error',
      'error-code': '404',
    };

    render(<ErrorCard {...mockData} />);

    const title = screen.getByText(/mockErrorName/i);
    const subtitle = screen.getByText(/mock message by this Error/i);
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    const itemReload = screen.getByText(/reload this page/i);
    const itemReconnect = screen.getByText(/reconnecting to wi-fi/i);
    const errorCade = screen.getByText(mockData['error-code']);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(itemReload).toBeInTheDocument();
    expect(itemReconnect).toBeInTheDocument();
    expect(errorCade).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });
});
