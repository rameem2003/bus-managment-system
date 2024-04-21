import React from "react";

const ListLi = ({ className, children }) => {
  return <li className={`${className}`}>{children}</li>;
};

export default ListLi;
