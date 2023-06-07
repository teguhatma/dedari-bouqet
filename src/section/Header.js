import React from 'react';
import { Title, Paragraph } from '../components';

export const Header = () => {
  return (
    <div className="container" style={containerStyle}>
      <div className="has-text-centered">
        <Title content="DEDARI BOUQUET" type={1} styles={titleStyle} />
        <Paragraph styles={paragraphStyle}>
          <small>
            Jika aku mendapatkan bunga setiap kali aku memikirkanmu,
          </small>
        </Paragraph>
        <Paragraph styles={paragraphStyle}>
          <small>aku bisa selamanya berjalan di hamparan taman bunga</small>
        </Paragraph>
        <Paragraph styles={{ color: '#797979' }}>
          <small>--- Alfred Tennyson ---</small>
        </Paragraph>
        <br />
        <Paragraph styles={{ color: '#797979' }}>
          <small>Bouquet adalah salah satu jenis bunga itu. Cieeee</small>
        </Paragraph>
      </div>
    </div>
  );
};

// Implementing Style
const titleStyle = { fontStyle: 700, fontSize: 35 };
const containerStyle = {
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 100,
  paddingBottom: 100,
  background: '#ffeb9f',
  marginBottom: 7,
};
const paragraphStyle = { color: '#797979', fontStyle: 'italic' };
