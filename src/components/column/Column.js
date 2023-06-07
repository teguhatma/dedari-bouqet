import React from 'react';

export const Column = ({ children, styles }) => {
  return (
    <div className="column" style={styles}>
      {children}
    </div>
  );
};
