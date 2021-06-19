import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles"

const theme = createMuiTheme({
   palette: {
      primary: {
         light: '#4d4d4d',
         main: '#353535',
         dark: '#262626',
         contrastText: '#ffffff',
      },
      secondary: {
         light: '#90e5ff',
         main: '#56b3ff',
         dark: '#0084cb',
         contrastText: '#000000',
      },
   },
});

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <App/>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
