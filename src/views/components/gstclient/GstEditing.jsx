import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {useLocation} from 'react-router-dom';
import { UpdateGSTClient} from './../../../service/GstClientService'
import{GetUser} from '../../../service/UserService'
import{GetStatus} from '../../../service/StatusService'
import { toast } from 'react-toastify';
const GstEditing = () => {
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

  const location = useLocation();
  //Navigation
  let navigate = useNavigate();
  console.log(location.state)
  //getting Id
  useEffect(()=>{
    getStatus();
    getUsers()
  },[])
  const regdate=location.state.gstRegDate
  var RegDate = new Date(regdate);
  console.log("RegDate",RegDate)
  const formik = useFormik({
    //Fetching values 
    initialValues: {
      proprietorName:location.state.proprietorName,
      gstin:location.state.gstin,
      contactName:location.state.contactName,
      gstUserName:location.state.gstUserName,
      gstUserPassword:location.state.gstEmailPassword,
      gstRegDate: RegDate,
      gstSurrenderedDate:location.state.gstSurrenderedDate,
      gstRelievedDate:location.state.gstRelievedDate,
      gstAnnualTurnOver:location.state.gstAnnualTurnOver,
      mobileNumber:location.state.mobileNumber,
      phoneNumber:location.state.phoneNumber,
      contactEmailId:location.state.contactEmailId,
      gstEmailId:location.state.gstEmailId,
      gstEmailPassword:location.state.gstEmailPassword,
      gstRecoveryEmailId:location.state.gstRecoveryEmailId,
      gstRecoveryEmailPassword:location.state.gstRecoveryEmailPassword,
      ewayBillUserName:location.state.ewayBillUserName,
      ewayBillPassword:location.state.ewayBillPassword,
      rackFileNo:location.state.rackFileNo,
      tallyDataFilePath:location.state.tallyDataFilePath,
      statusId:location.state.statusId,
      clientRelationMgrId:location.state.clientRelationMgrId,
      isRegular:location.state.isRegular
    },
//handleSubmitting
    onSubmit:values=>{
     // handleUpdate  (values)
    }
  });
  //Update   GstClient
    const handleUpdate  = ()=>{
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
        const data = Object.assign(formik.values,{id:location.state.id})
      try{
        UpdateGSTClient(data,location.state.id).then(res=>{
          if(res?.data?.isSuccess){
            toast.success(res.data.successMessage)
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
    const handleCancle = (e) => {
      navigate('/Gstclient')
    };
    return (
      <div className='containerform  p-2 col-11 col-sm-10 col-lg-12'>
        <h2 className=' fromheading m-0 p-0'>Update  GST Client</h2>  
      
        <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-1" >
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
      placeholder="Update Client Name"
      {...formik.getFieldProps("proprietorName")}
      />
      </Col>
      
      <Col m={6} sm={10} lg={6} ml-0>
        
      <Input 
      name="gstin"
      id="gstin"
      label="GSTIN"
      span="*"
      placeholder="Update TIN Number"
      isTouched={formik.touched.gstin}
      error={formik.errors.gstin}
      {...formik.getFieldProps("gstin")}
      />
      </Col>
      <Col m={6} sm={10} lg={6}>
      <Input 
      name="gstUserName"
      id="gstUserName"
      label="GST UserName"
     
      placeholder="Update User Name"
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
      
      placeholder="Update User Password"
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
    
      placeholder="Update Email Password"
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
     
      placeholder="Update Recovery Email Password"
      {...formik.getFieldProps("gstRecoveryEmailPassword")}
      />
      
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="gstRegDate"
      id="gstRegDate"
      type="date"
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
      
      placeholder="Update in Rupees"
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
      placeholder="Update Contact Name"
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
      placeholder="Update client Moblie Number"
      {...formik.getFieldProps("mobileNumber")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="phoneNumber"
      id="phoneNumber"
      label="Phone Number"
      span="*"
      placeholder="Update client Phone Number"
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
      placeholder="Update Eway Bill UserName "
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
      placeholder="Update Rack File Number"
      {...formik.getFieldProps("rackFileNo")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0>
      <Input 
      name="tallyDataFilePath"
      id="tallyDataFilePath"
      label="Tally Data FilePath"
      placeholder="Update Tally Data FilePath"
      {...formik.getFieldProps("tallyDataFilePath")}
      />
      </Col>
      <Col m={6} sm={10} lg={6} ml-0 >
      <label htmlFor="Statusid" className='ml-2'>
       Status<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="Statusid"
        type="number"
        {...formik.getFieldProps("statusId")}
        className='col-10 ml-1 p-1 br-2 form-control'
      >
       <option value='' label="Select Status" />
       {status.map(item=>(
        <option value={item.id} label={item.statusType} />
        ))}
      </select>
      {formik.touched.Statusid && formik.errors.Statusid ? (
                 <p style={{color:"red"}}>{formik.errors.Statusid}</p>
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
                <button type="submit" className='btn btn-block btn-outline-info mb-2  ' onClick={()=>handleUpdate()}>Submit</button>
              
                </Col>
                <Col m={6} sm={8} lg={4} ml-0>
                <button type="submit" className='btn btn-block  btn-outline-danger  mb-2 '  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
                </Row>
 </form>
   
  
      </div>
    )
}

export default GstEditing