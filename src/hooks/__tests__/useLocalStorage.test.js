// src/hooks/__tests__/useLocalStorage.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the initial value when no stored value exists', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current[0]).toBe('initial');
  });

  it('should update the stored value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    act(() => {
      result.current[1]('updated');
    });
    expect(result.current[0]).toBe('updated');
  });

  it('should persist value in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    act(() => {
      result.current[1]('persisted');
    });
    expect(JSON.parse(localStorage.getItem('test-key'))).toBe('persisted');
  });

  it('should handle objects', () => {
    const obj = { name: 'test', score: 100 };
    const { result } = renderHook(() => useLocalStorage('test-obj', obj));
    expect(result.current[0]).toEqual(obj);
  });

  it('should handle arrays', () => {
    const arr = [1, 2, 3];
    const { result } = renderHook(() => useLocalStorage('test-arr', arr));
    expect(result.current[0]).toEqual(arr);
  });
});
