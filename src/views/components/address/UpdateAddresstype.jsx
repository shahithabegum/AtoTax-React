import React, { useEffect, useState } from 'react'
import{GetStatus} from '../../../service/StatusService'
import {useNavigate,useLocation} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import {Update_AddressType} from '../../../service/AddressTypesService'
import AddressValidation from './AddressValidation'
import { toast } from 'react-toastify';

const UpdateAddresstype = () => {
    const [status,setStatus] =useState([])
    const location =useLocation();
    let navigate = useNavigate()
    useEffect(()=>{
      getStatus()
    },[])
      const formik = useFormik({
          initialValues: {
            addressTypeName:location.state.addressTypeName,
            addressTypeDesc:location.state.addressTypeDesc,
              statusId:location.state.statusId
          },
         validationSchema:AddressValidation,
          onSubmit: values => {
              console.log(values)
            },
          });
         const EditAddress = () =>{
            const data = Object.assign(formik.values,{id:location.state.id})
            Update_AddressType(data,location.state.id).then(res=>{
              if(res?.data?.isSuccess){
                toast.success("updated successfull")
                navigate('/addressType')
              }
              else{
                toast.error(res?.data?.errorMessages)
              }
            })
           
         }
         const getStatus =()=>{
          GetStatus().then(res=>{
            console.log(res)
            if(res.status)
              setStatus(res.data.result)
              
          })
         
        }
        const handleCancle =()=>{
          navigate('/addressType')
        }
        return (
          <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5 '>
            
              <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
              <h2 className="Tableheading ml-1 text-center">Update Address Type</h2>  
              <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={12} ml-0>
                <SmallInput  
                name="addressTypeName"
                id="addressTypeName"
                label="Address Type :"
                span="*"
                placeholder="Enter your Address Type"
                isTouched={formik.errors.addressTypeName}
                error={formik.errors.addressTypeName}
                {...formik.getFieldProps("addressTypeName")}
                />
                </Col>
              
                </Row>
                <Row className='my-3 mx-1 ' >
                <Col m={6} sm={12} lg={12} ml-0>
                <SmallInput  
                name="addressTypeDesc"
                id="addressTypeDesc"
                label="Address Type Desc :"
                placeholder="Enter Address Type Description "
                isTouched={formik.errors.addressTypeDesc}
                error={formik.errors.addressTypeDesc}
                {...formik.getFieldProps("addressTypeDesc")}
                />
                </Col>
                </Row>
                <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="Statusid"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
               Status :<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
              
              <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <select className='form-Control ml-0 col-sm-12 col-lg-12'
                  style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
                name="Statusid"
                type="number"
                {...formik.getFieldProps("statusId")}
               >
                  <option value=" " label="Select Status" />
               {status.map(item=>(
                <option value={item.id} label={item.statusType} />
                ))}
              </select>
              {formik.touched.statusId && formik.errors.statusId ? (
                 <p style={{color:"red",textAlign:"left"}}>{formik.errors.statusId}</p>
               ) : null}
              </Col>
                </Row>
              <Row className='my-3 mx-1 justify-content-center'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>EditAddress()}>Submit</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
              </Row>
              </form>
              
          </div>
        )
              
          
}

export default UpdateAddresstype