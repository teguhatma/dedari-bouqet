import React from 'react';
import './App.css';
import {
  ContentImage,
  Footer,
  Header,
  OrderProcess,
  SocialMedia,
} from './section';
import { Fab } from './components';

function App() {
  return (
    <div className="App" style={appStyle}>
      <Header />
      <ContentImage />
      <SocialMedia />
      <OrderProcess />
      <Footer />
      <Fab content="Order Here" type="is-success" styles={fabStyle}/>
    </div>
  );
}

export default App;

const appStyle = {
  background: 'lightyellow',
  paddingLeft: 20,
  paddingRight: 20,
};

const fabStyle = {fontSize: 15}
