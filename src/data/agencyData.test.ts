import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CORPORATE_ITEMS,
  THINK_BOX_CATEGORIES,
  TEAM_MEMBERS,
  AGENCY_DETAILS,
  calculateCoordinates,
  getItemsByType,
  getItemByIndex
} from './agencyData';

test('agencyData: contains exactly 12 corporate items (7 ilkeler + 5 degerler)', () => {
  assert.equal(CORPORATE_ITEMS.length, 12, 'Must have exactly 12 items matching 12 spokes of the loading logo');
  const ilkeler = getItemsByType('ilke');
  const degerler = getItemsByType('deger');
  assert.equal(ilkeler.length, 7, 'Must have 7 ilkeler');
  assert.equal(degerler.length, 5, 'Must have 5 degerler');
});

test('agencyData: circular coordinates calculate valid points around circle', () => {
  const topPoint = calculateCoordinates(0, 12, 100, 200, 200);
  assert.equal(Math.round(topPoint.x), 200);
  assert.equal(Math.round(topPoint.y), 100);

  const rightPoint = calculateCoordinates(3, 12, 100, 200, 200);
  assert.equal(Math.round(rightPoint.x), 300);
  assert.equal(Math.round(rightPoint.y), 200);
});

test('agencyData: all 12 items have unique indices and non-empty content', () => {
  const indices = new Set<number>();
  for (const item of CORPORATE_ITEMS) {
    assert.ok(item.title.length > 0, 'Title must not be empty');
    assert.ok(item.fullText.length > 0, 'Full text must not be empty');
    assert.ok(!indices.has(item.index), `Index ${item.index} must be unique`);
    indices.add(item.index);
  }
  assert.equal(indices.size, 12);
});

test('agencyData: Think Box has 5 authentic categories with sample questions', () => {
  assert.equal(THINK_BOX_CATEGORIES.length, 5);
  const ids = THINK_BOX_CATEGORIES.map(c => c.id);
  assert.deepEqual(ids, ['farkli-bak', 'hedef-kitleni-anla', 'sorgula', 'yeniden-tasarla', 'bag-kur']);

  for (const cat of THINK_BOX_CATEGORIES) {
    assert.ok(cat.cardPrompts.length >= 3, 'Must have prompt cards');
    assert.ok(cat.sampleQuestion.length > 0, 'Must have sample question');
  }
});

test('agencyData: Team has 10 members from the PDF', () => {
  assert.equal(TEAM_MEMBERS.length, 10);
  assert.equal(TEAM_MEMBERS[0].name, 'Zehra İBİŞ');
  assert.equal(TEAM_MEMBERS[0].role, 'Ajans Başkanı & Grafiker');
});

test('agencyData: copy uses kurum instead of marka', () => {
  const storyJson = JSON.stringify(AGENCY_DETAILS.story);
  assert.match(storyJson, /kurum/i, 'Story should use kurum terminology');
});
