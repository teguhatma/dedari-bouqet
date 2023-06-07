import React from 'react';

export const Button = ({ content, type, styles }) => {
  const buttonType = 'button ' + type;

  return (
    <button className={buttonType} style={styles}>
      {content}
    </button>
  );
};
