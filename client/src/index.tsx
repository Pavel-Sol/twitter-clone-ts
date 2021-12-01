import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import theme from "./theme";
import './index.css'
import { store } from './store/store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

