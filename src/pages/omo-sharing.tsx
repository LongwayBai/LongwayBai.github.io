import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './omo-sharing.module.css';

function HeroSection() {
  return (
    <section className={clsx(styles.slideSection, styles.heroSlide)}>
      <div className={styles.slideContent}>
        <Heading as="h1" className={styles.heroTitle}>
          Oh My OpenCode
        </Heading>
        <p className={styles.heroSubtitle}>
          不仅是进终端干活的 AI，而是把“工程团队”装进命令行
        </p>
        <p className={styles.heroNote}>
          这里沿用 OMO 的常见叫法；如果你后面跳到官方仓库，会看到它现在更常用
          <code>Oh My OpenAgent</code> 这个名字。
        </p>
        <div className={styles.actions}>
          <Link
            className="button button--primary button--lg"
            to="/docs/opencode/oh-my-opencode">
            阅读完整笔记
          </Link>
          <a
            className="button button--secondary button--lg"
            href="#problem">
            开始分享 ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className={styles.slideSection}>
      <div className={styles.slideContent}>
        <Heading as="h2" className={styles.slideTitle}>
          它到底解决什么问题？
        </Heading>
        <p className={styles.slideText}>
          如果 OpenCode 解决的是“AI 能不能进终端干活”，那 Oh My OpenCode (OMO) 解决的是：<strong>它进来以后，到底能不能像一个靠谱团队那样干活。</strong>
        </p>
        <ul className={styles.list}>
          <li><strong>单 Agent 的困境：</strong> 同时兼职侦察兵、架构师、施工队和质检员，容易上下文混乱或漏掉边界条件。</li>
          <li><strong>理想的工程纪律：</strong> 先理解意图 → 再拆任务 → 并行找资料 → 执行 → 最后做验证。</li>
          <li><strong>OMO 的定位：</strong> 在 OpenCode 之上补了一层 agent 编排。重点不是变热闹了，而是有了像样的分工。</li>
        </ul>
      </div>
    </section>
  );
}

function RolesSection() {
  return (
    <section className={styles.slideSection}>
      <div className={styles.slideContent}>
        <Heading as="h2" className={styles.slideTitle}>
          不像魔法，更像同事
        </Heading>
        <p className={styles.slideText}>
          它把官方语境里的神话人物，变成了具体的工程职责：
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Sisyphus (主编排)</h3>
            <p className={styles.cardText}>更像技术负责人，负责判断意图、拆任务、派 agent、盯验证。</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Librarian (资料检索)</h3>
            <p className={styles.cardText}>负责去官方文档、GitHub 和示例代码里找证据和最佳实践。</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Explore (仓库探索)</h3>
            <p className={styles.cardText}>快速 grep、找文件、查模式，像一个不嫌麻烦的代码搜索员。</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Momus (评审)</h3>
            <p className={styles.cardText}>帮你看计划和结果里有没有漏项、模糊点和验证缺口。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className={styles.slideSection}>
      <div className={styles.slideContent}>
        <Heading as="h2" className={styles.slideTitle}>
          高精度模式：ultrawork (ulw)
        </Heading>
        <p className={styles.slideText}>
          不用把所有角色背熟再开工，先记住一个常见入口：<code>ultrawork</code>，也就是
          <code>ulw</code>。在分享语境里，你可以先把它理解成一个会把规划、并行探索和验证回路尽量一起拉起来的起手式。
        </p>
        <ul className={styles.list}>
          <li>适合跨文件改动、需要查资料、要跑验证的重型任务。</li>
          <li>它比较贴近“先分析、再规划、再执行、最后验证”这条工程路径。</li>
          <li><em>注意：它真的很强，但也真的很会烧 token。</em></li>
        </ul>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className={styles.slideSection}>
      <div className={styles.slideContent}>
        <Heading as="h2" className={styles.slideTitle}>
          现场演示：终端里的协同
        </Heading>
        <p className={styles.slideNote}>
          下面这段是为了分享而整理的示意流程，不是一次真实会话的逐字转录。
        </p>
        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <span className={styles.dot} style={{backgroundColor: '#ff5f56'}}></span>
            <span className={styles.dot} style={{backgroundColor: '#ffbd2e'}}></span>
            <span className={styles.dot} style={{backgroundColor: '#27c93f'}}></span>
          </div>
          <div className={styles.terminalBody}>
            <p><span className={styles.prompt}>$</span> <span className={styles.cmd}>opencode</span></p>
            <p className={styles.output}>OpenCode v1.0.0 started.</p>
            <p><span className={styles.prompt}>&gt;</span> <span className={styles.cmd}>ulw 给当前项目添加一个技术分享页面，参考 README 和现有结构</span></p>
            <p className={styles.output}>
              <span className={clsx(styles.agentTag, styles.sisyphus)}>Sisyphus</span> 正在分析意图并拆解任务...
            </p>
            <p className={styles.output}>
              <span className={clsx(styles.agentTag, styles.explore)}>Explore</span> 并行运行: grep 查找页面入口和现有的模块化 CSS
            </p>
            <p className={styles.output}>
              <span className={clsx(styles.agentTag, styles.librarian)}>Librarian</span> 并行运行: 查找 Docusaurus 添加自定义页面的最佳实践
            </p>
            <p className={styles.output}>...</p>
            <p className={clsx(styles.output, styles.highlight)}>✔ 示意结果：主流程完成规划、探索、实现与验证收口。</p>
            <p><span className={styles.prompt}>&gt;</span> <span className={styles.cursor}></span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutroSection() {
  return (
    <section className={styles.slideSection}>
      <div className={styles.slideContent}>
        <Heading as="h2" className={styles.slideTitle}>
          总结与取舍
        </Heading>
        <p className={styles.slideText}>
          把它当成一个能放大你已有工作流的系统。你自己先会走，它才会让你走得更快。
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>👍 什么时候用它？</h3>
            <p className={styles.cardText}>已经在终端里工作；任务复杂需要找资料、写代码并验证；需要多环节分工协作。</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>✋ 什么时候别用？</h3>
            <p className={styles.cardText}>改一个错字；查一个配置说明；单次问答。这些用普通 Agent 更省时省钱。</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            查看站点文档
          </Link>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/code-yeongyu/oh-my-openagent"
            target="_blank"
            rel="noopener noreferrer">
            查看 OMO 官方仓库（OpenAgent）
          </a>
        </div>
      </div>
    </section>
  );
}

export default function OmoSharing(): ReactNode {
  return (
    <Layout
      title="Oh My OpenCode - 10分钟分享"
      description="Oh My OpenCode 技术分享页面">
      <main className={styles.main}>
        <HeroSection />
        <ProblemSection />
        <RolesSection />
        <WorkflowSection />
        <DemoSection />
        <OutroSection />
      </main>
    </Layout>
  );
}
