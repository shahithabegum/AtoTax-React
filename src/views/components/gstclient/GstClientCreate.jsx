import React, { useEffect, useState ,useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
 import {Gstlistschema} from './ValidationSchema'
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {CreateGSTClient} from '../../../service/GstClientService'
import{GetStatus} from '../../../service/StatusService'
import{GetUser} from '../../../service/UserService'

import './Gststyle.scss'
import { toast } from 'react-toastify';

const GstForm = () => {
  let navigate = useNavigate();
  const ref = React.useRef();

  const [status,setStatus] =useState([])
  const [relationMg,setRelationMg] =useState([])
  const [regular,setRegular] =useState([{
    value:true,
    label:"Monthly"
  },
  {
    value:false,
    label:"Quarterly"
  },
]
   )

  useEffect(()=>{
    getStatus();
    getUsers();
  },[])

  const formik = useFormik({
    initialValues: {
      proprietorName:'',
      gstin:'',
      contactName:'',
      gstUserName:'',
      gstUserPassword:'',
      gstRegDate:"",
      gstSurrenderedDate:null,
      gstRelievedDate:null,
      gstAnnualTurnOver:null,
      mobileNumber:'',
      phoneNumber:'',
      contactEmailId:'',
      gstEmailId:'',
      gstEmailPassword:'',
      gstRecoveryEmailId:'',
      gstRecoveryEmailPassword:'',
      ewayBillUserName:'',
      ewayBillPassword:'',
      rackFileNo:'',
      tallyDataFilePath:'',
      isRegular:'',
      statusId:1,
      clientRelationMgrId:''
    },
    
      validationSchema: Gstlistschema,

    onSubmit: values => {
      console.log("Creategstclient",values)
     
      
    },
  });
 
  const createGstClientSubmit= ()=>{
              // console.log("gstSurrenderedDate",formik.values.gstSurrenderedDate)
               console.log("gstRelievedDate",formik.values.gstRelievedDate)
               var isoDategstregdate = new Date(formik.values.gstRegDate).toISOString();
               console.log(isoDategstregdate);
               formik.values.gstRegDate=isoDategstregdate;
               if(formik.values.gstSurrenderedDate){
                var isogstSurrenderedDate=new Date(formik.values.gstSurrenderedDate).toISOString();
                formik.values.gstSurrenderedDate=isogstSurrenderedDate;
               }else{
                console.log("gstSurrenderedDate if block",formik.values.gstSurrenderedDate)
                formik.values.gstSurrenderedDate=null
               }
               if(formik.values.gstRelievedDate){
                var isogstRelievedDate=new Date(formik.values.gstRelievedDate).toISOString();
                formik.values.gstRelievedDate=isogstRelievedDate;
               }
               else{
                console.log("gstSurrenderedDate if block",formik.values.gstRelievedDate)
                formik.values.gstRelievedDate=null
               }
               formik.values.gstAnnualTurnOver=formik.values.gstAnnualTurnOver?formik.values.gstAnnualTurnOver:null
              formik.values.isRegular=formik.values.isRegular==="true"? true:false;
    try{
    CreateGSTClient(formik.values).then((res)=>{
      if(res?.data?.isSuccess){
        // toast.success("Created Success")
        navigate('/Gstclient')
      }
      else {
        toast.error(res?.data?.errorMessages.toString())
      }
    })
    
       
    }catch(err){
      console.log(err)
    }
  }
  const handleCancle = (e) => {
    navigate('/Gstclient')
  };
  const getStatus =()=>{
    GetStatus().then(res=>{
      console.log(res)
      if(res.status)
        setStatus(res.data.result)
    })
  }
  const getUsers =()=>{
    GetUser().then(res=>{
      console.log(res)
      setRelationMg(res.data.result)
    })
  }
  console.log("regular",relationMg)
  return (
    <div className='containerform  p-2 col-11 col-sm-10 col-lg-12 '>
      <h2 className=' fromheading m-0 p-0'>Create New GST Client</h2>  
    
    <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-1" ref={ref}>
    <div className="secondary-title my-2 p-3">GST Details</div>
    <Row className='my-3 mx-1 ' >
      <Col m={6} sm={10} lg={6}>
      <Input 
      name="proprietorName"
      id="proprietorName"
      label="Proprietor Name"
      span="*"
      isTouched={formik.touched.proprietorName}
      error={formik.errors.proprietorName}
      placeholder="Enter Client Name"
      {...formik.getFieldProps("proprietorName")}
      />
      </Col>
      
      <Col m={6} sm={10} lg={6} ml-0>
        
      <Input 
      name="gstin"
      id="gstin"
      label="GSTIN"
      span="*"
      placeholder="Enter TIN Number"
      isTouched={formik.touched.gstin}
      error={formik.errors.gstin}
      {...formik.getFieldProps("gstin")}
      />
      </Col>
      <Col m={6} sm={10} lg={6}>
      <Input 
      name="gstUserName"
      id="gstUserName"
      label="GST User Name"
    
      placeholder="Enter User Name"
      isTouched={formik.touched.gstUserName}
      error={formik.errors.gstUserName}
      {...formik.getFieldProps("gstUserName")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstUserPassword"
      id="gstUserPassword"
      label="GST User Password"
      
      
      placeholder="Enter User Password"
      {...formik.getFieldProps("gstUserPassword")}
      />
      </Col>
      <Col m={6} sm={10} lg={6}>
      <Input 
      name="gstEmailId"
      id="gstEmailId"
      label="GST Email"
      span="*"
      placeholder="example@gmail.com"
      isTouched={formik.touched.gstEmailId}
      error={formik.errors.gstEmailId}
      {...formik.getFieldProps("gstEmailId")}
      />
      
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstEmailPassword"
      id="gstEmailPassword"
      label="GST Email Password"
     
      placeholder="Enter Email Password"
      {...formik.getFieldProps("gstEmailPassword")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstRecoveryEmailId"
      id="gstRecoveryEmailId"
      label="GST Recovery Email"
      placeholder="example@gmail.com"
      isTouched={formik.touched.gstRecoveryEmailId}
      error={formik.errors.gstRecoveryEmailId}
      {...formik.getFieldProps("gstRecoveryEmailId")}
      />
     
      </Col>
      <Col m={6} sm={10} lg={6}>
      <Input 
      name="gstRecoveryEmailPassword"
      id="gstRecoveryEmailPassword"
      label="GST Recovery Email Password"
     
      placeholder="Enter Recovery Email Password"
      {...formik.getFieldProps("gstRecoveryEmailPassword")}
      />
      
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstRegDate"
      id="gstRegDate"
      type="date"
      placeholder="dd-mm-yyyy"
      span="*"
      label="GST Reg Date"
      isTouched={formik.touched.gstRegDate}
      error={formik.errors.gstRegDate}
      {...formik.getFieldProps("gstRegDate")}
      
      />
      
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstRelievedDate"
      id="gstRelievedDate"
      label="GST Relieved Date"
      type="date"
      
      {...formik.getFieldProps("gstRelievedDate")}
      />
      </Col>
      <Col m={6} sm={10} lg={6}>
      <Input 
      name="gstAnnualTurnOver"
      id="gstAnnualTurnOver"
      label="GST Annual TurnOver"
     
      placeholder="Enter in Rupees"
      type="number"
      {...formik.getFieldProps("gstAnnualTurnOver")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstSurrenderedDate"
      id="gstSurrenderedDate"
      label="GST Surrendered Date"
      type="date"
      {...formik.getFieldProps("gstSurrenderedDate")}
      />
      </Col>
    </Row>
    <div className="secondary-title my-3 p-3 d-sm-ml-0">Contact Details</div>
      <Row  className='my-3 mx-1 d-sm-ml-0' >
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="contactName"
      id="contactName"
      label="Contact Name"
      placeholder="Enter Contact Name"
      isTouched={formik.touched.contactName}
      error={formik.errors.contactName}
      {...formik.getFieldProps("contactName")}
      />
      
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="contactEmailId"
      id="contactEmailId"
      label="Contact Email"
      placeholder="example@gmail.com"
      {...formik.getFieldProps("contactEmailId")}
      />
      </Col>
        <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="mobileNumber"
      id="mobileNumber"
      label="Mobile Number"
      placeholder="Enter Client Moblie Number"
      {...formik.getFieldProps("mobileNumber")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="phoneNumber"
      id="phoneNumber"
      label="Phone Number"
      span="*"
      placeholder="Enter Client Phone Number"
      {...formik.getFieldProps("phoneNumber")}
      />
      </Col>
       </Row>
       <div className="secondary-title my-3 p-3 d-sm-ml-0">Eway Bill Details</div>
      <Row  className='my-3 mx-1 d-sm-ml-0'>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="ewayBillUserName"
      id="ewayBillUserName"
      label="Eway Bill UserName"
      placeholder="Enter Eway Bill UserName "
      isTouched={formik.touched.ewayBillUserName}
      error={formik.errors.ewayBillUserName}
      {...formik.getFieldProps("ewayBillUserName")}
      />
      
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="ewayBillPassword"
      id="ewayBillPassword"
      label="Eway Bill Password"
     
      {...formik.getFieldProps("ewayBillPassword")}
      />
      </Col>
        <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="rackFileNo"
      id="rackFileNo"
      label="Rack File No"
      span="*"
      placeholder="Enter Rack File Number"
      {...formik.getFieldProps("rackFileNo")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="tallyDataFilePath"
      id="tallyDataFilePath"
      label="Tally Data FilePath"
      span="*"
      placeholder="Enter Tally Data FilePath"
      {...formik.getFieldProps("tallyDataFilePath")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0 >
      <label htmlFor="statusId" className='ml-2'>
       Status<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="statusId"
        type="number"
        {...formik.getFieldProps("statusId")}
        className='col-10 ml-1 p-1 br-2 form-control'
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
      <Col m={6} sm={10} lg={6} ml-0 >
      <label htmlFor="isRegular" className='ml-2'>
       Regular<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="isRegular"
        
        {...formik.getFieldProps("isRegular")}
        className='col-10 ml-1 p-1 br-2 form-control'
      >
       <option value='' label="Select Regular" />
       {regular.map(item=>(
        <option value={item.value} label={item.label} />
        ))}
      </select>
      {formik.touched.isRegular && formik.errors.isRegular ? (
                 <p style={{color:"red"}}>{formik.errors.isRegular}</p>
               ) : null}
      </Col>
      <Col m={6} sm={10} lg={6} ml-0 >
      <label htmlFor="clientRelationMgrId" className='ml-2 mt-2'>
       Relation Manager<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="clientRelationMgrId"
        
        {...formik.getFieldProps("clientRelationMgrId")}
        className='col-10 ml-1 p-1 br-2 form-control'
      >
       <option value='' label="Select Relation Manager" />
       {relationMg.map(item=>(
        <option value={item.id} label={item.userName} />
        ))}
      </select>
      {formik.touched.clientRelationMgrId && formik.errors.clientRelationMgrId ? (
                 <p style={{color:"red"}}>{formik.errors.clientRelationMgrId}</p>
               ) : null}
      </Col>
       </Row>
       <Row className='my-3 mx-1  justify-content-center'>
                <Col m={6} sm={8} lg={4} ml-0 >
                <button type="submit" className='btn btn-block btn-outline-info mb-2'onClick={()=>createGstClientSubmit()} >Submit</button>
              
                </Col>
                <Col m={6} sm={8} lg={4} ml-0>
                <button type="submit" className='btn btn-block  btn-outline-danger  mb-2 '  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
                </Row>
 </form>
 

    </div>
  )
}

export default GstForm