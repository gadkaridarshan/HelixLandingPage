import { vi, beforeEach, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
const mockUnobserve = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  (globalThis as any).IntersectionObserver = vi.fn(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: mockUnobserve,
  }));
});

afterEach(() => {
  cleanup();
});