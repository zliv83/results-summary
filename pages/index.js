/* eslint-disable import/extensions */
import Head from 'next/head';
import ResultsCard from '@/components/ResultsCard';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <ResultsCard />
    </div>
  );
}
