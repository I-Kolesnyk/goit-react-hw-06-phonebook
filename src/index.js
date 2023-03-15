import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import { store, persistor } from 'redux/store';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#ffec18',
    sectionBackgroundColor: '#fcffc7',
    buttonBackgroundColor: '#ff9b18',
  },
  containerBorderRadius: '20px',
  inputBorderRadius: '8px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
  boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
