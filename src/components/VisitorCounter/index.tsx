import type {ReactNode} from 'react';
import {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';

import {
  getCounterConfig,
  refreshBusuanziCounter,
  type BusuanziClient,
  type CounterMode,
} from './helpers';
import styles from './styles.module.css';

const BUSUANZI_SCRIPT_ID = 'busuanzi-script';
const BUSUANZI_SCRIPT_SRC = 'https://busuanzi.9420.ltd/js';

declare global {
  interface Window {
    Busuanzi?: BusuanziClient;
    busuanzi?: BusuanziClient;
  }
}

let busuanziScriptPromise: Promise<void> | null = null;

function loadBusuanziScript(): Promise<void> {
  if (typeof document === 'undefined') {
    return Promise.resolve();
  }

  if (busuanziScriptPromise) {
    return busuanziScriptPromise;
  }

  busuanziScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(BUSUANZI_SCRIPT_ID);
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = BUSUANZI_SCRIPT_ID;
    script.async = true;
    script.src = BUSUANZI_SCRIPT_SRC;
    script.addEventListener('load', () => resolve(), {once: true});
    script.addEventListener(
      'error',
      () => {
        script.remove();
        busuanziScriptPromise = null;
        reject(new Error('Failed to load Busuanzi script.'));
      },
      {once: true},
    );
    document.body.appendChild(script);
  });

  return busuanziScriptPromise;
}

type VisitorCounterProps = {
  className?: string;
  mode: CounterMode;
  testId?: string;
};

export default function VisitorCounter({
  className,
  mode,
  testId,
}: VisitorCounterProps): ReactNode {
  const {pathname} = useLocation();
  const config = getCounterConfig(mode);

  useEffect(() => {
    let isCancelled = false;
    const currentPath = pathname;

    void loadBusuanziScript()
      .then(() => {
        if (!isCancelled && currentPath) {
          refreshBusuanziCounter(window);
        }
      })
      .catch(() => undefined);

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  return (
    <section
      className={clsx(styles.counter, mode === 'site' ? styles.site : styles.page, className)}
      data-testid={testId}>
      {config.items.map((item) => (
        <span key={item.valueId} className={styles.counterItem} id={item.containerId}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value} id={item.valueId}>
            --
          </span>
          <span className={styles.suffix}>{item.suffix}</span>
        </span>
      ))}
    </section>
  );
}
