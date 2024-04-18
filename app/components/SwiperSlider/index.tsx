"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

import styles from "./SwiperSlider.module.scss";
import "swiper/css";

type SwiperSliderPropsT = {
  className?: string | undefined;
  classNameChild?: string | undefined;
  children: React.ReactNode[] | JSX.Element[] | string[];
  gap: number;
  slidesPerView: number | "auto" | undefined;
};

export const SwiperSlider: React.FC<SwiperSliderPropsT> = ({
  classNameChild,
  className,
  children,
  gap,
  slidesPerView,
}) => {
  return (
    <Swiper
      grabCursor={true}
      className={`${styles.root} ${className}`}
      modules={[Keyboard]}
      spaceBetween={gap}
      slidesPerView={slidesPerView}
      keyboard
    >
      {children.map((child, i) => (
        <SwiperSlide
          className={`${styles.root__slide} ${classNameChild}`}
          key={i}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
