import React from "react";

const Contacts = ({ className, children }) => {
  return (
    <div className={className} id="contacts">
      {children}
    </div>
  );
};

export default Contacts;
