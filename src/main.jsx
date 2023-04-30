import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
    <ToastContainer/>
  </AppProvider>,
)
