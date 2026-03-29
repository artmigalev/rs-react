import { ReceiveService } from '@/api/services/receive.service';
import { Home } from '@/layout/pages/Home';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  it('should render Search and Result', () => {
    render(<Home />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should initialize value from localStorage', () => {
    localStorage.setItem('searchValue', 'Luke');

    render(<Home />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('Luke');
  });

  it('should update value and localStorage on input change', async () => {
    localStorage.clear();
    render(<Home />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Luke');

    expect(localStorage.getItem('searchValue')).toBe('Luke');
  });
  it('should call service on mount if value exists', () => {
    const mockGetPeople = vi.fn().mockReturnValue([]);

    vi.spyOn(ReceiveService, 'getInstance').mockReturnValue({
      getResults: vi.fn(),
      getPeopleBySearchValue: mockGetPeople,
    } as unknown as ReceiveService);

    localStorage.setItem('searchValue', 'Luke');

    render(<Home />);

    expect(mockGetPeople).toHaveBeenCalledWith('Luke');
  });
  it('should update results when value changes', async () => {
    const mockData = [{ name: 'Luke' }];

    const mockGetPeople = vi.fn().mockReturnValue(mockData);

    vi.spyOn(ReceiveService, 'getInstance').mockReturnValue({
      getResults: vi.fn(),
      getPeopleBySearchValue: mockGetPeople,
    } as unknown as ReceiveService);

    render(<Home />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Luke');

    expect(mockGetPeople).toHaveBeenCalled();
  });
});
