import React, { useEffect, useState } from 'react'
import{GetStatus} from '../../../service/StatusService'
import {useLocation, useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {Update_Employee} from '../../../service/EmployeeService'
import {GetEmpJobRole} from '../../../service/EmpJobRoleService'
import EmployeeValidation from './EmployeeValidation'
import { toast } from 'react-toastify';
const UpdateEmployees = () => {
  const [status,setStatus] =useState([])
  const [jobrole,setJobrole] =useState([])
  let location=useLocation()
  let navigate=useNavigate()
  useEffect(()=>{
    getStatus()
    getjobrole()
  },[])
    const formik = useFormik({
        initialValues: {
          firstName:location.state.firstName,
          lastName:location.state.lastName,
          dob:location.state.dob,
          doj:location.state.doj,
          email:location.state.email,
          concactNo:location.state.concactNo,
          empJobRoleId:location.state.empJobRoleId,
            statusId:location.state.statusId
        },
        validationSchema:EmployeeValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const updateEmp = () =>{
        var isdob=new Date(formik.values.dob).toISOString();
               formik.values.dob=isdob;
               var doj=new Date(formik.values.doj).toISOString();
               formik.values.doj=doj;
               const data = Object.assign(formik.values,{id:location.state.id})
               Update_Employee(data,location.state.id).then(res=>{
                if(res?.data?.isSuccess){
                  toast.success("Updated Success")
                  navigate('/Employees')
                }
                else{
                  toast.error(res?.data?.errorMessages)
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
        <h2 className=' fromheading my-1 p-0 mx-2'>Update Employee</h2>  
        <Row className='my-3 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="firstName"
        id="firstName"
        label="First Name "
        placeholder="Enter your First Name "
        span="*"
        isTouched={formik.errors.firstName}
          error={formik.errors.firstName}
        {...formik.getFieldProps("firstName")}
        />
              
        </Col>
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="lastName"
        id="lastName"
        label="Last Name "
        placeholder="Enter your Last Name "
        span="*"
        isTouched={formik.errors.lastName}
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
        placeholder="Enter your Date of Birth "
        isTouched={formik.errors.dob}
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
        placeholder="Enter your Date of Join "
        span="*"
        isTouched={formik.errors.doj}
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
        isTouched={formik.errors.email}
        error={formik.errors.email}
        {...formik.getFieldProps("email")}
        />
        </Col>
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="concactNo"
        id="concactNo"
        label="Contact Number "
        placeholder="Enter your Contact Number "
        span="*"
        isTouched={formik.errors.concactNo}
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
      <label htmlFor="Statusid" className='ml-2'>
       Job Role
      </label>
      <select
        name="Statusid"
        type="number"
        span="*"
        {...formik.getFieldProps("statusId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
          <option value='' label="Select Status" />
       {jobrole.map(item=>(
        <option value={item.id} label={item.jobRole} />
        ))}
      </select>
      
      {formik.touched.statusId && formik.errors.statusId ? (
         <p style={{color:"red"}}>{formik.errors.statusId}</p>
       ) : null}
      </Col>
        </Row>
        <Row className='my-1 mx-1  justify-content-center'>
                <Col m={6} sm={8} lg={4} ml-0 >
                <button type="submit" className='btn btn-block btn-outline-info mb-2  ' onClick={()=>updateEmp()}>Submit</button>
              
                </Col>
                <Col m={6} sm={8} lg={4} ml-0>
                <button type="submit" className='btn btn-block  btn-outline-danger  mb-2 '  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
                </Row>
        </form>
    </div>
  )
}

export default UpdateEmployees