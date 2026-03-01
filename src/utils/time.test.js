import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { calculateTimeLeft } from './time';

describe('calculateTimeLeft', () => {
  beforeEach(() => {
    // Tell vitest we use fake timers
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  it('should return correct time difference for a future date', () => {
    // Lock the current "now" time to 2026-01-01 00:00:00
    const mockNow = new Date('2026-01-01T00:00:00Z');
    vi.setSystemTime(mockNow);

    // Set target date to 1 day, 12 hours, 30 minutes, and 15 seconds later
    const mockTarget = new Date('2026-01-02T12:30:15Z').getTime();

    const result = calculateTimeLeft(mockTarget);

    expect(result).toEqual({
      days: 1,
      hours: 12,
      minutes: 30,
      seconds: 15,
    });
  });

  it('should return all zeros if the target date is in the past', () => {
    // Lock the current "now" time to 2026-01-01 00:00:00
    const mockNow = new Date('2026-01-01T00:00:00Z');
    vi.setSystemTime(mockNow);

    // Set target date to the past
    const mockTarget = new Date('2025-12-31T23:59:59Z').getTime();

    const result = calculateTimeLeft(mockTarget);

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
});
