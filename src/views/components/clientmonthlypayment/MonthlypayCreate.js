
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import {GetPaymentsDD} from '../../../service/PaymentTypeService'

import {GetGSTClientsDD} from '../../../service/GstClientService'
import {Create_MonthlyPayment} from '../../../service/MonthlyPaymentService'
import {GetlMonthAndYearByClient} from '../../../service/CollectionAndBalanceService'
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import { toast } from 'react-toastify';
import {GetServiceCategoryDD } from '../../../service/ServiceCategoryService'
const MonthlypayCreate = () => {
  const [clientId,setClientId] =useState([])
  const [paymentId,setPaymentId] =useState([])
  const [month,setMonth] =useState([])
  const [servicecatid,setServicecatid] =useState([])
  const [year,setYear] =useState([])
 
  let navigate = useNavigate()
  useEffect(()=>{
    getGstClientId();
    GetpaymentDD();
    getServiceCatDD();
  },[])
    const formik = useFormik({
        initialValues: {
          gstClientID:'',
          dueMonth:'',
          dueYear:'',
          paymentTypeId:'',
          serviceCategoryId:'',
          paymentReferenceNumber:'',
          receivedAmount:'', 
          comments:''
        },
       // validationSchema:BillAndFeeCollectionValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const createMothlyPay = () =>{
        Create_MonthlyPayment(formik.values).then(res=>{
            if(res?.data?.isSuccess){
              navigate('/clientMonthlyPay')
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
     
      const GetpaymentDD =()=>{
        GetPaymentsDD().then(res=>{
          console.log(res)
         
          setPaymentId(res.data.result)
        })
      }
    
     
      const getServiceCatDD =()=>{
        GetServiceCategoryDD().then(res=>{
          console.log(res)
         
          setServicecatid(res.data.result)
        })
      }
   
   

 const getMonthAndYear = (e) =>{
    console.log("month and year called")
    console.log("clientid",e.target.value)
    GetlMonthAndYearByClient(e.target.value).then(res=>{
      setMonth(res.data.result.listMonths);
      setYear(res.data.result.listYears)
    })
    
 
  }
   
      const handleCancle =()=>{
        navigate('/clientMonthlyPay')
      }
     
      return (
        <div  className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
           
            <form
              id="formik-form"
              onSubmit={formik.handleSubmit}
              className="ml-2 p-2 mt-2 m-auto col-lg-12"
            >
              <h2 className="Tableheading ml-1">
              Client Monthly Payments
              </h2>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="gstClientID" className='ml-0'>
      GST Client<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="gstClientID"
        span="*"
        {...formik.getFieldProps("gstClientID")}
        onChange={getMonthAndYear}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
          <option value='' label="Select Client" />
       {clientId.map(item=>(
        <option value={item.id} label={item.gstClientAndGSTIN} />
        ))}
      </select>
      
      {formik.touched.gstClientID && formik.errors.gstClientID ? (
         <p style={{color:"red"}}>{formik.errors.gstClientID}</p>
       ) : null}
      </Col>
      
      <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="paymentTypeId" className='ml-0'>
      Payment Type<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="paymentTypeId"
        type="number"
        span="*"
       
        {...formik.getFieldProps("paymentTypeId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
        <option value='' label="Select Filling Type" />
                {paymentId.map(item=>(
               <option value={item.id} label={item.paymentMethod} />
              ))}
      </select>
      
      {formik.touched.paymentTypeId && formik.errors.paymentTypeId ? (
         <p style={{color:"red"}}>{formik.errors.paymentTypeId}</p>
       ) : null}
        </Col>
        </Row>
         <Row className='my-3 mx-1' >
         <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="dueMonth" className='ml-0'>
      Month <span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="dueMonth"
        type="number"
        span="*"
        {...formik.getFieldProps("dueMonth")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
         
          <option value='' label="Select Payment Due Month" />
                {month.map((item,index)=>(
               <option key={index} value={item} label={item} />
              ))}
      </select>
      
      {formik.touched.dueMonth && formik.errors.dueMonth ? (
         <p style={{color:"red"}}>{formik.errors.dueMonth}</p>
       ) : null}
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="dueYear" className='ml-0'>
      Year<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="dueYear"
        type="number"
        span="*"
        {...formik.getFieldProps("dueYear")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
            <option value='' label="Select Payment Due Year" />
                {year.map((item,index)=>(
               <option key={index} value={item} label={item} />
               ))} 

      </select>
      
      {formik.touched.dueYear && formik.errors.dueYear ? (
         <p style={{color:"red"}}>{formik.errors.dueYear}</p>
       ) : null}
      </Col>
        
        </Row>
        <Row className='my-3 mx-1' >
       
        <Col m={6} sm={12} lg={6} ml-0>
        <label htmlFor="serviceCategoryId" className='ml-0 mt-2'>
      Service category
      </label>
      <select
        name="serviceCategoryId"
        type="number"
        {...formik.getFieldProps("serviceCategoryId")}
        // onChange={handlepopup}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
         <option value='' label="Select Service category" />
             {servicecatid.map(item=>(
               <option value={item.id} label={item.serviceNameAndDesc} />
              ))}
      </select>
      
      {formik.touched.serviceCategoryId && formik.errors.serviceCategoryId ? (
         <p style={{color:"red"}}>{formik.errors.serviceCategoryId}</p>
       ) : null}
       </Col>
       <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="paymentReferenceNumber"
        id="paymentReferenceNumber"
        label="Payment Reference Number "
        placeholder="Enter Payment Reference Number"
        span="*"
        isTouched={formik.touched.paymentReferenceNumber}
        error={formik.errors.paymentReferenceNumber}
        {...formik.getFieldProps("paymentReferenceNumber")}
        />
             
        </Col>
        </Row>
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="receivedAmount"
        id="receivedAmount"
        label="Received Amount"
        placeholder="Enter Received Amount "
        span="*"
        isTouched={formik.touched.receivedAmount}
        error={formik.errors.receivedAmount}
        {...formik.getFieldProps("receivedAmount")}
        />
             
        </Col>
        <Col m={6} sm={12} lg={6} ml-0>
            <div class="form-group">
           <label for="comments">Comments</label>
           <textarea class="form-control" 
             name="comments"
            id="comments" 
            rows="3"
            placeholder="Enter comments"
            isTouched={formik.touched.comments}
            error={formik.errors.comments}
            {...formik.getFieldProps("comments")}></textarea>
           </div>
        </Col>
       
        </Row>
              <Row className='my-3 mx-1 justify-content-center'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-3 float-right' onClick={()=>createMothlyPay()}>Submit</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-3'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
              </Row>
            </form>
          
        </div>
      )
}
export default MonthlypayCreate
