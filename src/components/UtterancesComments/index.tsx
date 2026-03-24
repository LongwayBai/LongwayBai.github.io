import type {ReactNode} from 'react';
import {useEffect, useRef} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';

const UTTERANCES_ORIGIN = 'https://utteranc.es';
const UTTERANCES_REPO = 'LongwayBai/LongwayBai.github.io';

function getUtterancesTheme(colorMode: 'light' | 'dark'): string {
  return colorMode === 'dark' ? 'github-dark' : 'github-light';
}

export default function UtterancesComments(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const {colorMode} = useColorMode();
  const {pathname} = useLocation();
  const utterancesTheme = getUtterancesTheme(colorMode);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = `${UTTERANCES_ORIGIN}/client.js`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', UTTERANCES_REPO);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', utterancesTheme);
    script.setAttribute('label', 'comments');

    container.appendChild(script);
  }, [pathname, utterancesTheme]);

  useEffect(() => {
    const utterancesFrame = document.querySelector<HTMLIFrameElement>(
      '.utterances-frame',
    );

    utterancesFrame?.contentWindow?.postMessage(
      {
        type: 'set-theme',
        theme: utterancesTheme,
      },
      UTTERANCES_ORIGIN,
    );
  }, [utterancesTheme]);

  return (
    <section className="margin-top--xl">
      <div ref={containerRef} />
    </section>
  );
}
