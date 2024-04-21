import React from "react";

const ListUl = ({ className, children }) => {
  return <ul className={`${className}`}>{children}</ul>;
};

export default ListUl;
