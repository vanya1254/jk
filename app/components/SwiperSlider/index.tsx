"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

import styles from "./SwiperSlider.module.scss";
import "swiper/css";

type SwiperSliderPropsT = {
  children: React.ReactNode[] | JSX.Element[] | string[];
  gap: number;
  slidesPerView: number | "auto" | undefined;
};

export const SwiperSlider: React.FC<SwiperSliderPropsT> = ({
  children,
  gap,
  slidesPerView,
}) => {
  return (
    <Swiper
      grabCursor={true}
      className={styles.root}
      modules={[Keyboard]}
      spaceBetween={gap}
      slidesPerView={slidesPerView}
    >
      {children.map((child, i) => (
        <SwiperSlide className={styles.root__slide} key={i}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
