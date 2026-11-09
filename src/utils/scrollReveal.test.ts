import test from 'node:test';
import assert from 'node:assert/strict';
import { isElementInRevealZone, getRevealClassName } from './scrollReveal';

test('isElementInRevealZone: returns false when section is still below reveal threshold', () => {
  assert.equal(isElementInRevealZone(900, 900, 48), false);
  assert.equal(isElementInRevealZone(860, 900, 48), false);
});

test('isElementInRevealZone: returns true when section enters viewport or is already above', () => {
  assert.equal(isElementInRevealZone(852, 900, 48), true);
  assert.equal(isElementInRevealZone(400, 900, 48), true);
  assert.equal(isElementInRevealZone(-200, 900, 48), true);
});

test('getRevealClassName: removes translate transform once settled so fixed modals are never trapped', () => {
  const hidden = getRevealClassName(false, false);
  assert.match(hidden, /opacity-0/);
  assert.match(hidden, /translate-y-7/);

  const entering = getRevealClassName(true, false);
  assert.match(entering, /opacity-100/);
  assert.match(entering, /translate-y-0/);

  const settled = getRevealClassName(true, true);
  assert.equal(settled, 'opacity-100');
});
