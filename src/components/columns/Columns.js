import React from 'react';

export const Columns = ({ children, styles, gapless }) => {
  var classGapless = 'columns';
  if (gapless) {
    classGapless = 'columns is-gapless';
  }

  return (
    <div className={classGapless} style={styles}>
      {children}
    </div>
  );
};
