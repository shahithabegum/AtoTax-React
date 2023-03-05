import React, { useEffect, useState } from 'react'
import{GetServiceCategory} from '../../../service/ServiceCategoryService'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {Create_ClientFeeCharge} from '../../../service/ClientFeeChargeSerivce'
const Createfeecharge = () => {
  const [status,setStatus] =useState([])
  let navigate=useNavigate()
  useEffect(()=>{
    getDefultCharge()
  },[])
    const formik = useFormik({
        initialValues: {
          gstClientId:'',
          serviceCategoryId:'',
          defaultCharge:''
        },
       // validationSchema:AmendValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const createFeeCharge = () =>{
        Create_ClientFeeCharge(formik.values).then(res=>{console.log("response",res.data)}).then( navigate('/Clientfeecharges'))
           
       }
       const getDefultCharge =()=>{
        GetServiceCategory().then(res=>{
          console.log(res)
          if(res.status)
            setStatus(res.data.result)
        })
      }
      const handleCancle =()=>{
        navigate('/Clientfeecharges')
      }
  return (
    <div className='container p-2 col-11 col-sm-10 col-lg-12'>
        <h2 className='fromheading my-1 p-0'>Create Client Fee Map</h2>  
        <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2  col-lg-7">
        <Row className='my-3 ml-2' >
        <Col m={6} sm={12} lg={12} ml-0>
        <Input  
        name="gstClientId"
        id="gstClientId"
        label="GST Client Id"
        placeholder="Enter GST Client Id "
        span="*"
        {...formik.getFieldProps("gstClientId")}
        />
              {formik.touched.gstClientId && formik.errors.gstClientId ? (
         <p style={{color:"red"}}>{formik.errors.gstClientId}</p>
       ) : null}
        </Col>
        </Row>
        <Row className='my-3 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
        <Input  
        name="defaultCharge"
        id="defaultCharge"
        label="Default Charge"
        placeholder="Enter Default Charge "
        span="*"
        {...formik.getFieldProps("defaultCharge")}
        />
              {formik.touched.defaultCharge && formik.errors.defaultCharge ? (
         <p style={{color:"red"}}>{formik.errors.defaultCharge}</p>
       ) : null}
        </Col>
        </Row>
        <Row className='my-3 mx-1' >
        <Col m={6} sm={12} lg={12} ml-0>
      <label htmlFor="ServiceName" className='ml-2'>
      ServiceName 
      </label>
      <select
        name="serviceCategoryId"
        type="number"
        span="*"
        {...formik.getFieldProps("serviceCategoryId")}
        className='col-8 ml-1 p-2 rounded'
      >
          <option value='' label="Select Status" />
       {status.map(item=>(
        <option value={item.id} label={item.serviceName} />
        ))}
      </select>
      
      {formik.touched.serviceCategoryId && formik.errors.serviceCategoryId ? (
         <p style={{color:"red"}}>{formik.errors.serviceCategoryId}</p>
       ) : null}
      </Col>
        </Row>
       
        <Row className='my-3 mx-1'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>createFeeCharge()}>Submit</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
        </form>
    </div>
  )
}

export default Createfeecharge