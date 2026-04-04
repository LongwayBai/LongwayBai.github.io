import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  link: string;
};

function EditorIcon(): ReactNode {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={styles.featureSvg}>
      <rect x="3" y="5" width="26" height="22" rx="5" />
      <path d="M10 13h12M10 18h8" />
      <path d="M9 9l3 3-3 3" className={styles.accentStroke} />
    </svg>
  );
}

function SplitPaneIcon(): ReactNode {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={styles.featureSvg}>
      <rect x="3" y="5" width="26" height="22" rx="5" />
      <path d="M16 5v22M3 14h13" />
      <circle cx="9.5" cy="10" r="1.5" className={styles.accentFill} />
      <circle cx="22.5" cy="11" r="1.5" className={styles.accentFill} />
      <circle cx="22.5" cy="17" r="1.5" className={styles.accentFill} />
    </svg>
  );
}

function LinuxIcon(): ReactNode {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={styles.featureSvg}>
      <path d="M16 5c4 0 7 3.6 7 8.3 0 1.4-.3 2.7-.9 3.8.9.9 1.4 2.2 1.4 3.7 0 3.4-3.4 6.2-7.5 6.2s-7.5-2.8-7.5-6.2c0-1.5.5-2.8 1.4-3.7-.6-1.1-.9-2.4-.9-3.8C9 8.6 12 5 16 5Z" />
      <circle cx="13" cy="13" r="1.2" className={styles.accentFill} />
      <circle cx="19" cy="13" r="1.2" className={styles.accentFill} />
      <path d="M13 19c1 .8 2 .8 3 .8s2 0 3-.8" className={styles.accentStroke} />
    </svg>
  );
}

function ToolingIcon(): ReactNode {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={styles.featureSvg}>
      <path d="M18.8 5a6.2 6.2 0 0 0-4.7 10.2l-6.7 6.7a2 2 0 1 0 2.8 2.8l6.7-6.7A6.2 6.2 0 1 0 18.8 5Z" />
      <circle cx="21.2" cy="10.8" r="1.6" className={styles.accentFill} />
    </svg>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Neovim Configs',
    icon: <EditorIcon />,
    link: '/docs/lazyvim',
    description: (
      <>
        A curated setup for LazyVim, plugins, keymaps, LSP ergonomics, and the
        editing habits that make terminal work feel fast.
      </>
    ),
  },
  {
    title: 'Tmux Workflows',
    icon: <SplitPaneIcon />,
    link: '/docs/tmux',
    description: (
      <>
        Multi-pane terminal patterns, persistent sessions, navigation habits,
        and layouts that keep long-running work under control.
      </>
    ),
  },
  {
    title: 'Linux Systems',
    icon: <LinuxIcon />,
    link: '/docs/intro',
    description: (
      <>
        Shell scripting, package management, debugging sessions, and practical
        notes from living in Linux every day.
      </>
    ),
  },
  {
    title: 'Tooling Notes',
    icon: <ToolingIcon />,
    link: '/docs/intro',
    description: (
      <>
        Small utilities, workflow glue, and environment decisions that help a
        developer setup stay durable over time.
      </>
    ),
  },
];

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureCol)}>
      <Link to={link} className={styles.featureCard}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <div className={styles.textWrapper}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDesc}>{description}</p>
        </div>
        <div className={styles.cardFooter}>Explore <span className={styles.arrow}>→</span></div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} data-testid="featured-topics">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>Featured Topics</Heading>
          <p className={styles.sectionSubtitle}>
            Follow the main threads of this notes library: editors, terminal
            sessions, Linux systems, and the tooling that ties everything together.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
