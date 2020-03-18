import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

//Cargar la fuente
WebFont.load({
  google: {
    families: ['Ubuntu']
  }
});

// Crear store 
const store = createStore(reducers, applyMiddleware(thunk));

//Renderiza los componentes en el div root del html
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );

render(Routes);

//Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();