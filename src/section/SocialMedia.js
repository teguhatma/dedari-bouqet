import React from 'react';
import { Paragraph, Title } from '../components';
import { socialMedia } from '../data';

export const SocialMedia = () => {
  return (
    <div className="container" style={containerStyle}>
      <div
        className="level-item has-text-centered"
        style={{ marginBottom: 25 }}
      >
        <Title content="Keep in Touch" type={2} styles={titleStyle} />
      </div>
      <nav className="level">
        {socialMedia.map((media, index) => (
          <div
            className="level-item has-text-centered"
            style={levelItemStyle}
            key={index}
          >
            <div>
              <Paragraph styles={{ fontSize: 15 }}>{media.title}</Paragraph>
              <Paragraph name="title">{media.counter}</Paragraph>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

const containerStyle = {
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 40,
  paddingBottom: 40,
  background: '#ff6b6b',
};

const titleStyle = { fontWeight: 500 };
const levelItemStyle = { paddingBottom: 10, paddingTop: 10 };
