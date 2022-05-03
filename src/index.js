import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import { BlogProvider } from './context/context';
import { AuthProvider } from './context/Auth';
import axios from 'axios';

// import components
import App from './App';

// import styles
import './assets/css/main.css';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('HomePage')
);
