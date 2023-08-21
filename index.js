// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import App from "./App";
import { ContextProvider } from './SocketContext';
import './App.css';

ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>, document.getElementById('root'));
