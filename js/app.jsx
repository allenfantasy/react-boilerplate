'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent.jsx';

window.onload = () => {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
}

