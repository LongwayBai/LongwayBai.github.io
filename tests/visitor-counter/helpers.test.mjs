import test from 'node:test';
import assert from 'node:assert/strict';

import helpers from '../../.tmp-tests/visitor-counter/src/components/VisitorCounter/helpers.js';

const {getBusuanziClient, getCounterConfig, refreshBusuanziCounter} = helpers;

test('site mode maps to Busuanzi site total ids', () => {
  assert.deepEqual(getCounterConfig('site'), {
    items: [
      {
        containerId: 'busuanzi_container_site_pv',
        label: '累计访问',
        suffix: '次',
        valueId: 'busuanzi_value_site_pv',
      },
      {
        containerId: 'busuanzi_container_site_uv',
        label: '累计访客',
        suffix: '人',
        valueId: 'busuanzi_value_site_uv',
      },
    ],
  });
});

test('page mode maps to the Busuanzi page view id', () => {
  assert.deepEqual(getCounterConfig('page'), {
    items: [
      {
        containerId: 'busuanzi_container_page_pv',
        label: '阅读次数',
        suffix: '次',
        valueId: 'busuanzi_value_page_pv',
      },
    ],
  });
});

test('prefers one canonical Busuanzi client when both globals exist', () => {
  const calls = [];
  const lowerClient = {
    fetchMore() {
      calls.push('lower-fetchMore');
    },
  };
  const upperClient = {
    fetchMore() {
      calls.push('upper-fetchMore');
    },
  };

  const client = getBusuanziClient({
    Busuanzi: upperClient,
    busuanzi: lowerClient,
  });

  assert.equal(client, lowerClient);
  assert.equal(refreshBusuanziCounter({Busuanzi: upperClient, busuanzi: lowerClient}), true);
  assert.deepEqual(calls, ['lower-fetchMore']);
});

test('falls back to fetch when fetchMore is unavailable', () => {
  const calls = [];

  const refreshed = refreshBusuanziCounter({
    busuanzi: {
      fetch() {
        calls.push('fetch');
      },
    },
  });

  assert.equal(refreshed, true);
  assert.deepEqual(calls, ['fetch']);
});

test('returns false when no Busuanzi client is ready', () => {
  assert.equal(refreshBusuanziCounter({}), false);
});
