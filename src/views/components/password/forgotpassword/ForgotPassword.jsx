import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {Link,Navigate,useNavigate} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import Logo from '../../../../assets/image/Atotaxlogo.png'
import {forgotpassword} from '../../../../service/auth/authService'
const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {
            username:'',
            email:''
        },
        //validationSchema:AmendValidation,
        onSubmit: values => {
            console.log(values)
            handleSubmit(values)
          },
        });
        const handleSubmit=(values)=>{
           
           forgotpassword(values).then(data=>{
            if(data?.data?.isSuccess){
              toast.success("mail has send successfully")
            } else {
              toast.error(data?.data?.errorMessages)
            }
           })
           
             
          
          
          
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
         <h2 className='head p-0 m-0'><b>Forgot PassWord ?</b></h2>
         <form  onSubmit={formik.handleSubmit} className="mt-4" >
         <Row className='m-0 w-full p-0' >
         <Col m={6} sm={12} lg={12} ml-0 className="p-0">
        <div class="input-container d-flex">
        <i class="fa fa-user p-2" aria-hidden="true"></i>
        <input 
        id="username" 
        name="username" 
        type="username"
        className='form-control p-2 inputlogin'
        placeholder="Reset using User-Name"
        {...formik.getFieldProps("username")}
      />  
  </div>
          </Col>
      {formik.touched.username && formik.errors.username ? (
         <p style={{color:"red"}}>{formik.errors.username}</p>
       ) : null}
  
        </Row>
        <p className='text-center text-danger  m-1' style={{fontSize:"20px"}}>OR</p>
        <Row className='row m-0 w-full p-0 ' >
        <Col m={6} sm={12} lg={12} ml-0 className="p-0">
        <div class="input-container d-flex  ">
        <i class="fa fa-envelope p-1" aria-hidden="true"></i>
    <input 
        id="email" 
        name="email" 
        type="email"
        className='form-control p-2 inputlogin'
        placeholder='Reset using  Email'
        {...formik.getFieldProps("email")}
      />  
  </div>
          </Col>
       
        </Row>
        {/* <Row className='m-0 w-full p-0' >
        <Col m={6} sm={12} lg={12} p={0} className="p-0 mt-3">
            <span className='text-muted'> 
            By clicking Sign In, you agree to our<Link to="#"> Privacy Policy</Link>
            </span>
        </Col>
        
        </Row> */}
        <Row className='m-0 w-full p-0 align-item-center' >
        {/* <Col m={6} sm={12} lg={12} p={0} className="p-0  mt-3">
            <span className='text-muted mt-3'> 
            Forgot ? <Link>UserName</Link> or <Link>Password</Link>
            </span>
           
        </Col> */}
        <Col m={6} sm={12} lg={12} p={0} className="p-0  mt-3">
        <button className="btn btn-info btn-block">Request Reset Link</button>
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

export default ForgotPassword