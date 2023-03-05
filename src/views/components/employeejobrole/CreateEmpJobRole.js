import React, { useEffect, useState } from 'react'
import{GetStatus} from '../../../service/StatusService'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import {Create_EmpJobRole} from '../../../service/EmpJobRoleService';
import JobValidation from './JobValidation'
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import { toast } from 'react-toastify';
const CreateEmpJobRole = () => {
    const [status,setStatus] =useState([])
    let navigate = useNavigate()
    useEffect(()=>{
      getStatus()
    },[])
      const formik = useFormik({
          initialValues: {
            jobRole:'',
            jobDescription:'',
              statusId:''
          },
          validationSchema:JobValidation,
          onSubmit: values => {
              console.log("jobrole",values)
            },
          });
         const CreateJob = () =>{
            Create_EmpJobRole(formik.values).then(res=>{if(res?.data?.isSuccess){

              navigate('/EmpJobRole')
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
        const handleCancle =()=>{
          navigate('/EmpJobRole')
        }
    return (
      <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
         
          <form id="formik-form" onSubmit={formik.handleSubmit}  className="ml-2 p-2 mt-2 m-auto col-lg-7">
          <h2 className="fromheading my-1 p-0 text-center">Create Job Role</h2>  
          <Row className='my-3 mx-1' >
          <Col m={6} sm={12} lg={12} ml-0>
          <SmallInput  
          name="jobRole"
          id="jobRole"
          label="Job Role :"
          span="*"
          isTouched={formik.touched.jobRole}
          error={formik.errors.jobRole}
          placeholder="Enter Job Role"
          {...formik.getFieldProps("jobRole")}
          />
          </Col>
          </Row>
          <Row className='my-3 mx-1' >
          <Col m={6} sm={12} lg={12} ml-0>
          <SmallInput  
          name="jobDescription"
          id="jobDescription"
          label="Job Description :"
          isTouched={formik.touched.jobDescription}
          error={formik.errors.jobDescription}
          placeholder="Enter Job Role Description"
          {...formik.getFieldProps("jobDescription")}
          />
              
          </Col>
          </Row>
          <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="Statusid"className="form-label col-sm-12 col-lg-12 p-0 text-lg-right float-sm-left">
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
                 <option value='' label="Select Status" /> 
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
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>CreateJob()}>Submit</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
          </form>
      </div>
    )
}

export default CreateEmpJobRole