import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';
// import {store, persistor} from './Reducers';
// import {PersistGate} from 'redux-persist/integration/react';
// import cors from 'cors';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
  {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
  {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
