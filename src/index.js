import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components'

const theme = {
  main: '#003A5C',
  second: '#FF8086',
  third: '#FFE960',
  gray: "#f2f2f2",
  white: '#E8F4FF'
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

