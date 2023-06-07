import React from 'react';

export const Paragraph = ({styles, name, children}) => {
  return <p className={name} style={styles}>{children}</p>;
};
