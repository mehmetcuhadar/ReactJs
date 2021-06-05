import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
      <App></App>
  </Provider>,document.querySelector('#root')
);








