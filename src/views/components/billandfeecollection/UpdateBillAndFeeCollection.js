import React, { useEffect, useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import { useFormik } from 'formik';
// import {GetGstFilingDD} from '../../../service/GstFilingTypesService'
import {GetMonth,GetYear} from '../../../service/MonthandYearService'
import {GetGSTClientsDD} from '../../../service/GstClientService'
// import {GetMediaDD} from '../../../service/MediaTypeService'
import {Update_BillAndFee} from '../../../service/BIllAndFeeCollectionService'
import { Col, Row } from 'react-bootstrap';
import {Model} from '../../../shared/Model'
import { toast } from 'react-toastify';
// import {SmallInput} from '../../../shared/SamllInput'
// import {GetServiceCategoryDD } from '../../../service/ServiceCategoryService'
import Receivecpop from './Receivecpop'
import BillAndFeeCollectionValidation from './BillAndFeeCollectionValidation'
const UpdateBillAndFeeCollection = () => {
  const [clientId,setClientId] =useState([])
  // const [multiMedia,setMultiMedia] =useState([])
  // const [fillingType,setFillingType] =useState([])
  const [month,setMonth] =useState([])
  // const [servicecatid,setServicecatid] =useState([])
  const [year,setYear] =useState([])
  const [show, setShow] = useState(false);
  let navigate = useNavigate()
  const location =useLocation();
  useEffect(()=>{
    getGstClientId();
    // GetMultiMediaDD();
    // GetFillingDD();
    getMonth();
    getYear();
    // getServiceCatDD();
  },[])
    const formik = useFormik({
        initialValues: {
          gstClientID:location.state.gstClientID,
          dueMonth:location.state.dueMonth,
          dueYear:location.state.dueYear,
          // gstFilingTypeId:location.state.gstFilingTypeId,
          // multimediaTypeId:location.state.multimediaTypeId,
          // // feesAmount:'',
          // // feesPaidAmt:'',
          // // balance:'',
          // serviceCategoryId:location.state.serviceCategoryId
        },
        validationSchema:BillAndFeeCollectionValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const UpdateBillAndFee = () =>{
        const data = Object.assign(formik.values,{id:location.state.id})
        Update_BillAndFee(data,location.state.id).then(res=>{
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
      // const GetMultiMediaDD =()=>{
      //   GetMediaDD().then(res=>{
      //     console.log(res)
         
      //     setMultiMedia(res.data.result)
      //   })
      // }
      // const GetFillingDD =()=>{
      //   GetGstFilingDD().then(res=>{
      //     console.log(res)
         
      //     setFillingType(res.data.result)
      //   })
      // }
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
      // const getServiceCatDD =()=>{
      //   GetServiceCategoryDD().then(res=>{
      //     console.log(res)
         
      //     setServicecatid(res.data.result)
      //   })
      // }
     const handlepopup=(e)=>{
      formik.values.dueMonth=e.target.value;
      setShow(true)
      
     }
     const handlepopupclient=(e)=>{
     
      formik.values.gstClientID=e.target.value;
      setShow(true)
     }
     const handlepopupyear=(e)=>{
      formik.values.dueYear=e.target.value;
      setShow(true)
     }
      const handleCancle =()=>{
        navigate('/billandfeecollection')
      }
     
      return (
        <div  className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
          
        <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
        <h2 className=' fromheading my-1 p-0 ml-3 text-center'> Bill And Fee Collection</h2>
        <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="gstClientID"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
              GST Client :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'9px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="gstClientID"
              type="number"
              {...formik.getFieldProps("gstClientID")}
              onChange={handlepopupclient}
             >
                <option value='' label="Select Status" />
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
              <label htmlFor="dueMonth"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
              Month :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'9px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="dueMonth"
              type="number"
              {...formik.getFieldProps("dueMonth")}
              onChange={handlepopup}
             >
                <option value='' label="Select Payment Due Month" />
                {month.map((item,index)=>(
               <option key={index} value={item.month} label={item.month} />
              ))}
            </select>
           

            </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="dueYear"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
              Year :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'9px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="dueYear"
              type="number"
              
              {...formik.getFieldProps("dueYear")}
              onChange={handlepopupyear}
             >
               <option value='' label="Select Payment Due Year" />
                {year.map((item,index)=>(
               <option key={index} value={item} label={item} />
               ))} 
            </select>
            {formik.touched.dueYear && formik.errors.dueYear ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.dueYear}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1 justify-content-center'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>UpdateBillAndFee()}>Filed</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
              </Row>
            </form>
            <Model 
     show={show}
     onHide={()=>{setShow(false)}}
     handleCancle={()=>{navigate('/billandfeecollection')}}
     title=''
     >
     <Receivecpop onHide={()=>{setShow(false)}}/>
     </Model>
        </div>
      )
}

export default UpdateBillAndFeeCollection