import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{siteConfig.tagline}</p>
            <Heading
              as="h1"
              className={clsx('hero__title', styles.title)}
              data-testid="home-hero-title">
              DocBit
            </Heading>
          <p className={clsx('hero__subtitle', styles.subtitle)}>
            Developer Notes on Neovim, Tmux, Linux, and Tooling.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryCta)}
              to="/docs/intro"
              data-testid="home-primary-cta">
              Browse Docs
            </Link>
            <Link
              className={clsx('button button--secondary button--outline button--lg', styles.secondaryCta)}
              to="/blog/"
              data-testid="home-secondary-cta">
              Read Blog
            </Link>
          </div>
          <div className={styles.heroMeta}>
            <span>Terminal-first workflows</span>
            <span>Config notes that stay practical</span>
            <span>Long-form troubleshooting logs</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.techGraphic}>
            <svg viewBox="0 0 400 400" className={styles.animatedSvg} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g className={styles.orbits}>
                <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="2 6" />
              </g>
              <g className={styles.nodes}>
                <circle cx="200" cy="60" r="6" fill="#38bdf8" filter="url(#glow)" className={styles.node1} />
                <circle cx="340" cy="200" r="5" fill="#7dd3fc" filter="url(#glow)" className={styles.node2} />
                <circle cx="200" cy="340" r="4" fill="#0284c7" filter="url(#glow)" className={styles.node3} />
                <circle cx="60" cy="200" r="7" fill="#38bdf8" filter="url(#glow)" className={styles.node4} />
              </g>
              <path d="M 200 60 L 340 200 L 200 340 L 60 200 Z" fill="none" stroke="url(#grid-grad)" strokeWidth="1.5" className={styles.connections} />
              <path d="M 200 100 L 300 200 L 200 300 L 100 200 Z" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" className={styles.connectionsInner} />
              <circle cx="200" cy="200" r="24" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" strokeWidth="2" filter="url(#glow)" className={styles.core} />
              <rect x="188" y="188" width="24" height="24" fill="none" stroke="#7dd3fc" strokeWidth="1.5" transform="rotate(45 200 200)" className={styles.corePulse} />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}></div>
    </header>
  );
}

function TerminalSection() {
  return (
    <section className={styles.terminalSection}>
      <div className="container">
        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <span className={styles.dot} style={{backgroundColor: '#ff5f56'}}></span>
            <span className={styles.dot} style={{backgroundColor: '#ffbd2e'}}></span>
            <span className={styles.dot} style={{backgroundColor: '#27c93f'}}></span>
            <span className={styles.terminalTitle}>longway@linux: ~</span>
          </div>
          <div className={styles.terminalBody}>
            <p><span className={styles.prompt}>$</span> cat whoami.txt</p>
            <p className={styles.output}>A running notebook for terminal tooling, editor ergonomics, Linux setup, and the small decisions that make daily engineering calmer and faster.</p>
            <p><span className={styles.prompt}>$</span> ls focus-areas/</p>
            <p className={styles.output}>neovim-config&nbsp;&nbsp;tmux-workflows&nbsp;&nbsp;linux-ops&nbsp;&nbsp;dev-tooling</p>
            <p><span className={styles.prompt}>$</span> ./publish-notes.sh</p>
            <p className={styles.output}>Syncing field notes to the public knowledge base...</p>
            <p className={clsx(styles.output, styles.successLine)}>Done. Latest experiments are live.</p>
            <p><span className={styles.prompt}>$</span> <span className={styles.cursor}></span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <div className={styles.workflowGrid}>
          <article className={styles.workflowCard}>
            <p className={styles.cardLabel}>WRITING STYLE</p>
            <Heading as="h2" className={styles.cardTitle}>
              Notes that preserve the path, not just the answer.
            </Heading>
            <p className={styles.cardText}>
              Each article is closer to an engineer&apos;s work log than a polished
              sales page: command trails, dead ends, trade-offs, and the final
              fix.
            </p>
          </article>
          <article className={styles.workflowCard}>
            <p className={styles.cardLabel}>WHY THIS SITE</p>
            <Heading as="h2" className={styles.cardTitle}>
              Build a durable reference for everyday development.
            </Heading>
            <p className={styles.cardText}>
              The goal is simple: make useful decisions easier to repeat across
              terminals, editors, servers, and documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
        description="DocBit technical blog and developer notes">
      <HomepageHeader />
      <main className={styles.main}>
        <TerminalSection />
        <WorkflowSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
