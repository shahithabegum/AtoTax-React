import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {Link,Navigate,useNavigate} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {login}from '../../../service/auth/authService'
import {authService} from '../../../service/auth'
import Logo from '../../../assets/image/testlogo.png'
import './login.css'
const Login = () => {
  // useEffect(() => {
  //   toast.promise(handleSubmit,{
  //     pending:"loading",
  //     success:"Login Success",
  //     error:"user name or password incorrect"
  //   });
  // }, [])
  let navigate=useNavigate();
    const formik = useFormik({
        initialValues: {
            userName:'',
            password:''
        },
        //validationSchema:AmendValidation,
        onSubmit: values => {
            console.log(values)
            handleSubmit(values)
          },
        });
        const handleSubmit=(values)=>{
           login(values).then(data=>{
            console.log(data)
            if(data?.data?.isSuccess){
             navigate('/dashboard')
            authService.setAuthToken(data.data.result.token);
            authService.setCurrentUser(data.data.result.user);
            } else {
              toast.error(data?.data?.errorMessages.toString())
            }
             
           })
          
          
        }
        if(authService.isAuthenticated()) {
          return <Navigate to='/dashboard' />
      }
  return (
   <div className='containerlogin'>
     <div className='sidewrapper  col-12 '>
       < div className='innercontent d-flex '>
        <div className='sidediv col-lg-6'>
          <div className='m-auto imgdiv'><img src={Logo} alt='image' className='logoimg' />

        </div>
        <p className='para text-center mt-4'>
            
            Your Reliable Tax Partner</p></div>
        <div className='sidedivfrom col-lg-6 col-sm-12 m-auto'>
        
         <div className='formwarrapper '>
         <h2 className='head p-0 m-0'><b>Welcome to AtoTax</b></h2>
         <p className='text-muted mt-1'>Login to your AtoTax Account to Continue</p>
         <form  onSubmit={formik.handleSubmit} className="mt-4" >
         <Row className='m-0 w-full p-0' >
         <Col m={6} sm={12} lg={12} ml-0 className="p-0">
        <div class="input-container d-flex">
        <i class="fa fa-user p-2" aria-hidden="true"></i>
        <input 
        id="userName" 
        name="userName" 
        type="userName"
        className='form-control p-2 inputlogin'
        placeholder='Enter User Name'
        {...formik.getFieldProps("userName")}
      />  
  </div>
          </Col>
      {formik.touched.userName && formik.errors.userName ? (
         <p style={{color:"red"}}>{formik.errors.userName}</p>
       ) : null}
  
        </Row>
        <Row className='row m-0 w-full p-0 mt-3' >
        <Col m={6} sm={12} lg={12} ml-0 className="p-0">
        <div class="input-container d-flex  ">
        <i class="fa fa-key p-1" aria-hidden="true"></i>
    <input 
        id="password" 
        name="password" 
        type="password"
        className='form-control p-2 inputlogin'
        placeholder='Enter Password'
        {...formik.getFieldProps("password")}
      />  
  </div>
          </Col>
       
        </Row>
        <Row className='m-0 w-full p-0' >
        <Col m={6} sm={12} lg={12} p={0} className="p-0 mt-3">
            <span className='text-muted'> 
            By clicking Sign In, you agree to our<Link to="/resetpassword"> Privacy Policy</Link>
            </span>
        </Col>
        
        </Row>
        <Row className='m-0 w-full p-0 align-item-center' >
        <Col m={6} sm={12} lg={12} p={0} className="p-0  mt-3">
            <span className='text-muted mt-3'> 
            Forgot?<Link to="/forgotpassword"> Password</Link>
            </span>
           
        </Col>
        <Col m={6} sm={12} lg={12} p={0} className="p-0  mt-3">
        <button className="btn btn-info btn-block">Sign In</button>
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

export default Login