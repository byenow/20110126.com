import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = new URL('..', import.meta.url).pathname;
const read = (file) => readFileSync(join(root, file), 'utf8');

test('site uses split local assets without legacy runtime dependencies', () => {
  const html = read('index.html');
  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="app\.js"/);
  assert.doesNotMatch(html, /jquery|TweenMax|cdnjs/i);
  assert.equal(existsSync(join(root, 'styles.css')), true);
  assert.equal(existsSync(join(root, 'app.js')), true);
});

test('itinerary contains every day and required destination', () => {
  const app = read('app.js');
  for (const value of ['6.18', '6.19', '6.20', '6.21', '6.22']) {
    assert.match(app, new RegExp(value.replace('.', '\\.')));
  }

  for (const place of [
    'VIA INN Prime 赤坂',
    'KITTE 丸之内',
    '国立西洋美术馆',
    '鮨麻布 東京',
    '新文芸坐',
    'Alpen TOKYO',
    '根津美术馆',
    '神保町',
    'BEAMS 原宿本店',
    '下北泽',
    'SOMETIME 吉祥寺',
    '日光东照宫',
    '华严瀑布',
    '清澄白河',
  ]) {
    assert.ok(app.includes(place), `missing destination: ${place}`);
  }
});

test('critical travel links and dynamic facts are present', () => {
  const app = read('app.js');
  assert.match(app, /activity\/160686-tochigi-nikko/);
  assert.match(app, /google\.com\/maps\/search/);
  assert.match(app, /NH964/);
  assert.match(app, /NH963/);
  assert.match(app, /0\.1 m³\/s/);
  assert.match(app, /0\.2 m³\/s/);
  assert.match(app, /2026 年 6 月 12 日/);
});

test('all three themes are implemented and persisted', () => {
  const html = read('index.html');
  const css = read('styles.css');
  const app = read('app.js');

  for (const theme of ['journal', 'planner', 'culture']) {
    assert.match(html, new RegExp(`data-set-theme="${theme}"`));
    assert.match(css, new RegExp(`data-theme="${theme}"`));
  }

  assert.match(app, /localStorage/);
  assert.match(app, /tokyo-theme/);
  assert.match(app, /aria-pressed/);
});

test('content references local photos with explicit credits', () => {
  const app = read('app.js');
  const photos = [...app.matchAll(/src:\s*['"](assets\/[^'"]+)['"]/g)].map((match) => match[1]);
  assert.ok(photos.length >= 20, `expected at least 20 local photos, found ${photos.length}`);
  for (const photo of photos) {
    assert.equal(existsSync(join(root, photo)), true, `missing local photo: ${photo}`);
  }
  assert.match(app, /credit:/);
});

