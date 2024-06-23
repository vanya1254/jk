import React from "react";

import styles from "./GridLayout.module.scss";

type GridLayoutPropsT = {
  children: React.ReactNode;
  className?: string;
};

export const GridLayout: React.FC<GridLayoutPropsT> = ({
  children,
  className,
}) => {
  return (
    <section className={`${styles.root}${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
};
