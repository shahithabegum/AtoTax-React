import React, { useEffect, useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import { useFormik } from 'formik';
import {GetPaymentsDD} from '../../../service/PaymentTypeService'
import {GetMonth,GetYear} from '../../../service/MonthandYearService'
import {GetGSTClientsDD} from '../../../service/GstClientService'
import {GetServiceCategoryDD} from '../../../service/ServiceCategoryService'
import {Update_PaidDetails} from '../../../service/GstPaidDetailService'
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import { toast } from 'react-toastify';
import PaidDetailValidation from './PaidDetailValidation'
const UpdateGstPaid = () => {
  const [clientId,setClientId] =useState([])
  const [serviceCatID,setserviceCatID] =useState([])
  const [paymentTypeId,setPaymentTypeId] =useState([])
  const [month,setMonth] =useState([])
  const [year,setYear] =useState([])
  let navigate = useNavigate()
  const location = useLocation();
  useEffect(()=>{
    getGstClientId();
    getServiceCatID();
    getPaymentTypeID();
    getMonth();
    getYear();
  },[])
    const formik = useFormik({
        initialValues: {
          gstClientID:location.state.gstClientId,
          serviceCategoryId:location.state.serviceCategoryId,
          paymentTypeId:location.state.paymentTypeId,
          paymentDueMonth:location.state.paymentDueMonth,
          paymentDueYear:location.state.paymentDueYear,
          amount:location.state.amount,
        },
        validationSchema:PaidDetailValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const updateGstPaidDetails = () =>{
        const data = Object.assign(formik.values,{id:location.state.id})
        Update_PaidDetails(data,location.state.id).then(res=>{
            if(res?.data?.isSuccess){
              navigate('/GstPaidDetails')
            }
            else{
              toast.error(res?.data?.errorMessages.toString())
            }
          })
          
       }
       const getGstClientId =()=>{
        GetGSTClientsDD().then(res=>{
          console.log(res)
         
          setClientId(res.data.result)
        })
      }
      const getServiceCatID =()=>{
        GetServiceCategoryDD().then(res=>{
          console.log(res)
         
          setserviceCatID(res.data.result)
        })
      }
      const getPaymentTypeID =()=>{
        GetPaymentsDD().then(res=>{
          console.log(res)
         
          setPaymentTypeId(res.data.result)
        })
      }
      const getMonth =()=>{
        GetMonth().then(res=>{
          console.log(res)
         
          setMonth(res.data.result)
        })
      }
      const getYear =()=>{
        GetYear().then(res=>{
          console.log(res)
         
          setYear(res.data.result)
        })
      }
      const handleCancle =()=>{
        navigate('/GstPaidDetails')
      }
      return (
        <div  className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
           <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
           <h2 className=' fromheading my-1 p-0 text-center'>Update GST Paid Details</h2>  
            <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="gstClientID"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
             GST Client :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="gstClientID"
              {...formik.getFieldProps("gstClientID")}
             >
                <option value='' label="Select Client" />
             {clientId.map(item=>(
               <option value={item.id} label={item.gstClientAndGSTIN} />
              ))}
            </select>
            {formik.touched.gstClientID && formik.errors.gstClientID ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.gstClientID}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="serviceCategoryId"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
             Service Category :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="serviceCategoryId"
              type="number"
              {...formik.getFieldProps("serviceCategoryId")}
             >
                <option value='' label="Select Service Category" />
             {serviceCatID.map(item=>(
               <option value={item.id} label={item.serviceNameAndDesc} />
              ))}
            </select>
            {formik.touched.serviceCategoryId && formik.errors.serviceCategoryId ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.serviceCategoryId}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="paymentTypeId"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
             Payment Type :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="paymentTypeId"
              type="number"
              {...formik.getFieldProps("paymentTypeId")}
             >
                <option value='' label="Select  Payment Type" />
                {paymentTypeId.map(item=>(
               <option value={item.id} label={item.paymentMethod} />
              ))}
            </select>
            {formik.touched.paymentTypeId && formik.errors.paymentTypeId ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.paymentTypeId}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="paymentDueMonth"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
            Month :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="paymentDueMonth"
              
              {...formik.getFieldProps("paymentDueMonth")}
             >
                <option value='' label="Select Payment Due Month" />
                {month.map((item,index)=>(
               <option key={index} value={item.month} label={item.month} />
              ))}
            </select>
            {formik.touched.paymentDueMonth && formik.errors.paymentDueMonth ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.paymentDueMonth}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="paymentDueYear"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
             Year :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="paymentDueYear"
              type="number"
              {...formik.getFieldProps("paymentDueYear")}
             >
                <option value='' label="Select Payment Due Year" />
                {year.map((item,index)=>(
               <option key={index} value={item} label={item} />
               ))} 
            </select>
            {formik.touched.paymentDueYear && formik.errors.paymentDueYear ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.paymentDueYear}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput  
            name="amount"
            id="amount"
            label="Payment Amount :"
            type="number"
            isTouched={formik.touched.amount}
            error={formik.errors.amount}
            span="*"
            placeholder="Update Payment Amount"
            {...formik.getFieldProps("amount")}
            />    
            </Col>
            </Row>
              <Row className='my-3 mx-1 justify-content-center'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>updateGstPaidDetails()}>Submit</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
              </Row>
            </form>
        </div>
      )
}

export default UpdateGstPaid