export type CounterMode = 'site' | 'page';

export type BusuanziClient = {
  fetch?: () => void;
  fetchMore?: () => void;
};

export type BusuanziWindow = {
  Busuanzi?: BusuanziClient;
  busuanzi?: BusuanziClient;
};

export type CounterItem = {
  containerId: string;
  label: string;
  suffix: string;
  valueId: string;
};

type CounterConfig = {
  items: CounterItem[];
};

export function getCounterConfig(mode: CounterMode): CounterConfig {
  if (mode === 'site') {
    return {
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
    };
  }

  return {
    items: [
      {
        containerId: 'busuanzi_container_page_pv',
        label: '阅读次数',
        suffix: '次',
        valueId: 'busuanzi_value_page_pv',
      },
    ],
  };
}

export function getBusuanziClient(windowLike: BusuanziWindow): BusuanziClient | undefined {
  return windowLike.busuanzi ?? windowLike.Busuanzi;
}

export function refreshBusuanziCounter(windowLike: BusuanziWindow): boolean {
  const client = getBusuanziClient(windowLike);

  if (!client) {
    return false;
  }

  if (typeof client.fetchMore === 'function') {
    client.fetchMore();
    return true;
  }

  if (typeof client.fetch === 'function') {
    client.fetch();
    return true;
  }

  return false;
}
