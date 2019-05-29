import React from "react";

/**
 * Adding a div with a certain styling
 */
const WithClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default WithClass;
