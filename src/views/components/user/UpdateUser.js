import React, { useEffect, useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SamllInput';
import {UserValidation} from './UserValidation'
import { toast } from 'react-toastify';
import {Update_User} from '../../../service/UserService'
const UpdateUser = () => {
    const location =useLocation();
    let navigate = useNavigate()
      const formik = useFormik({
          initialValues: {
            newUserName:location.state.userName,
            newName:location.state.name,
            newEmail:location.state.email
          },
         validationSchema:UserValidation,
          onSubmit: values => {
              console.log(values)
            },
          });
         const update_User = () =>{
            const data = Object.assign(formik.values,{id:location.state.id})
            Update_User(data,location.state.id).then(res=>{
              if(res?.data?.isSuccess){
              
               navigate('/users')
              }
              else {
                toast.error(res?.data?.errorMessages.toString())
              }
            })
           
         }
       
        const handleCancle =()=>{
          navigate('/users')
        }
        console.log("valuse",location.state)
        return (
            <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5 '>
              
                <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
                <h2 className="Tableheading ml-1 text-center">Update User</h2>  
                <Row className='my-3 mx-1' >
                  <Col m={6} sm={12} lg={12} ml-0>
                  <SmallInput  
                  name="newUserName"
                  id="newUserName"
                  label="New User Name:"
                  
                  placeholder="Update User Name"
                  isTouched={formik.touched.newUserName}
                  error={formik.errors.newUserName}
                  {...formik.getFieldProps("newUserName")}
                  />
                  </Col>
                
                  </Row>
               
                
                  <Row className='my-3 mx-1 ' >
                  <Col m={6} sm={12} lg={12} ml-0>
                  <SmallInput  
                  name="newName"
                  id="newName"
                  label="New Name :"
                  
                  placeholder="Update Name"
                  isTouched={formik.touched.newName}
                  error={formik.errors.newName}
                  {...formik.getFieldProps("newName")}
                  />
                  </Col>
                  </Row>
                  <Row className='my-3 mx-1 ' >
                  <Col m={6} sm={12} lg={12} ml-0>
                  <SmallInput  
                  name="newEmail"
                  id="newEmail"
                  label="New Email :"
                 
                  placeholder="Update Email"
                  isTouched={formik.touched.newEmail}
                  error={formik.errors.newEmail}
                  {...formik.getFieldProps("newEmail")}
                  />
                  </Col>
                  </Row>
               
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>update_User()}>Submit</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
                </form>
                
            </div>
          )
                
            
}

export default UpdateUser