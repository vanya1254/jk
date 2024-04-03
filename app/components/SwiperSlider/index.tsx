"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

import styles from "./SwiperSlider.module.scss";
import "swiper/css";

type SwiperSliderPropsT = {
  children: React.ReactNode[] | JSX.Element[] | string[];
};

export const SwiperSlider: React.FC<SwiperSliderPropsT> = ({ children }) => {
  return (
    <Swiper
      className={styles.root}
      modules={[Keyboard]}
      spaceBetween={20}
      slidesPerView={"auto"}
    >
      {children.map((child, i) => (
        <SwiperSlide className={styles.root__slide} key={i}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
