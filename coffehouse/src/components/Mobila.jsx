import React from "react";

const Mobila = ({ className, children }) => {
  return (
    <div className={className} id="mobile">
      {children}
    </div>
  );
};

export default Mobila;
