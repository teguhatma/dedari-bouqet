import React from 'react';
import { Column, Columns } from '../components';
import { firstImages, secondImages } from '../data';

export const ContentImage = () => {
  return (
    <div className="container" style={containerStyle}>
      <Columns gapless={true}>
        {firstImages.map((image, index) => (
          <Column key={index}>
            <img src={image.content} alt={image.alt} />
          </Column>
        ))}
      </Columns>
      <Columns gapless={true}>
        {secondImages.map((image, index) => (
          <Column key={index}>
            <img src={image.content} alt={image.alt} />
          </Column>
        ))}
      </Columns>
    </div>
  );
};

const containerStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
};
