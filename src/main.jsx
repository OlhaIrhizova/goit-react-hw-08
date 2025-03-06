import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize';
import './index.css'; 
import App from './App';
import {persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    <Toaster/>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
