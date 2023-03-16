import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {authService} from './service/auth'
import { toast } from 'react-toastify';
// For GET requests
axios.interceptors.request.use(
  config => {
    const token = authService.getAuthToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
   (err) => {
     console.log(err)

      return Promise.reject(err);
   }
);

// For POST requests
axios.interceptors.response.use(
   (res) => {
      let message;
      // Add configurations here
      // if (res.status === 201) {
      //    console.log('Posted Successfully');
      // }
      if(res){
         if(res?.data?.statusCode===200){
            message=res.data.successMessage
            toast.success(message)
         }
         else if(res?.data?.statusCode===201){
            message=res.data.successMessage
            toast.success(message)
         }
         else  if(res?.data?.statusCode===204){
            message=res.data.successMessage
            toast.error(message)
         }
      }
      
     console.log("successmessage",message)
     console.log("TEST",res.data)
     
      return res;
   },
   (err) => {
      let message ;
     console.log(err.message)
      if(err?.response){
         if(err?.response?.data?.statusCode===400)
         {
            message=err.response.data?.errorMessages.toString()
           
         } else  if(err?.response?.data?.statusCode===401)
         {
            message="Session expired"
          
         }else if(err?.response?.data?.statusCode===500)
         {
            message="Somthing went wrong"
            
         }
         // else if(err?.response?.data?.statusCode===200)
         // {
         //    message=err.response.data?.errorMessages.toString()
            
         // }

      }
      if(!message){
         message=err.message
      }
      toast.error(message)
   
      return Promise.reject(err);
   }
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
