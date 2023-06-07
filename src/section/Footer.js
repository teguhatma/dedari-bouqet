import React from 'react';
import { Paragraph } from '../components';

export const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'lightyellow' }}>
      <div className="content has-text-centered">
        <Paragraph>
          Design by <strong>Dedari Bouquet.</strong>
        </Paragraph>
      </div>
    </footer>
  );
};
