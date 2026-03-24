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
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{siteConfig.tagline}</p>
          <Heading
            as="h1"
            className={clsx('hero__title', styles.title)}
            data-testid="home-hero-title">
            Longway Bai
          </Heading>
          <p className={clsx('hero__subtitle', styles.subtitle)}>
            Developer Notes on Neovim, Tmux, Linux, and Tooling.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryCta)}
              to="/blog/"
              data-testid="home-primary-cta">
              Read Blog
            </Link>
            <Link
              className={clsx('button button--secondary button--outline button--lg', styles.secondaryCta)}
              to="/docs/intro"
              data-testid="home-secondary-cta">
              Browse Docs
            </Link>
          </div>
          <div className={styles.heroMeta}>
            <span>Terminal-first workflows</span>
            <span>Config notes that stay practical</span>
            <span>Long-form troubleshooting logs</span>
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
      description="Longway Bai's technical blog and developer notes">
      <HomepageHeader />
      <main className={styles.main}>
        <TerminalSection />
        <WorkflowSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
