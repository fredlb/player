import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';

let store = createStore(rootReducer);

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
