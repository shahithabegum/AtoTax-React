import React, { useEffect, useState } from 'react'
import{GetStatus} from '../../../service/StatusService'
import {useNavigate,useLocation} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import {GetGSTClientsDD} from '../../../service/GstClientService'
import {Update_Amendments,GetApprovelStatusDD} from '../../../service/AmendmentsService'
import{GetAmendTypDD} from '../../../service/AmendTypesServices'
import {ValidationAmendments} from './ValidationAmendments'
import { toast } from 'react-toastify';
const UpdateAmendments = () => {
  const [status,setStatus] =useState([])
  const [gstClient,setGstClient] =useState([])
  const [amendtype,setAmendtype] =useState([])
  const [aprrovelStatus,setAprrovelStatus] =useState([])
  let navigate = useNavigate()
  const location =useLocation();
  useEffect(()=>{
    getStatus()
    getGSTClientDD()
    AmendDD()
    AprrovelStatus()
  },[])
    const formik = useFormik({
        initialValues: {
          gstClientId:location.state.gstClientId,
          amendTypeId:location.state.amendTypeId,
          arn:location.state.arn,
          approvalStatusTypeId:location.state.approvalStatusTypeId,
          // sumittedDate:location.state.sumittedDate,
          approvedDate:"",
           
        },
        validationSchema:ValidationAmendments,
        onSubmit: values => {
            console.log(values)
            
          },
        });
        const UpdateAmendment = () =>{
        //   var isdob=new Date(formik.values.sumittedDate).toISOString();
        //  formik.values.sumittedDate=isdob;
         var Approvedate =new Date(formik.values.approvedDate).toISOString();
         formik.values.approvedDate=Approvedate;
         const data = Object.assign(formik.values,{id:location.state.id})
         Update_Amendments(data,location.state.id).then(res=>{
          if(res?.data?.isSuccess){
            toast.success(res.data.successMessage)
            navigate('/amendments')
          }
          else {
            toast.error(res?.data?.errorMessages.toString())
          }
         })
      }
       const getStatus =()=>{
        GetStatus().then(res=>{
          console.log(res.data)
          if(res.status)
            setStatus(res.data.result)
        })
      }
      const getGSTClientDD =()=>{
        GetGSTClientsDD().then(res=>{
          console.log(res.data)
          if(res.status)
          setGstClient(res.data.result)
          
        })
      }
      const AmendDD =()=>{
        GetAmendTypDD().then(res=>{
          console.log(res.data)
          if(res.status)
          setAmendtype(res.data.result)
          
          
        })
      }
      
      const AprrovelStatus =()=>{
        GetApprovelStatusDD().then(res=>{
          console.log(res.data)
          if(res.status)
          setAprrovelStatus(res.data.result)
          
        })
      }
      const handleCancle =()=>{
        navigate('/amendments')
      }
  return (
    <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
          
          <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
          <h2 className=' fromheading my-1 p-0 text-center'>Update Amendment</h2>  
          {/* <span className=' my-1 text-danger text-center'> All Fileds Are Required</span> */}
          <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="amendTypeId"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
               Amend Type :<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
              
              <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <select className='form-Control ml-0 col-sm-12 col-lg-12'
                  style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
                name="amendTypeId"
                type="number"
                {...formik.getFieldProps("amendTypeId")}
               >
                    <option value=" " label="Select Amend Type"/>
               {amendtype.map(item=>(
                <option value={item.id} label={item.amendTypeName} />
                ))}
              </select>
              {formik.touched.amendTypeId && formik.errors.amendTypeId ? (
                 <p style={{color:"red",textAlign:"right"}}>{formik.errors.amendTypeId}</p>
               ) : null}
              </Col>
                </Row>
          <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="Statusid"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
                GST Client Id :<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
              
              <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <select className='form-Control ml-0 col-sm-12 col-lg-12'
                  style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
                name="gstClientId"
                type="number"
                {...formik.getFieldProps("gstClientId")}
               >
                  <option value=" " label="Select Client"/>
               {gstClient.map(item=>(
                <option value={item.id} label={item.gstClientAndGSTIN} />
                ))}
              </select>
              {formik.touched.gstClientId && formik.errors.gstClientId ? (
                 <p style={{color:"red",textAlign:"right"}}>{formik.errors.gstClientId}</p>
               ) : null}
              </Col>
                </Row>
          <Row className='my-3 mx-1' >
          <Col m={6} sm={12} lg={12} ml-0>
          <SmallInput 
          name="arn"
          id="arn"
          label="ARN :"
          span="*"
          placeholder="Update ARN"
          isTouched={formik.touched.arn}
          error={formik.errors.arn}
          {...formik.getFieldProps("arn")}
          />
          </Col>
         </Row>
         <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="approvalStatusTypeId"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
                Approval Status Type:<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
              
              <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <select className='form-Control ml-0 col-sm-12 col-lg-12'
                  style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
                name="approvalStatusTypeId"
                type="number"
                {...formik.getFieldProps("approvalStatusTypeId")}
               >
                    <option value=" " label="Select Amend Type"/>
               {aprrovelStatus.map(item=>(
                <option value={item.id} label={item.statusType} />
                ))}
              </select>
              {formik.touched.approvalStatusTypeId && formik.errors.approvalStatusTypeId ? (
                 <p style={{color:"red",textAlign:"right"}}>{formik.errors.approvalStatusTypeId}</p>
               ) : null}
              </Col>
                </Row>
          {/* <Row className='my-3 mx-1' >
          <Col m={6} sm={12} lg={12} ml-0>
          <SmallInput  
          name="sumittedDate"
          id="sumittedDate"
          label="Sumitted Date"
          type="date"
          isTouched={formik.touched.sumittedDate}
          error={formik.errors.sumittedDate}
          placeholder="UpdateSumitted Date"
          {...formik.getFieldProps("sumittedDate")}
          />
                {formik.touched.sumittedDate && formik.errors.sumittedDate ? (
           <p style={{color:"red"}}>{formik.errors.sumittedDate}</p>
         ) : null}
          </Col>
         </Row> */}
         <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={12} ml-0>
              <SmallInput  
              name="approvedDate"
              id="approvedDate"
              label="Approved Date"
              type="date"
              span="*"
              placeholder="UpdateApproved Date"
              {...formik.getFieldProps("approvedDate")}
              />
                    {formik.touched.approvedDate && formik.errors.approvedDate ? (
               <p style={{color:"red",textAlign:"center"}}>{formik.errors.approvedDate}</p>
             ) : null}
              </Col>
             </Row>
         
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>UpdateAmendment()}>Submit</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
          </form>
      </div>
  )
}

export default UpdateAmendments