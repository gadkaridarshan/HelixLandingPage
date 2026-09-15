import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Features from '../Features';

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

describe('Features', () => {
  it('renders without crashing in hidden state (opacity-0)', () => {
    const { container } = render(<Features />);
    expect(container).toBeTruthy();
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
    expect(section).toHaveClass('opacity-0');
  });

  it('becomes visible (opacity-100) when IntersectionObserver fires with isIntersecting true', () => {
    const { container } = render(<Features />);
    triggerIntersection(true);
    const section = container.querySelector('section');
    expect(section).toHaveClass('opacity-100');
  });

  it('cleans up observer on unmount (disconnect called)', () => {
    const { unmount } = render(<Features />);
    expect(mockObserve).toHaveBeenCalled();
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('renders all 6 feature cards with title, description, and icon', () => {
    render(<Features />);
    triggerIntersection(true);
    expect(screen.getByText('Intelligent Agents')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Security')).toBeInTheDocument();
    expect(screen.getByText('Lightning Fast')).toBeInTheDocument();
    expect(screen.getByText('Real-time Analytics')).toBeInTheDocument();
    expect(screen.getByText('Global Scale')).toBeInTheDocument();
    expect(screen.getByText('Seamless Integrations')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<Features />);
    triggerIntersection(true);
    expect(screen.getByText(/Helix builds AI agents/i)).toBeInTheDocument();
    expect(screen.getByText(/bank-grade encryption/i)).toBeInTheDocument();
    expect(screen.getByText(/edge deployment/i)).toBeInTheDocument();
    expect(screen.getByText(/monitors agent performance/i)).toBeInTheDocument();
  });

  it('renders 6 feature icons as SVG elements', () => {
    const { container } = render(<Features />);
    triggerIntersection(true);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(6);
  });

  it('each card has transition-delay set to index * 100ms', () => {
    const { container } = render(<Features />);
    triggerIntersection(true);
    const cards = container.querySelectorAll('[class*="rounded-2xl"]');
    expect(cards.length).toBe(6);
    expect((cards[0] as HTMLElement).style.transitionDelay).toBe('0ms');
    expect((cards[1] as HTMLElement).style.transitionDelay).toBe('100ms');
    expect((cards[5] as HTMLElement).style.transitionDelay).toBe('500ms');
  });

  it('renders section heading correctly', () => {
    render(<Features />);
    triggerIntersection(true);
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toContain('Everything you need to build agent pipelines');
  });

  it('has id="features"', () => {
    const { container } = render(<Features />);
    triggerIntersection(true);
    expect(container.querySelector('#features')).toBeInTheDocument();
  });
});