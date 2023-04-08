import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}>
     <ThemeProvider theme={theme}>
      <App/>
      </ThemeProvider>
  </Provider>
  
);
