import React,{useState} from 'react'
import {useNavigate,useSearchParams} from 'react-router-dom'
import { toast } from 'react-toastify'
import {confirmEmail}from '../../../service/auth/authService'

import './email.scss'
const ConfirmEmailpage = () => {
  let navigate=useNavigate();
  const [searchParams, setSearchParams] = useSearchParams([]);

  const Token=searchParams.get('token')
  const Email=searchParams.get('email')
 console.log("token",Token)
 console.log("email",Email
 )
 const [email, setEmail] = useState({
  token:Token,
  Email:Email
 })
    const handleSubmit =()=>{
      confirmEmail(email).then(res=>{
        if(res?.data?.isSuccess){
          toast.success("Verified")
          navigate("/login")
        }
        else {
          toast.error(res?.data?.errorMessages.toString())
        }
      })
       
    }
  return (
    <div className='email-container'>
        <div className='buttonwarraper m-auto'>
           <h1 className='Tableheading text-center mt-5'>Confirm Email</h1>
           <div className='container mt-4'>
                <button className='btn btn-block btn-info col-lg-11 m-auto' onClick={()=>{handleSubmit()}}>Click Here to Confirm Your Email</button>
           </div>
         
        </div>
    </div>
  )
}

export default ConfirmEmailpage