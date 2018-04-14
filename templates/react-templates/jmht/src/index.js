import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from "material-ui";
// import FullPage from './components/fullpage'
// import MotionDemo from './components/reactMotionDemo';

function App() {
  return (
    <Button variant="raised" color="primary">
       登录
    </Button>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
