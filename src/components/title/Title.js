import React from 'react';

export const Title = ({ content, type, styles }) => {
  const titleClass = getTitleType(type)

  return (
    <h1 className={titleClass} style={styles}>
      {content}
    </h1>
  );
};

const getTitleType = (type) => {
  switch (type) {
    case 1:
      return 'title is-1';
    case 2:
      return 'title is-2';
    case 3:
      return 'title is-3';
    case 4:
      return 'title is-4';
    case 5:
      return 'title is-5';

    default:
      return 'title is-6';
  }
};
