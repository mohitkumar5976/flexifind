// IconWrapper.tsx
import React from "react";
import { iconSize } from "../../constants/globalConstants";

const IconWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      style={{ fontSize: `${iconSize}` }}
      className="flex flex-row items-center"
    >
      {children}
    </div>
  );
};

export default IconWrapper;
