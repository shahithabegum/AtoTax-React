import React, { useEffect, useState } from 'react'
import{GetStatus} from '../../../service/StatusService'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {Create_Employee} from '../../../service/EmployeeService'
import {GetEmpJobRole} from '../../../service/EmpJobRoleService'
import EmployeeValidation from './EmployeeValidation'
import { toast } from 'react-toastify';
const CreateEmployees = () => {
  const [status,setStatus] =useState([])
  const [jobrole,setJobrole] =useState([])
  let navigate=useNavigate()
  useEffect(()=>{
    getStatus()
    getjobrole()
  },[])
    const formik = useFormik({
        initialValues: {
          firstName:'',
          lastName:'',
          dob:'',
          doj:'',
          email:'',
          concactNo:'',
          empJobRoleId:'',
            statusId:''
        },
        validationSchema:EmployeeValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const CreateEmp = () =>{
        var isdob=new Date(formik.values.dob).toISOString();
               formik.values.dob=isdob;
               var doj=new Date(formik.values.doj).toISOString();
               formik.values.doj=doj;
               Create_Employee(formik.values).then(res=>{
                if(res?.data?.isSuccess){
                  navigate('/Employees')
                }
                else {
                  toast.error(res?.data?.errorMessages.toString())
                }
               })
            
       }
       const getStatus =()=>{
        GetStatus().then(res=>{
          console.log(res)
          if(res.status)
            setStatus(res.data.result)
        })
      }
      const getjobrole =()=>{
         GetEmpJobRole().then(res=>{
          console.log(res)
          if(res.status)
          setJobrole(res.data.result)
        })
      }
      const handleCancle =()=>{
        navigate('/Employees')
      }
      console.log("jonrole check",jobrole)
  return (
    <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-4'>
        
        <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-12">
        <h2 className=' fromheading my-1 p-0 mx-2'>Create Employee</h2> 
        <Row className='my-3 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="firstName"
        id="firstName"
        label="First Name "
        placeholder="Enter First Name "
        span="*"
        isTouched={formik.touched.firstName}
          error={formik.errors.firstName}
        {...formik.getFieldProps("firstName")}
        />
              
        </Col>
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="lastName"
        id="lastName"
        label="Last Name "
        placeholder="Enter Last Name "
        span="*"
        isTouched={formik.touched.lastName}
        error={formik.errors.lastName}
        {...formik.getFieldProps("lastName")}
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
        span="*"
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
        name="concactNo"
        id="concactNo"
        label="Contact Number "
        placeholder="Enter Contact Number "
        span="*"
        isTouched={formik.touched.concactNo}
        error={formik.errors.concactNo}
        {...formik.getFieldProps("concactNo")}
        />
        </Col>
        </Row>
        <Row className='my-3 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="Statusid" className='ml-2'>
       Status 
      </label>
      <select
        name="Statusid"
        type="number"
        span="*"
        {...formik.getFieldProps("statusId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
          <option value='' label="Select Status" />
       {status.map(item=>(
        <option value={item.id} label={item.statusType} />
        ))}
      </select>
      
      {formik.touched.statusId && formik.errors.statusId ? (
         <p style={{color:"red"}}>{formik.errors.statusId}</p>
       ) : null}
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="empJobRoleId" className='ml-2'>
       Job Role
      </label>
      <select
        name="empJobRoleId"
        type="number"
        span="*"
        {...formik.getFieldProps("empJobRoleId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
          <option value='' label="Select Status" />
       {jobrole.map(item=>(
        <option value={item.id} label={item.jobRole} />
        ))}
      </select>
      
      {formik.touched.empJobRoleId && formik.errors.empJobRoleId ? (
         <p style={{color:"red"}}>{formik.errors.empJobRoleId}</p>
       ) : null}
      </Col>
        </Row>
        <Row className='my-1 mx-1  justify-content-center'>
                <Col m={6} sm={8} lg={4} ml-0 >
                <button type="submit" className='btn btn-block btn-outline-info mb-2  ' onClick={()=>CreateEmp()}>Submit</button>
              
                </Col>
                <Col m={6} sm={8} lg={4} ml-0>
                <button type="submit" className='btn btn-block  btn-outline-danger  mb-2 '  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
                </Row>
        </form>
    </div>
  )
}

export default CreateEmployees