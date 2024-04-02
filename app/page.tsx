import { Hero } from "./components/Hero";
import { SeeAllLayout } from "./layouts";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <SeeAllLayout title="Popular shoes" pathName="/sneakers">
        <div>ff</div>
      </SeeAllLayout>
    </main>
  );
}
