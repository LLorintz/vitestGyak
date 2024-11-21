import { it,expect } from "vitest";
import { calculate } from './functions';

it('adds two numbers', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });
