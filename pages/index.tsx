import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

export interface IHome {}

const Home: NextPage<IHome> = () => {
  return (
    <section className={styles.container}>
      <h1>Hello</h1>
    </section>
  );
};

export default Home;
