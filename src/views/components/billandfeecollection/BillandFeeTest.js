import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import {GetGSTClientsDD} from '../../../service/GstClientService'
import {GetProcessPopupDataById} from '../../../service/CollectionAndBalanceService'
import { Col, Row } from 'react-bootstrap';
export const BillandFeeTest = () => {
  const [clientId,setClientId] =useState([])
  const [client,setClient] =useState([])
  const [show,setShow] =useState(false)
  let navigate = useNavigate()
  useEffect(()=>{
    getGstClientId();
   
  },[])
  const formik = useFormik({
    initialValues: {
      gstClientID:'',
    },
    //validationSchema:BillAndFeeCollectionValidation,
    onSubmit: values => {
        console.log(values)
        
      },
    });
    const handleSubmit=()=>{
      navigate("/CreateBillAndFeeCollection",{state:client})
    }
    const getGstClientId =()=>{
      GetGSTClientsDD().then(res=>{
        console.log(res)
       
        setClientId(res.data.result)
      })
    }
    const getMonthAndYear = (e) => {
      console.log("tager",e.target.value)
      
      GetProcessPopupDataById(e.target.value).then(res=>{
        if(res?.data?.isSuccess){
          setClient(res.data.result)
          setShow(true)
          }else{
              setShow(false)
          }
        
       })
      
        
    };
    const handleCancle =()=>{
      navigate('/billandfeecollection')
    }
    console.log("client",client
    )
    return (
      <div  className='container p-2 col-11 col-sm-10 col-lg-10 mt-5'>
         
          <form
            id="formik-form"
            onSubmit={formik.handleSubmit}
            className="ml-2 p-2 mt-2 m-auto col-lg-12"
          >
            <h2 className="Tableheading ml-1 text-center">
            GST Bills Processing
            </h2>
            <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="gstClientID"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
                GST Client :<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
              
              <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <select className='form-Control ml-0 col-sm-12 col-lg-10'
                  style={{with:70,padding:'7px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
                name="gstClientID"
                {...formik.getFieldProps("gstClientID")}
                onChange={(e)=>{formik.handleChange(e);getMonthAndYear(e)}}
               >
                  <option value="" label="Select Client" />
               {clientId.map(item=>(
                <option value={item.id} label={item.gstClientAndGSTIN} />
                ))}
              </select>
              {formik.touched.gstClientID && formik.errors.gstClientID ? (
                 <p style={{color:"red",textAlign:"left"}}>{formik.errors.gstClientID}</p>
               ) : null}
              </Col>
                </Row>
                {
                  show ? <div className='m-auto border w-full align-item-center'>
                         <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Propreitor Name :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.propreitorName}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Return Type :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.returnFrequency}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Rack File No :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.rackFileNo}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Tally File Path :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.tallyDataFilePath}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Relation Manager :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.clientRelationMgr}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Current Fees :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.currentFees}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <p className='inner-content col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left'><b>Total Pending Balance :</b></p>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
               <p className='inner-content'>{client.totalPendingBalance}</p>
                  </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>handleSubmit()}>Ok</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
                  </div>:""
                }
               
            </form>
            </div>
  )
}
