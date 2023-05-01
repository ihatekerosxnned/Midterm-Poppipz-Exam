import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navigation from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Content from './components/Content/Content';

class App extends React.Component{
  render(){
    return(
      <>
      <Navigation />
      <Header />
      <Content />
      </>
    );
  }
}

export default App;
