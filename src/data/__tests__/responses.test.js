// src/data/__tests__/responses.test.js
import { describe, it, expect } from 'vitest';
import { getResponse, defaultResponse, keywordGroups } from '../responses';

describe('getResponse', () => {
  it('should return default response for null query', () => {
    expect(getResponse(null)).toEqual(defaultResponse);
  });

  it('should return default response for empty query', () => {
    expect(getResponse('')).toEqual(defaultResponse);
  });

  it('should return registration response for "register"', () => {
    const result = getResponse('How do I register?');
    expect(result.explanation).toContain('Voter registration');
    expect(result.steps).toBeDefined();
    expect(result.steps.length).toBeGreaterThan(0);
  });

  it('should return EVM response for "evm"', () => {
    const result = getResponse('Tell me about EVM');
    expect(result.explanation).toContain('Electronic Voting Machine');
  });

  it('should return eligibility response for "eligible"', () => {
    const result = getResponse('Am I eligible to vote?');
    expect(result.explanation).toContain('eligibility');
  });

  it('should return timeline response for "when"', () => {
    const result = getResponse('When are elections held?');
    expect(result.explanation).toContain('timeline');
  });

  it('should return result response for "counting"', () => {
    const result = getResponse('How does vote counting work?');
    expect(result.explanation).toContain('counting');
  });

  it('should return default response for unrecognized query', () => {
    const result = getResponse('What is the weather today?');
    expect(result).toEqual(defaultResponse);
  });

  it('should be case-insensitive', () => {
    const lower = getResponse('register');
    const upper = getResponse('REGISTER');
    expect(lower).toEqual(upper);
  });
});

describe('defaultResponse', () => {
  it('should have all required fields', () => {
    expect(defaultResponse.explanation).toBeDefined();
    expect(defaultResponse.steps).toBeDefined();
    expect(defaultResponse.keyNotes).toBeDefined();
    expect(defaultResponse.followUp).toBeDefined();
  });
});

describe('keywordGroups', () => {
  it('should have at least 5 keyword groups', () => {
    expect(keywordGroups.length).toBeGreaterThanOrEqual(5);
  });

  it('each group should have keywords and response', () => {
    keywordGroups.forEach(group => {
      expect(group.keywords).toBeDefined();
      expect(group.keywords.length).toBeGreaterThan(0);
      expect(group.response).toBeDefined();
      expect(group.response.explanation).toBeDefined();
      expect(group.response.steps).toBeDefined();
    });
  });
});
