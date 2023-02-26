import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'
import {register}from '../../../service/auth/authService'
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import { toast } from 'react-toastify';
import { RegisterValidation } from './RegisterValidation';
const Register = () => {
   let navigate=useNavigate();
  //  useEffect(() => {
  //   toast.promise(handleSubmit,{
  //     pending:"loading",
  //     success:"Login Success",
  //     error:"user name or password incorrect"
  //   });
  // }, [])
    const formik = useFormik({
        initialValues: {
            userName:'',
            name:'',
            email:'',
            password:''
        },
        validationSchema:RegisterValidation,
        onSubmit: values => {
            console.log(values)
          
          },
        });
        const Adduser=()=>{
         
            register(formik.values).then(res=>{
              if(res?.data?.isSuccess){
                toast.success("Register Success")
                console.log(res.data)
               navigate('/dashboard')
              }
              else {
                toast.error(res?.data?.errorMessages)
              }
            })
             
           
        }
        const handleCancle =()=>{
          navigate('/dashboard')
        }
  return (
    <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
   
    <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
    <h2 className="Tableheading ml-1 text-center mb-1">User Registeration</h2>  
    <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="userName"
        id="userName"
        label="User Name :"
        span="*"
        placeholder="Enter User Name"
        {...formik.getFieldProps("userName")}
        />
              {formik.touched.userName && formik.errors.userName ? (
         <p style={{color:"red",textAlign:"center"}}>{formik.errors.userName}</p>
       ) : null}
        </Col>
        </Row>
   
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="name"
        id="name"
        label="Name :"
        placeholder="Enter Your Name"
        {...formik.getFieldProps("name")}
        />
              {formik.touched.name && formik.errors.name ? (
         <p style={{color:"red",textAlign:"center"}}>{formik.errors.name}</p>
       ) : null}
        </Col>
        </Row>
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="email"
        id="email"
        label="Email :"
        span="*"
        placeholder="example@gamil.com"
        {...formik.getFieldProps("email")}
        />
              {formik.touched.email && formik.errors.email ? (
         <p style={{color:"red",textAlign:"center"}}>{formik.errors.email}</p>
       ) : null}
        </Col>
        </Row>
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="password"
        id="password"
        label="Password :"
        span="*"
        placeholder="Enter Your Password"
        {...formik.getFieldProps("password")}
        />
              {formik.touched.password && formik.errors.password ? (
         <p style={{color:"red",textAlign:"center"}}>{formik.errors.password}</p>
       ) : null}
        </Col>
        </Row>
        <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>Adduser()}>Register</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
    </form>
    </div>
  )
}

export default Register