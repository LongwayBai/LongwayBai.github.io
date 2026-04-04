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
    title: 'OpenCode Assistant',
    icon: <ToolingIcon />,
    link: '/docs/opencode',
    description: (
      <>
        AI-driven development notes, configuring OpenCode agents, and integrating
        autonomous coding into terminal workflows.
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
          <Heading as="h2" id="features" className={styles.sectionTitle}>Featured Topics</Heading>
          <p className={styles.sectionSubtitle}>
            Start from the stable documentation hubs for editors, terminal
            workflows, and AI-assisted development notes.
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
