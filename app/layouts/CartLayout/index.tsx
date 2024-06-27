import React from "react";

import styles from "./CartLayout.module.scss";

type CartLayoutPropsT = {
  children: React.ReactNode;
  className?: string;
};

const CartLayout: React.FC<CartLayoutPropsT> = ({ children, className }) => {
  return (
    <div className={`${styles.root}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};

export default CartLayout;
