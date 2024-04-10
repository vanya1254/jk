import React, { useId } from "react";
import ContentLoader from "react-content-loader";

export const CardProductSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={152.5}
    height={224.5}
    viewBox="0 0 152.5 224.5"
    backgroundColor="#909097"
    foregroundColor="#121212"
    uniqueKey={useId()}
  >
    <rect x="0" y="0" rx="4" ry="4" width="152" height="152" />
    <rect x="0" y="159" rx="4" ry="4" width="152" height="28" />
    <rect x="26" y="199" rx="4" ry="4" width="100" height="20" />
  </ContentLoader>
);
