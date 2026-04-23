// src/utils/__tests__/sanitize.test.js
import { describe, it, expect } from 'vitest';
import { sanitizeInput } from '../sanitize';

describe('sanitizeInput', () => {
  it('should return empty string for null input', () => {
    expect(sanitizeInput(null)).toBe('');
  });

  it('should return empty string for undefined input', () => {
    expect(sanitizeInput(undefined)).toBe('');
  });

  it('should return empty string for empty string input', () => {
    expect(sanitizeInput('')).toBe('');
  });

  it('should trim whitespace from both ends', () => {
    expect(sanitizeInput('  hello  ')).toBe('hello');
  });

  it('should remove HTML angle brackets for XSS prevention', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script');
  });

  it('should preserve normal text', () => {
    expect(sanitizeInput('How do I register to vote?')).toBe('How do I register to vote?');
  });

  it('should handle mixed content with angle brackets', () => {
    expect(sanitizeInput('Hello <b>world</b>')).toBe('Hello bworld/b');
  });
});
