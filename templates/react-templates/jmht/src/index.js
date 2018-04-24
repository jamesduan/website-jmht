import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'hover.css'
// import { Button } from "material-ui";
// import FullPage from './components/fullpage'
// import MotionDemo from './components/reactMotionDemo';
import Container from './components/Container'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import {
  HashRouter,
} from 'react-router-dom'

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
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
