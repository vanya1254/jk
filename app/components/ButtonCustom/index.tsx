import React from "react";

import styles from "./ButtonCustom.module.scss";

type ButtonCustomPropsT = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  text: string;
};

const ButtonCustom: React.FC<ButtonCustomPropsT> = ({
  onClick,
  className,
  text,
}) => {
  return (
    <button onClick={onClick} className={`${styles.root} ${className}`}>
      {text}
    </button>
  );
};

export default ButtonCustom;
