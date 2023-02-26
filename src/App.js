

import React from 'react'

 import {  BrowserRouter as Router} from 'react-router-dom'
 import {RootRoutes} from './config/routes'
 import 'react-toastify/dist/ReactToastify.css';
 import { ToastContainer } from 'react-toastify';


function App() {
   return (
    <React.Fragment>
    <Router>
  
      <RootRoutes />
       <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        style={{width: 'auto'}}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
    </Router>
  </React.Fragment>
   )

}

export default App;
