import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

//from 'react-dom/client' import ReactDOM
import './index.css';
import App from './App';
import store from './redux_stores/store'

import { Provider } from 'react-redux'
//import reportWebVitals from './reportWebVitals';
//
const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
 <Provider store={store}>
    <App />
  </Provider>
)

