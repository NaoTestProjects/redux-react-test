import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import todoApp from './reducers/ToDoReducer';

import App from './components/App';
import './index.css';


let store = createStore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
