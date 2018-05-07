import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss'
import 'hover.css'
import Container from './components/Container'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import {
  HashRouter as Router,
} from 'react-router-dom'

import initReactFastclick from 'react-fastclick';
initReactFastclick();

function App() {
  return (
    <Container>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Container>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
