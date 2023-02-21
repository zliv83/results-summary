import Avatar from './Avatar';
import styles from './YourResult.module.scss';

export default function YourResult() {
  return (
    <div className={styles.yourResult}>
      <span className={styles.title}>Your Result</span>
      <Avatar className={styles.avatar} />
      <span className={styles.great}>Great</span>
      <span className={styles.description}>
        Your performance exceed 65% of the people conducting the test here!
      </span>
    </div>
  );
}
