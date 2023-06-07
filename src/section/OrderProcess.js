import React from 'react';
import { Column, Columns, Paragraph, Title } from '../components';
import { orderProcess } from '../data';

export const OrderProcess = () => {
  return (
    <div className="container has-text-centered" style={containerStyle}>
      <Title content="Order Process" type={2} styles={titleStyle} />
      <Columns styles={columnsStyle}>
        {orderProcess.map((process) => (
          <Column>
            <ion-icon name={process.iconName} style={process.styles} />
            <Paragraph styles={paragraphStyle}>{process.title}</Paragraph>
            <Paragraph name="subtitle" styles={descriptionStyle}>
              {process.description}
            </Paragraph>
          </Column>
        ))}
      </Columns>
    </div>
  );
};

const containerStyle = {
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 60,
  paddingBottom: 60,
  background: '#262626',
  marginTop: 7,
};

const columnsStyle = { marginTop: 40, paddingLeft: 10, paddingRight: 10 };
const titleStyle = { fontWeight: 500, color: '#e4e4e4' };
const paragraphStyle = { color: '#e4e4e4', marginTop: 5 };
const descriptionStyle = { color: '#e4e4e4', marginTop: 10 };
