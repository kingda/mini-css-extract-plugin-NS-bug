import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './style.css';
const App = () => <div/>
exports.prerender = function () {
  return ReactDOMServer.renderToString(<App />)
}

