import styles from './Button.module.scss';

export default function Button({ children, className }) {
  return (
    <button type="button" className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
