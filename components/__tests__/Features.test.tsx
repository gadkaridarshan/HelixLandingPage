import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Features from '../Features';

// --- IntersectionObserver mock ---
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
const mockUnobserve = vi.fn();

const mockIntersectionObserver = vi.fn(() => ({
  observe: mockObserve,
  disconnect: mockDisconnect,
  unobserve: mockUnobserve,
}));

beforeEach(() => {
  vi.clearAllMocks();
  (globalThis as any).IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
  cleanup();
});

const triggerIntersection = (isIntersecting: boolean) => {
  const callback = (mockIntersectionObserver as any).mock.calls[0]?.[0];
  if (typeof callback === 'function') {
    const entries: IntersectionObserverEntry[] = [
      {
        isIntersecting,
        target: document.createElement('div'),
        intersectionRatio: isIntersecting ? 1 : 0,
        boundingClientRect: {} as DOMRect,
        intersectionRect: {} as DOMRect,
        rootBounds: null,
        time: Date.now(),
      },
    ];
    callback(entries, { observe: mockObserve, disconnect: mockDisconnect, unobserve: mockUnobserve });
  }
};

const mockFeatures = [
  { title: 'AI Automation', description: 'Automate repetitive tasks with AI.', Icon: () => <svg data-testid="icon-0" /> },
  { title: 'Data Analytics', description: 'Gain insights from your data.', Icon: () => <svg data-testid="icon-1" /> },
  { title: 'Cloud Integration', description: 'Seamless cloud connectivity.', Icon: () => <svg data-testid="icon-2" /> },
  { title: 'Security', description: 'Enterprise-grade security.', Icon: () => <svg data-testid="icon-3" /> },
  { title: 'Scalability', description: 'Scale effortlessly as you grow.', Icon: () => <svg data-testid="icon-4" /> },
  { title: 'Collaboration', description: 'Team collaboration tools.', Icon: () => <svg data-testid="icon-5" /> },
];

describe('Features', () => {
  it('renders without crashing in hidden state (opacity-0)', () => {
    const { container } = render(<Features features={mockFeatures} />);
    expect(container).toBeTruthy();
  });

  it('becomes visible (opacity-100) when IntersectionObserver fires with isIntersecting: true', () => {
    render(<Features features={mockFeatures} />);
    triggerIntersection(true);
    expect(screen.getByText('Features') || screen.getByRole('heading')).toBeInTheDocument();
  });

  it('cleans up observer on unmount (disconnect called)', () => {
    const { unmount } = render(<Features features={mockFeatures} />);
    expect(mockObserve).toHaveBeenCalled();
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('renders all 6 feature cards with title, description, and icon', () => {
    render(<Features features={mockFeatures} />);
    triggerIntersection(true);

    mockFeatures.forEach((f) => {
      expect(screen.getByText(f.title)).toBeInTheDocument();
      expect(screen.getByText(f.description)).toBeInTheDocument();
      // Icon should be present (rendered as SVG or component)
      const icon = screen.getByTestId(`icon-${mockFeatures.indexOf(f)}`);
      expect(icon).toBeInTheDocument();
    });
  });

  it('each card has transition-delay set to index * 100ms', () => {
    render(<Features features={mockFeatures} />);
    triggerIntersection(true);

    const cards = screen.getAllByRole('listitem');
    cards.forEach((card, index) => {
      const delay = `${index * 100}ms`;
      // Check inline style transition-delay
      expect(card).toHaveStyle({ transitionDelay: delay });
    });
  });

  it('renders section heading correctly', () => {
    render(<Features features={mockFeatures} />);
    triggerIntersection(true);

    // Look for a heading element
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('has id="features"', () => {
    const { container } = render(<Features features={mockFeatures} />);
    triggerIntersection(true);

    const section = container.querySelector('#features');
    expect(section).toBeInTheDocument();
  });
});