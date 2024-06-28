import React from "react";

import styles from "./CheckoutLayout.module.scss";

type CheckoutLayoutPropsT = {
  children: React.ReactNode;
  className?: string;
};

const CheckoutLayout: React.FC<CheckoutLayoutPropsT> = ({
  children,
  className,
}) => {
  return (
    <section className={`${styles.root}${className ? ` ${className}` : ""}`}>
      <h3 className={styles.root_title}>Shipping Information</h3>
      <div className={styles.root__container}>{children}</div>
    </section>
  );
};

export default CheckoutLayout;
