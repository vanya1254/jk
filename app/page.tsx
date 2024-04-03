import { CardProduct, SwiperSlider, Hero } from "./components";
import { SeeAllLayout } from "./layouts";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <SeeAllLayout title="Popular shoes" pathName="/sneakers">
        <SwiperSlider>
          {[...new Array(3)].map((_, i) => (
            <CardProduct key={i} />
          ))}
        </SwiperSlider>
      </SeeAllLayout>
    </main>
  );
}
