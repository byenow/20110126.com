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

test('place cards include deeper context and expanded reliable photo sets', () => {
  const app = read('app.js');
  const css = read('styles.css');
  const histories = [...app.matchAll(/\n\s+history:\s*['"]/g)];
  const cultures = [...app.matchAll(/\n\s+culture:\s*['"]/g)];
  const photoGroups = [...app.matchAll(/photos:\s*\[([\s\S]*?)\n\s*\]/g)];
  const sourceRefs = [...app.matchAll(/source:\s*(?:['"]https:\/\/[^'"]+['"]|commonsPage\(['"][^'"]+['"]\))/g)];
  const trustedPhotoSrc = /src:\s*(?:['"]((?:assets\/|https:\/\/(?:commons\.wikimedia\.org\/wiki\/Special:FilePath\/|upload\.wikimedia\.org\/))[^'"]+)['"]|commonsFile\(['"][^'"]+['"]\))/g;

  assert.ok(histories.length >= 13, `expected history background for every place, found ${histories.length}`);
  assert.ok(cultures.length >= 13, `expected culture background for every place, found ${cultures.length}`);
  assert.ok(photoGroups.length >= 13, `expected photo groups for every place, found ${photoGroups.length}`);
  for (const group of photoGroups) {
    const trustedPhotos = [...group[1].matchAll(trustedPhotoSrc)];
    assert.ok(trustedPhotos.length >= 3, `expected at least 3 trusted photos in group, found ${trustedPhotos.length}`);
  }
  assert.ok(sourceRefs.length >= 39, `expected at least 39 HTTPS image sources, found ${sourceRefs.length}`);
  assert.doesNotMatch(app, /source:\s*['"]http:\/\//);
  assert.match(app, /renderPlaceContext/);
  assert.match(css, /\.place-context/);
});

