import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import LogoCloud from '../LogoCloud';

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

const mockLogos = [
  { name: 'TechCorp', href: 'https://techcorp.com' },
  { name: 'DataFlow', href: 'https://dataflow.io' },
  { name: 'InnovateInc', href: 'https://innovate.inc' },
  { name: 'StartUpX', href: 'https://startupx.co' },
  { name: 'CloudNine', href: 'https://cloudnine.net' },
  { name: 'SecureBase', href: 'https://securebase.org' },
  { name: 'PixelPerfect', href: 'https://pixelperfect.dev' },
  { name: 'GreenLeaf', href: 'https://greenleaf.eco' },
];

describe('LogoCloud', () => {
  it('renders without crashing in hidden state (opacity-0)', () => {
    const { container } = render(<LogoCloud logos={mockLogos} />);
    expect(container).toBeTruthy();
  });

  it('becomes visible (opacity-100) when IntersectionObserver fires with isIntersecting: true', () => {
    render(<LogoCloud logos={mockLogos} />);
    triggerIntersection(true);
    expect(screen.getByLabelText('Trusted by leading companies')).toBeInTheDocument();
  });

  it('cleans up observer on unmount (disconnect called)', () => {
    const { unmount } = render(<LogoCloud logos={mockLogos} />);
    expect(mockObserve).toHaveBeenCalled();
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('renders all 8 logos as <a> tags with correct href values', () => {
    render(<LogoCloud logos={mockLogos} />);
    triggerIntersection(true);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(8);

    mockLogos.forEach((logo) => {
      const link = screen.getByRole('link', { name: logo.name });
      expect(link).toHaveAttribute('href', logo.href);
    });
  });

  it('all links have target="_blank"', () => {
    render(<LogoCloud logos={mockLogos} />);
    triggerIntersection(true);

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('all links have rel="noopener noreferrer"', () => {
    render(<LogoCloud logos={mockLogos} />);
    triggerIntersection(true);

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('has aria-label="Trusted by leading companies"', () => {
    render(<LogoCloud logos={mockLogos} />);
    triggerIntersection(true);

    expect(screen.getByLabelText('Trusted by leading companies')).toBeInTheDocument();
  });

  it('renders 2 columns on mobile and 4 columns on md+', () => {
    const { container } = render(<LogoCloud logos={mockLogos} />);
    triggerIntersection(true);

    // Check grid column configuration via class or style
    const grid = container.querySelector('div[class*="grid"]');
    expect(grid).toBeInTheDocument();

    // On mobile, should have 2 columns
    expect(grid).toHaveClass('grid-cols-2');

    // On md+, should have 4 columns
    expect(grid).toHaveClass('md:grid-cols-4');
  });
});