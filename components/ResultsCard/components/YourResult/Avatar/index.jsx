import styles from './Avatar.module.scss';

export default function Avatar({ className }) {
  return (
    <div className={`${styles.avatar} ${className}`}>
      <span className={styles.number}>76</span>
      <span className={styles.of}>of 100</span>
    </div>
  );
}
