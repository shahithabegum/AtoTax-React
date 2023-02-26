import React, { useEffect, useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {Create_ServiceHistory} from '../../../service/ServiceChargeUpdate'
import{GetServiceCategoryDD} from '../../../service/ServiceCategoryService'
const CreateServiceHistory = () => {
    const [serviceCat, setServiceCat] = useState([])
    const location = useLocation();
    let navigate = useNavigate()
   
    useEffect(() => {
        getServiceCat()
    }, [])
    const formik = useFormik({
        initialValues: {
            gstClientID:location.state.gstClientId,
            serviceCategoryId:location.state.serviceCategory.id,
            newRate:'',
           
        },
        //validationSchema:ValidationService,
        onSubmit: values => {
            console.log(values)
          },
        });
       const CreateServiceChargeHistory = () =>{
        const data = Object.assign(formik.values,{id:location.state.id})
        Create_ServiceHistory(data,location.state.id).then(res=>{console.log("response",res.data)}).then(navigate('/serviceHistory'))
         
       }
       const getServiceCat =()=>{
        GetServiceCategoryDD().then(res=>{setServiceCat(res.data.result)})
       }
       const handleCancle =()=>{
        navigate('/serviceHistory')
      }
     
      return (
        <div  className='container p-2 col-11 col-sm-10 col-lg-12'>
            <h2 className=' fromheading my-1 p-0'>Update Service Category</h2>  
            <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2  col-lg-7">
            <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <Input  
            name="gstClientID"
            id="gstClientID"
            label="GST Client ID"
            span="*"
           
            {...formik.getFieldProps("gstClientID")}
            />
                  {formik.touched.gstClientID && formik.errors.gstClientID ? (
             <p style={{color:"red"}}>{formik.errors.gstClientID }</p>
           ) : null}
            </Col>
          </Row>
            <Row className='my-3 mx-1' >
            <label htmlFor="serviceCategoryId" className='ml-2'>
          Service Category <span style={{color:'red',fontSize:'20px'}}>*</span>
          </label>
            <Col m={6} sm={12} lg={12} ml-0>
         
          <select
            name="serviceCategoryId"
            type="number"
            {...formik.getFieldProps("serviceCategoryId")}
            className='col-8 ml-1 p-2 rounded'
          >
             
           {serviceCat.map(item=>(
            <option value={item.id} label={item.serviceNameAndDesc} />
            ))}
          </select>
          
          {formik.touched.serviceCategoryId && formik.errors.serviceCategoryId ? (
             <p style={{color:"red"}}>{formik.errors.serviceCategoryId}</p>
           ) : null}
          </Col>
            </Row>
            <Row className='my-3 mx-1' >
                <span className='ml-3 text-muted'><b>Previous Charge :</b> {location.state.serviceCategory.previousCharge}</span>
            <Col m={6} sm={12} lg={12} ml-0>
            <Input  
            name="newRate"
            id="newRate"
            type="number"
            label="New Rate"
            placeholder="Enter New Charge In Rupees"
            span="*"
           
            {...formik.getFieldProps("newRate")}
            />
                  {formik.touched.newRate && formik.errors.newRate ? (
             <p style={{color:"red"}}>{formik.errors.newRate }</p>
           ) : null}
            </Col>
          </Row>
            <Row className='my-3 mx-1'>
                  <Col m={6} sm={12} ml-0>
                  <button type="submit" className='btn  btn-outline-info ml-1 col-sm-10 col-lg-2 my-1 ' onClick={()=>CreateServiceChargeHistory()}>Submit</button>
                  <button type="submit" className='btn  btn-outline-danger ml-1 col-sm-10 col-lg-2 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                  </Row>
            </form>
        </div>
      )
}

export default CreateServiceHistory