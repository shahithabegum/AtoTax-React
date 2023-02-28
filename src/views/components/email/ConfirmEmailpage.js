import React from 'react'
import './email.scss'
const ConfirmEmailpage = () => {
    const handleSubmit =()=>{
        
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