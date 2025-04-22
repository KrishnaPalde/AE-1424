import React from "react";
import classNames from "classnames";

const Skeleton = ({className}) => {
  return (
    <div
      className={classNames(
        "animate-pulse bg-gray-300 rounded-md",
        className
      )}
    />
  );
};

export default Skeleton;
