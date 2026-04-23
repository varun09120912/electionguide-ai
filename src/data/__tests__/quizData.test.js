// src/data/__tests__/quizData.test.js
import { describe, it, expect } from 'vitest';
import { quizData as quizQuestions } from '../quizData';

describe('quizQuestions', () => {
  it('should have exactly 10 questions', () => {
    expect(quizQuestions.length).toBe(10);
  });

  it('each question should have required fields', () => {
    quizQuestions.forEach((q, idx) => {
      expect(q.question, `Question ${idx + 1} missing question text`).toBeDefined();
      expect(q.options, `Question ${idx + 1} missing options`).toBeDefined();
      expect(q.options.length, `Question ${idx + 1} should have 4 options`).toBe(4);
      expect(q.answer, `Question ${idx + 1} missing answer`).toBeDefined();
    });
  });

  it('each answer should be one of the options', () => {
    quizQuestions.forEach((q, idx) => {
      expect(q.options, `Question ${idx + 1}: answer not in options`).toContain(q.answer);
    });
  });

  it('should not have duplicate questions', () => {
    const questionTexts = quizQuestions.map(q => q.question);
    const uniqueTexts = new Set(questionTexts);
    expect(uniqueTexts.size).toBe(questionTexts.length);
  });
});
