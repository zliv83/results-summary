import Image from 'next/image';

import styles from './SummaryArea.module.scss';

export default function SummaryArea({ className, icon, title, value }) {
  return (
    <div className={`${styles.summaryArea} ${className}`}>
      <div className={styles.left}>
        <Image alt={title} src={icon} height={20} width={20} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.value}>{value}</span>
        <span className={styles.maxValue}>/ 100</span>
      </div>
    </div>
  );
}
