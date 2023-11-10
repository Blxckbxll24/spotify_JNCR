import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.js'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1065046042069-34d48q7irnq3mfmqjcmbec56ihp9s08s.apps.googleusercontent.com">
        <React.StrictMode>
          <App/>
        </React.StrictMode>
    </GoogleOAuthProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals