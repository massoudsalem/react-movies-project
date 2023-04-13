import React, { StrictMode, useEffect } from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';

import './index.css';

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorModeProvider>
    </Provider>
  </StrictMode>,
);
