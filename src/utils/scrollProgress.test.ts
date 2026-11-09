import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateScrollProgress } from './scrollProgress';

test('calculateScrollProgress: returns 0 at top of page', () => {
  assert.equal(calculateScrollProgress(0, 3000, 900), 0);
});

test('calculateScrollProgress: returns 0.5 at midpoint', () => {
  assert.equal(calculateScrollProgress(1050, 3000, 900), 0.5);
});

test('calculateScrollProgress: returns 1 at bottom of page', () => {
  assert.equal(calculateScrollProgress(2100, 3000, 900), 1);
});

test('calculateScrollProgress: clamps out-of-range values and handles non-scrollable pages', () => {
  assert.equal(calculateScrollProgress(-50, 3000, 900), 0);
  assert.equal(calculateScrollProgress(5000, 3000, 900), 1);
  assert.equal(calculateScrollProgress(100, 900, 900), 0);
  assert.equal(calculateScrollProgress(0, 500, 900), 0);
});
