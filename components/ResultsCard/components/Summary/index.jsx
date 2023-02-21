import styles from './Summary.module.scss';
import Button from './components/Button';
import SummaryArea from './components/SummaryArea';

export default function Summary() {
  const summaries = [
    {
      icon: './icon-reaction.svg',
      title: 'Reaction',
      value: '80',
      key: 1,
      className: styles.reaction,
    },
    {
      icon: './icon-memory.svg',
      title: 'Memory',
      value: '92',
      key: 2,
      className: styles.memory,
    },
    {
      icon: './icon-verbal.svg',
      title: 'Verbal',
      value: '61',
      key: 3,
      className: styles.verbal,
    },
    {
      icon: './icon-visual.svg',
      title: 'Visual',
      value: '73',
      key: 4,
      className: styles.visual,
    },
  ];

  const summaryArea = summaries.map((summary) => (
    <SummaryArea
      key={summary.key}
      icon={summary.icon}
      title={summary.title}
      value={summary.value}
      className={summary.className}
    />
  ));

  return (
    <div className={styles.summary}>
      <span className={styles.title}>Summary</span>
      <div className={styles.summaryAreaContainer}>{summaryArea}</div>
      <Button className={styles.button}>Continue</Button>
    </div>
  );
}
