import React,{useState} from 'react'
import Emailpopup from '../email/Emailpopup'
import {FormModel} from '../../../shared/FormModel'
import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'
import {register}from '../../../service/auth/authService'
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
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
            confirmPassword:'',
            dob:'',
            doj:'',
            phoneNumber:''
        },
        validationSchema:RegisterValidation,
        onSubmit: (values,{resetForm}) => {
            console.log(values)
            resetForm({values:''})
          },
        });
        const Adduser=()=>{
          var isdob=new Date(formik.values.dob).toISOString();
               formik.values.dob=isdob;
               var doj=new Date(formik.values.doj).toISOString();
               formik.values.doj=doj;
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
    <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-4'>
        
    <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-12">
    <h2 className=' fromheading my-1 p-0 mx-2'>User Registration</h2> 
    <Row className='my-3 mx-1' >
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
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
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="name"
    id="name"
    label="Name :"
    isTouched={formik.touched.name}
    error={formik.errors.name}
    placeholder="Enter Name"
    {...formik.getFieldProps("name")}

    />
    </Col>
    </Row>
    <Row className='my-3 mx-1' >
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="dob"
    id="dob"
    type='date'
    label="Date of Birth"
    placeholder="Enter Date of Birth "
    isTouched={formik.touched.dob}
      error={formik.errors.dob}
    
    {...formik.getFieldProps("dob")}
    />
    </Col>
    
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="doj"
    id="doj"
    type='date'
    label="Date of Join"
    placeholder="Enter Date of Join "
    span="*"
    isTouched={formik.touched.doj}
    error={formik.errors.doj}
    {...formik.getFieldProps("doj")}
    />
    </Col>
    </Row>
    <Row className='my-3 mx-1' >
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="email"
    id="email"
    label="Email"
    placeholder="example@gmail.com"
    span="*"
    isTouched={formik.touched.email}
    error={formik.errors.email}
    {...formik.getFieldProps("email")}
    />
    </Col>
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="phoneNumber"
    id="phoneNumber"
    label="Phone Number "
    placeholder="Enter Phone Number "
   
    isTouched={formik.touched.phoneNumber}
    error={formik.errors.phoneNumber}
    {...formik.getFieldProps("phoneNumber")}
    />
    </Col>
    </Row>
    <Row className='my-3 mx-1' >
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="password"
    id="password"
    type='password'
    label="Password"
    placeholder="Enter Password"
    isTouched={formik.touched.password}
      error={formik.errors.password}
    span="*"
    {...formik.getFieldProps("password")}
    />
    </Col>
    
    <Col m={6} sm={12} lg={6} ml-0>
    <Input  
    name="confirmPassword"
    id="confirmPassword"
    type='confirmPassword'
    label="Confirm Password"
    placeholder="Enter Confirm Password"
    isTouched={formik.touched.confirmPassword}
      error={formik.errors.confirmPassword}
    span="*"
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