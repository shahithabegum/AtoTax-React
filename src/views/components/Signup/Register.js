import React,{useState} from 'react'
import Emailpopup from '../email/Emailpopup'
import {FormModel} from '../../../shared/FormModel'
import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'
import {register}from '../../../service/auth/authService'
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import { toast } from 'react-toastify';
import { RegisterValidation } from './RegisterValidation';

const Register = () => {
   let navigate=useNavigate();
   const [show, setShow] = useState(false);
//    const handleClose = () =>{ setShow(false)
//     console.log("modal")
// }
//   const handleShow = () => setShow(true);
    const formik = useFormik({
        initialValues: {
            userName:'',
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema:RegisterValidation,
        onSubmit: values => {
            console.log(values)
          
          },
        });
        const Adduser=()=>{
         
            register(formik.values).then(res=>{
              if(res?.data?.isSuccess){
               // toast.success("Register Success")
                console.log(res.data)
               setShow(true);
              
              }
              else {
                toast.error(res?.data?.errorMessages.toString())
              }
            })
             
           
        }
        const handleCancle =()=>{
          navigate('/dashboard')
           
        }
        console.log("show",show)
        const isEnable=formik.values.password===formik.values.confirmPassword
  return (
    <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
   
    <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
    <h2 className="Tableheading ml-1 text-center mb-1">User Registration</h2>  
    <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="userName"
        id="userName"
        label="User Name :"
        span="*"
        isTouched={formik.touched.userName}
        error={formik.errors.userName}
        placeholder="Enter User Name"
        {...formik.getFieldProps("userName")}
        />
        </Col>
        </Row>
   
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="name"
        id="name"
        label="Name :"
        isTouched={formik.touched.name}
        error={formik.errors.name}
        placeholder="Enter Your Name"
        {...formik.getFieldProps("name")}
        />
        </Col>
        </Row>
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="email"
        id="email"
        label="Email :"
        type="email"
        span="*"
        isTouched={formik.touched.email}
        error={formik.errors.email}
        placeholder="example@gamil.com"
        {...formik.getFieldProps("email")}
        />
        </Col>
        </Row>
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <SmallInput  
        name="password"
        id="password"
        label="Password :"
        type="password"
        isTouched={formik.touched.password}
        error={formik.errors.password}
        span="*"
        placeholder="Enter Your password"
        {...formik.getFieldProps("password")}
        />
        </Col>
        </Row>
        <Row className='my-3 mx-1 ' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput  
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm Password:"
            span="*"
            type="password"
            placeholder="Enter Your Confirm Password"
            isTouched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            {...formik.getFieldProps("confirmPassword")}
            />
            </Col>
            </Row>
        <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' disabled={!isEnable} onClick={()=>Adduser()}>Register</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
    </form>
     <FormModel 
     show={show}
     onHide={()=>{setShow(false)}}
     title={<i class="fa fa-envelope-open" aria-hidden="true" style={{fontSize:"50px"}}></i>}
     >
      <Emailpopup onHide={()=>{setShow(false)}} email={formik.values.email}/>
     </FormModel>
    </div>
    
  )
}

export default Register