// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'; // Import any global styles
// import App from './App'; // Import the main App
// import { Provider } from "react-redux";
// import Store from "./components/redux/store";

// // Create root element
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render the App component into the root element
// root.render(
//   <React.StrictMode>
//    <Provider store={Store}>
//      <App />
//    </Provider>,
//     {/* <App /> */}
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/store'; // ✅ adjust path
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// // import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import Store from "./components/redux/store";

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// reportWebVitals();
