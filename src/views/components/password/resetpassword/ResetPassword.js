import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {useNavigate,useSearchParams} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';

import {resetpassword}from '../../../../service/auth/authService'

import Logo from '../../../../assets/image/testlogo.png'

const ResetPassword = () => {
    let navigate=useNavigate();
    const [searchParams, setSearchParams] = useSearchParams([]);
    const Token=searchParams.get('token')
    const Email=searchParams.get('email')
   console.log("token",Token)
   console.log("email",Email
   )
    const formik = useFormik({
        initialValues: {
          token:Token,
          email:Email,
          newPassword:''
        },
        onSubmit: values => {
            console.log(values)
            handleSubmit()
          },
        });
        const handleSubmit=()=>{
           resetpassword(formik.values).then( data=>{
            if(data?.data?.isSuccess){
              toast.success("Password has Reset Successfully")
              navigate('/login')
            } else {
              toast.error(data?.data?.errorMessages)
            }
         } )
           
          console.log("value",formik.values.password)
        }
        return (
            <div className='containerlogin'>
             <div className='sidewrapper  col-12 '>
               < div className='innercontent d-flex '>
                <div className='sidediv col-lg-6 '>
                  <div className='m-auto imgdiv'><img src={Logo} alt='image' className='logoimg' />
        
                </div>
                <p className='para text-center mt-4'>
                    
                    Your Reliable Tax Partner</p></div>
                <div className='sidedivfrom col-lg-6 m-auto d-block'>
                
                 <div className='formwarrapper '>
                 <h2 className='head p-0 m-0'><b>Reset PassWord </b></h2>
                 <form  onSubmit={formik.handleSubmit} className="mt-4" >
                 <Row className='m-0 w-full p-0' >
                 <Col m={6} sm={12} lg={12} ml-0 className="p-0">
                    <label htmlFor='newPassword' className='text-muted'>New newPassword</label>
                <div class="input-container d-flex">
                <i class="fa fa-key p-2" aria-hidden="true"></i>
                <input 
                id="newPassword" 
                name="newPassword" 
                type="password"
                className='form-control p-2 inputlogin'
                placeholder='Enter Your New newPassword'
                {...formik.getFieldProps("newPassword")}
              />  
          </div>
                  </Col>
              {formik.touched.newPassword && formik.errors.newPassword ? (
                 <p style={{color:"red"}}>{formik.errors.newPassword}</p>
               ) : null}
          
                </Row>
              
                <Row className='m-0 w-full p-0 align-item-center' >
                <Col m={6} sm={12} lg={12} p={0} className="p-0  mt-3">
                <button className="btn btn-info btn-block">Reset password</button>
                  </Col>
                </Row>
                </form>
                 </div>
                </div>
                </div>
            </div>
           
           </div>
          )
}

export default ResetPassword