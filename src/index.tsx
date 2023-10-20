import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './custom.scss';
import RouterSwitch from './routes';
import '@mantine/core/styles.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

const theme = createTheme({
  /** Put your mantine theme override here */
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <RouterSwitch />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();