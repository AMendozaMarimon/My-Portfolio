import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './Redux/store.js';
import { Provider } from 'react-redux';

AOS.init(); // Inciializa AOS

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
