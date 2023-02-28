import React, { useEffect, useState } from 'react'
import{GetStatus} from '../../../service/StatusService'
import {useNavigate,Link} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {Create_GstClientAddress} from '../../../service/GstClientAddressService'
import {GetGSTClientsDD} from '../../../service/GstClientService'
import {GetAddressTypeDD} from '../../../service/AddressTypesService'
import AddressExValidation from './AddressExValidation'
import { toast } from 'react-toastify';


const CreateGstClientAddressEx = () => {
    const [status,setStatus] =useState([])
    const [clientId,setClientId] =useState([])
    const [address,setAddress] =useState([])
    let navigate = useNavigate()
    useEffect(()=>{
      getStatus()
      getGstClientId()
      getAddressType()
    },[])
      const formik = useFormik({
          initialValues: {
            gstClientId:'',
            addressTypeId:'',
            addressLine1:'',
            addressLine2:"",
            addressLine3:'',
            city:'',
            district:'',
            state:'',
            pincode:'',
              statusId:''
          },
        validationSchema:AddressExValidation,
          onSubmit: values => {
              console.log(values)
            },
          });
         const CreateAddressExtension = () =>{
            Create_GstClientAddress(formik.values).then(res=>{
              if(res?.data?.isSuccess){
                toast.success("Created Success")
                navigate('/GStClientAddressEx')
              }
              else {
                toast.error(res?.data?.errorMessages.toString())
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
        const getGstClientId =()=>{
            GetGSTClientsDD().then(res=>{
              console.log(res)
             
              setClientId(res.data.result)
            })
          }
          const getAddressType =()=>{
            GetAddressTypeDD().then(res=>{
              console.log(res)
             
              setAddress(res.data.result)
            })
          }
        const handleCancle =()=>{
          navigate('/GStClientAddressEx')
        }
        return (
            <div className='containerform  p-2 col-11 col-sm-10 col-lg-12 mt-4'>
            <form
              id="formik-form"
              onSubmit={formik.handleSubmit}
              className="ml-2 p-2 mt-2 m-auto col-lg-12"
            >
              <h2 className="Tableheading ml-1">
                Create GST Client Address Extension
              </h2>
              <Row className='my-1 mx-1' >
              <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="gstClientId" className='ml-0'>
      GST Client<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="gstClientId"
        type="number"
        span="*"
       
        {...formik.getFieldProps("gstClientId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
          <option value='' label="Select Client" />
       {clientId.map(item=>(
        <option value={item.id} label={item.gstClientAndGSTIN} />
        ))}
      </select>
      
      {formik.touched.gstClientId && formik.errors.gstClientId ? (
         <p style={{color:"red"}}>{formik.errors.gstClientId}</p>
       ) : null}
      </Col>
      
      <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="district"
        id="district"
        label="District"
        placeholder="Enter your District "
       
        {...formik.getFieldProps("district")}
        />
        </Col>
        </Row>
         <Row className='my-1 mx-1' >
         <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="addressTypeId" className='ml-0'>
       Address Type<span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="addressTypeId"
        type="number"
        span="*"
        {...formik.getFieldProps("addressTypeId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
      >
          <option value='' label="Select Status" />
       {address.map(item=>(
        <option value={item.id} label={item.addressTypeName} />
        ))}
      </select>
      
      {formik.touched.addressTypeId && formik.errors.addressTypeId ? (
         <p style={{color:"red"}}>{formik.errors.addressTypeId}</p>
       ) : null}
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="city"
        id="city"
        label="City"
        placeholder="Enter your city"
        span="*"
        isTouched={formik.touched.city}
        error={formik.errors.city}
        {...formik.getFieldProps("city")}
        />
             
        </Col>
        
        </Row>
        <Row className='my-2 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="addressLine1"
        id="addressLine1"
        label="Address Line 1 "
        placeholder="Enter your Address "
        span="*"
        isTouched={formik.touched.addressLine1}
        error={formik.errors.addressLine1}
        {...formik.getFieldProps("addressLine1")}
        />
             
        </Col>
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="state"
        id="state"
        label="State"
        placeholder="Enter Your State"
        span="*"
        isTouched={formik.touched.state}
        error={formik.errors.state}
        {...formik.getFieldProps("state")}
        />
            
        </Col>
       
        </Row>
        <Row className='my-1 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="addressLine2"
        id="addressLine2"
        label="Address Line 2"
        placeholder="Enter your Address "
        
        {...formik.getFieldProps("addressLine2")}
        />
             
        </Col>
        
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="pincode"
        id="pincode"
        label="Pincode"
        placeholder="Enter your Pincode"
        span="*"
        isTouched={formik.touched.pincode}
        error={formik.errors.pincode}
        {...formik.getFieldProps("pincode")}
        />
        </Col>
        </Row>
        <Row className='my-1 mx-1' >
        <Col m={6} sm={12} lg={6} ml-0>
        <Input  
        name="addressLine3"
        id="addressLine3"
        label="Address Line 3"
        placeholder="Enter your Address "
       
        {...formik.getFieldProps("addressLine3")}
        />
        </Col>
        
        <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="Statusid" className='ml-0'>
       Status <span style={{color:'red',fontSize:'20px'}}>*</span>
      </label>
      <select
        name="Statusid"
        type="number"
        span="*"
        {...formik.getFieldProps("statusId")}
        className='ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control'
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
        </Row>
       
        <Row className='my-1 mx-1  justify-content-center'>
                <Col m={6} sm={8} lg={4} ml-0 >
                <button type="submit" className='btn btn-block btn-outline-info mb-2  ' onClick={()=>CreateAddressExtension()}>Submit</button>
              
                </Col>
                <Col m={6} sm={8} lg={4} ml-0>
                <button type="submit" className='btn btn-block  btn-outline-danger  mb-2 '  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
                </Row>
            </form>
          </div>
        );
}

export default CreateGstClientAddressEx