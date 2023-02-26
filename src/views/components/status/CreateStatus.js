import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {Create_Status} from '../../../service/StatusService'
import {StatusValidation} from './StatusValidation'
import './Status.scss'
const CreateStatus = () => {
  let navigate =useNavigate()
  const formik = useFormik({
    initialValues: {
       
      statusType:''
    },
   validationSchema:StatusValidation,
    onSubmit: values => {
        console.log(values)
      },
    });
   const createStatus = () =>{
    Create_Status(formik.values).then(res=>{console.log("response",res.data)}).then(navigate('/Status'))
   }
   const handleCancle =()=>{
    navigate('/Status')
  }
  return (
    <div className='container p-2 col-11 col-sm-10 col-lg-12'>
    <h2 className=' fromheading my-1 p-0 statusform'>Create Status Type</h2>  
    <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2  col-lg-7">
    <Row className='my-3mx-1' >
    <Col m={10} sm={12} lg={10} ml-0>
    <Input  
    name="statusType"
    id="statusType"
    label="Status Type"
    span="*"
    placeholder="Enter Status"
    {...formik.getFieldProps("statusType")}
    />
          {formik.touched.statusType && formik.errors.statusType ? (
     <p style={{color:"red"}}>{formik.errors.statusType}</p>
   ) : null}
    </Col>
    </Row>
    <Row className='my-3mx-1'>
                <Col m={10} sm={12} ml-0>
                <button type="submit" className='btn  btn-outline-info ml-1 col-sm-10 col-lg-2 my-1 ' onClick={()=>createStatus()}>Submit</button>
                <button type="submit" className='btn  btn-outline-danger ml-1 col-sm-10 col-lg-2 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
                </Row>
    </form>
    </div>
  )
}

export default CreateStatus