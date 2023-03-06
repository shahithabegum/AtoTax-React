import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import {GetGstFilingDD} from '../../../service/GstFilingTypesService'
import {GetMonth,GetYear} from '../../../service/MonthandYearService'
import {GetGSTClientsDD} from '../../../service/GstClientService'
import {GetMediaDD} from '../../../service/MediaTypeService'
import {Create_BillAndFee} from '../../../service/BIllAndFeeCollectionService'
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import { toast } from 'react-toastify';
import {GetServiceCategoryDD } from '../../../service/ServiceCategoryService'

const CreateBillAndFeeCollection = () => {
  const [clientId,setClientId] =useState([])
  const [multiMedia,setMultiMedia] =useState([])
  const [fillingType,setFillingType] =useState([])
  const [month,setMonth] =useState([])
  const [servicecatid,setServicecatid] =useState([])
  const [year,setYear] =useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    getGstClientId();
    GetMultiMediaDD();
    GetFillingDD();
    getMonth();
    getYear();
    getServiceCatDD();
  },[])
    const formik = useFormik({
        initialValues: {
          gstClientID:'',
          dueMonth:'',
          dueYear:'',
          gstFilingTypeId:'',
          multimediaTypeId:'',
          feesAmount:'',
          feesPaidAmt:'',
          balance:'',
          serviceCategoryId:''
        },
        //validationSchema:PaidDetailValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const createBillAndFee = () =>{
        Create_BillAndFee(formik.values).then(res=>{
            if(res?.data?.isSuccess){
              navigate('/billandfeecollection')
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
      const GetMultiMediaDD =()=>{
        GetMediaDD().then(res=>{
          console.log(res)
         
          setMultiMedia(res.data.result)
        })
      }
      const GetFillingDD =()=>{
        GetGstFilingDD().then(res=>{
          console.log(res)
         
          setFillingType(res.data.result)
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
      const getServiceCatDD =()=>{
        GetServiceCategoryDD().then(res=>{
          console.log(res)
         
          setServicecatid(res.data.result)
        })
      }
     
      const handleCancle =()=>{
        navigate('/billandfeecollection')
      }
      return (
        <div  className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
           
            <form
              id="formik-form"
              onSubmit={formik.handleSubmit}
              className="ml-2 p-2 mt-2 m-auto col-lg-12"
            >
              <h2 className="Tableheading ml-1">
                Create Bill And Fee Collection
              </h2>
              <Row className='my-1 mx-1' >
              <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="gstClientID" className='ml-0'>
      GST Client<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="gstClientID"
        type="number"
        span="*"
       
        {...formik.getFieldProps("gstClientID")}
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
      <label htmlFor="gstFilingTypeId" className='ml-0'>
     Filling Type<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="gstFilingTypeId"
        type="number"
        span="*"
       
        {...formik.getFieldProps("gstFilingTypeId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
        <option value='' label="Select Filling Type" />
                {fillingType.map(item=>(
               <option value={item.id} label={item.filingType} />
              ))}

      </select>
      
      {formik.touched.gstFilingTypeId && formik.errors.gstFilingTypeId ? (
         <p style={{color:"red"}}>{formik.errors.gstFilingTypeId}</p>
       ) : null}
        </Col>
        </Row>
         <Row className='my-1 mx-1' >
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
               <option key={index} value={item.month} label={item.month} />
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
        <Row className='my-1 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <label htmlFor="multimediaTypeId" className='ml-0 mt-2'>
       Multi Media
      </label>
      <select
        name="multimediaTypeId"
        type="number"
        {...formik.getFieldProps("multimediaTypeId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
         <option value='' label="Select Multi Media Type" />
             {multiMedia.map(item=>(
               <option value={item.id} label={item.mediaAndDesc} />
              ))}

      </select>
      
      {formik.touched.multimediaTypeId && formik.errors.multimediaTypeId ? (
         <p style={{color:"red"}}>{formik.errors.multimediaTypeId}</p>
       ) : null}
        </Col>
        <Col m={6} sm={12} lg={6} ml-0>
        <label htmlFor="serviceCategoryId" className='ml-0 mt-2'>
      Service category
      </label>
      <select
        name="serviceCategoryId"
        type="number"
        {...formik.getFieldProps("serviceCategoryId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
         <option value='' label="Select Service categary" />
             {servicecatid.map(item=>(
               <option value={item.id} label={item.serviceNameAndDesc} />
              ))}

      </select>
      
      {formik.touched.serviceCategoryId && formik.errors.serviceCategoryId ? (
         <p style={{color:"red"}}>{formik.errors.serviceCategoryId}</p>
       ) : null}
       </Col>
       
        </Row>
        <Row className='my-1 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="feesAmount"
        id="feesAmount"
        type="number"
        label="Fees Amount"
        placeholder="Enter Fees Amount"
        isTouched={formik.touched.feesAmount}
        error={formik.errors.feesAmount}
        {...formik.getFieldProps("feesAmount")}
        />
            
        </Col>
       
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="feesPaidAmt"
        id="feesPaidAmt"
        type="number"
        label="Fees Paid Amount"
        placeholder="Enter Fees Paid Amount"
        
        {...formik.getFieldProps("feesPaidAmt")}
        />     
        </Col>
        </Row>
          <Row className='my-1 mx-1'>
          <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="balance"
        id="balance"
        type="number"
        label="Balance"
        placeholder="Enter Balance"
        isTouched={formik.touched.balance}
        error={formik.errors.balance}
        {...formik.getFieldProps("balance")}
        />
        </Col>
          </Row>
              <Row className='my-3 mx-1 justify-content-center'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>createBillAndFee()}>Submit</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
              </Row>
            </form>
        </div>
      )
}

export default CreateBillAndFeeCollection