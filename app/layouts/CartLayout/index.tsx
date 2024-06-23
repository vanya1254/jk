import React from "react";

import styles from "./Cart.module.scss";

type CartLayoutPropsT = {
  children: React.ReactNode;
  className?: string;
};

export const CartLayout: React.FC<CartLayoutPropsT> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.root}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};
