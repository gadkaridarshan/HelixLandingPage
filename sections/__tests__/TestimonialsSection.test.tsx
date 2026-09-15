import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import TestimonialsSection, { StarRating } from '../TestimonialsSection';

const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

const createObserverInstance = () => ({
  observe: mockObserve,
  disconnect: mockDisconnect,
  unobserve: vi.fn(),
});

beforeEach(() => {
  vi.clearAllMocks();
  (globalThis as any).IntersectionObserver = vi.fn(createObserverInstance);
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

describe('TestimonialsSection', () => {
  it('renders without crashing in hidden state (opacity-0)', () => {
    const { container } = render(<TestimonialsSection />);
    expect(container).toBeTruthy();
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
    expect(section).toHaveClass('opacity-0');
  });

  it('becomes visible (opacity-100) when IntersectionObserver fires with isIntersecting true', () => {
    render(<TestimonialsSection />);
    triggerIntersection(true);
    const section = screen.getByLabelText('Testimonials');
    expect(section).toHaveClass('opacity-100');
  });

  it('cleans up observer on unmount (disconnect called)', () => {
    const { unmount } = render(<TestimonialsSection />);
    expect(mockObserve).toHaveBeenCalled();
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('renders all 4 testimonials with correct name, role, company, avatar', () => {
    render(<TestimonialsSection />);
    triggerIntersection(true);
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Marcus Rivera')).toBeInTheDocument();
    expect(screen.getByText('Aisha Patel')).toBeInTheDocument();
    expect(screen.getByText("James O'Brien")).toBeInTheDocument();
    expect(screen.getByText('VP of Engineering')).toBeInTheDocument();
    expect(screen.getByText('CTO')).toBeInTheDocument();
    expect(screen.getByText('Head of AI')).toBeInTheDocument();
    expect(screen.getByText('Director of Platform')).toBeInTheDocument();
    expect(screen.getByText('CloudScale')).toBeInTheDocument();
    expect(screen.getByText('DataForge')).toBeInTheDocument();
    expect(screen.getByText('NeuralPath')).toBeInTheDocument();
    expect(screen.getByText('QuantumLab')).toBeInTheDocument();
  });

  it('renders blockquote text matching expected quotes', () => {
    render(<TestimonialsSection />);
    triggerIntersection(true);
    expect(screen.getByText(/Helix transformed how we manage/i)).toBeInTheDocument();
    expect(screen.getByText(/visual workflow builder/i)).toBeInTheDocument();
    expect(screen.getByText(/Deployment and observability/i)).toBeInTheDocument();
    expect(screen.getByText(/autonomous agent scheduling/i)).toBeInTheDocument();
  });

  it('has aria-label="Testimonials"', () => {
    render(<TestimonialsSection />);
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument();
  });

  it('renders responsive heading with "agent pipelines" highlight span', () => {
    render(<TestimonialsSection />);
    triggerIntersection(true);
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toContain('agent pipelines');
  });

  it('renders 4 star rating containers each showing 5 out of 5 stars', () => {
    render(<TestimonialsSection />);
    triggerIntersection(true);
    const starContainers = screen.getAllByLabelText('5 out of 5 stars');
    expect(starContainers.length).toBe(4);
  });
});

describe('StarRating', () => {
  it('renders exactly 5 stars for rating of 5', () => {
    const { container } = render(<StarRating rating={5} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
  });

  it('renders all 5 stars filled (amber) for rating 5', () => {
    const { container } = render(<StarRating rating={5} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
    stars.forEach((star) => {
      expect(star.classList.contains('fill-amber-400')).toBe(true);
    });
  });

  it('renders 4 stars filled and 1 unfilled for rating 4', () => {
    const { container } = render(<StarRating rating={4} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
    expect(stars[0].classList.contains('fill-amber-400')).toBe(true);
    expect(stars[3].classList.contains('fill-amber-400')).toBe(true);
    expect(stars[4].classList.contains('text-gray-700')).toBe(true);
    expect(stars[4].classList.contains('fill-amber-400')).toBe(false);
  });

  it('renders 3 stars filled and 2 unfilled for rating 3', () => {
    const { container } = render(<StarRating rating={3} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
    expect(stars[2].classList.contains('fill-amber-400')).toBe(true);
    expect(stars[3].classList.contains('text-gray-700')).toBe(true);
    expect(stars[4].classList.contains('text-gray-700')).toBe(true);
  });

  it('renders 0 filled stars for rating 0 (boundary)', () => {
    const { container } = render(<StarRating rating={0} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
    stars.forEach((star) => {
      expect(star.classList.contains('text-gray-700')).toBe(true);
      expect(star.classList.contains('fill-amber-400')).toBe(false);
    });
  });

  it('renders aria-label with correct rating text', () => {
    const { container } = render(<StarRating rating={3} />);
    expect(container.querySelector('[aria-label="3 out of 5 stars"]')).toBeInTheDocument();
  });
});