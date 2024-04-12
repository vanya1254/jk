import React from "react";

export const Filters: React.FC = () => {
  const onTouchMove = (e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    // line.style.opacity = 0;
    section.style.transform = "translate(0px, 30px)";
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const section = e.currentTarget;
    // line.style.opacity = 0;
    // section.style.transform = "none";
  };

  return (
    <section
      onMouseDown={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ height: "50vh" }}
    >
      Filters:React.FC
    </section>
  );
};
