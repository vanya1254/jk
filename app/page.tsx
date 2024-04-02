import { Hero } from "./components/Hero";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
