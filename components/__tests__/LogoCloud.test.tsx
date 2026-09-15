import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import LogoCloud from '../LogoCloud';

const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  (globalThis as any).IntersectionObserver = vi.fn(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: vi.fn(),
  }));
});

afterEach(() => {
  cleanup();
});

const triggerIntersection = (isIntersecting: boolean) => {
  const ObserverConstructor = (globalThis as any).IntersectionObserver;
  const instance = ObserverConstructor();
  const callback = (ObserverConstructor as any).mock.calls[0]?.[0];
  if (typeof callback === 'function') {
    const entries = [
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
    callback(entries, instance);
  }
};

describe('LogoCloud', () => {
  it('renders without crashing in hidden state (opacity-0)', () => {
    const { container } = render(<LogoCloud />);
    expect(container).toBeTruthy();
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
  });

  it('becomes visible (opacity-100) when IntersectionObserver fires with isIntersecting true', () => {
    render(<LogoCloud />);
    triggerIntersection(true);
    const section = screen.getByLabelText('Trusted by leading companies');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('opacity-100');
  });

  it('cleans up observer on unmount (disconnect called)', () => {
    const { unmount } = render(<LogoCloud />);
    expect(mockObserve).toHaveBeenCalled();
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('renders all 8 logos as <a> tags with correct href values', () => {
    render(<LogoCloud />);
    triggerIntersection(true);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(8);
    expect(screen.getByRole('link', { name: 'CloudScale' })).toHaveAttribute('href', 'https://cloudscale.io');
    expect(screen.getByRole('link', { name: 'DataForge' })).toHaveAttribute('href', 'https://dataforge.io');
    expect(screen.getByRole('link', { name: 'NeuralPath' })).toHaveAttribute('href', 'https://neuralpath.ai');
    expect(screen.getByRole('link', { name: 'QuantumLab' })).toHaveAttribute('href', 'https://quantumlab.dev');
    expect(screen.getByRole('link', { name: 'StreamLine' })).toHaveAttribute('href', 'https://streamline.co');
    expect(screen.getByRole('link', { name: 'PixelPerfect' })).toHaveAttribute('href', 'https://pixelperfect.design');
    expect(screen.getByRole('link', { name: 'ByteBrew' })).toHaveAttribute('href', 'https://bytebrew.io');
    expect(screen.getByRole('link', { name: 'CodeCraft' })).toHaveAttribute('href', 'https://codecraft.dev');
  });

  it('all links have target="_blank"', () => {
    render(<LogoCloud />);
    triggerIntersection(true);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('all links have rel="noopener noreferrer"', () => {
    render(<LogoCloud />);
    triggerIntersection(true);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('has aria-label="Trusted by leading companies"', () => {
    render(<LogoCloud />);
    triggerIntersection(true);
    expect(screen.getByLabelText('Trusted by leading companies')).toBeInTheDocument();
  });

  it('renders 2 columns on mobile and 4 on md+', () => {
    const { container } = render(<LogoCloud />);
    triggerIntersection(true);
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-4');
  });

  it('renders all 8 logo names', () => {
    render(<LogoCloud />);
    triggerIntersection(true);
    expect(screen.getByText('CloudScale')).toBeInTheDocument();
    expect(screen.getByText('DataForge')).toBeInTheDocument();
    expect(screen.getByText('NeuralPath')).toBeInTheDocument();
    expect(screen.getByText('QuantumLab')).toBeInTheDocument();
    expect(screen.getByText('StreamLine')).toBeInTheDocument();
    expect(screen.getByText('PixelPerfect')).toBeInTheDocument();
    expect(screen.getByText('ByteBrew')).toBeInTheDocument();
    expect(screen.getByText('CodeCraft')).toBeInTheDocument();
  });
});