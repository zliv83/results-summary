import Summary from './components/Summary';
import YourResult from './components/YourResult';
import styles from './ResultsCard.module.scss';

export default function ResultsCard() {
  return (
    <div className={styles.resultsCard}>
      <YourResult />
      <Summary />
    </div>
  );
}
