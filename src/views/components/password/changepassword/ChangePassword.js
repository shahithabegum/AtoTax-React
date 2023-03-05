import React, { useEffect, useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {changepassword} from '../../../../service/auth/authService'
import { Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { SmallInput } from '../../../../shared/SamllInput';
import { toast } from 'react-toastify';
import ChangePasswordValidation from './ChangePasswordValidation'
const ChangePassword = () => {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email:'',
            oldpassword:'',
          newPassword:'',
          confirmPassword:''
        },
       validationSchema:ChangePasswordValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const change_password = () =>{
       
        changepassword(formik.values).then(res=>{
            if(res?.data?.isSuccess){
              toast.success("Created")
              //navigate('/addressType')
            }
            else {
              toast.error(res?.data?.errorMessages.toString())
            }
          }) 
       }
       const handleCancle =()=>{
        navigate('/dashboard')
      }
      const isEnable=formik.values.newPassword>0 && formik.values.newPassword===formik.values.confirmPassword
       return (
       
        <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5 '>
          
            <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
            <h2 className="Tableheading ml-1 text-center">Change Password</h2>  
            <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput  
            name="email"
            id="email"
            label="Email :"
            span="*"
            placeholder="example@gmail.com"
            isTouched={formik.touched.email}
            error={formik.errors.email}
            {...formik.getFieldProps("email")}
            />
            </Col>
          
            </Row>
            <Row className='my-3 mx-1 ' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput  
            name="oldpassword"
            id="oldpassword"
            label="Old Password:"
            span="*"
            type="password"
            placeholder="Enter Old Password"
            isTouched={formik.touched.oldpassword}
            error={formik.errors.oldpassword}
            {...formik.getFieldProps("oldpassword")}
            />
            </Col>
            </Row>
            <Row className='my-3 mx-1 ' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput  
            name="newPassword"
            id="newPassword"
            label="New Password:"
            span="*"
            type="password"
            placeholder="Enter New Password"
            isTouched={formik.touched.newPassword}
            error={formik.errors.newPassword}
            {...formik.getFieldProps("newPassword")}
            />
            </Col>
            </Row>
            <Row className='my-3 mx-1 ' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput  
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm Password:"
            span="*"
            type="password"
            placeholder="Enter Confirm Password"
            isTouched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            {...formik.getFieldProps("confirmPassword")}
            />
            </Col>
            </Row>
            <Row className='my-3 mx-1 justify-content-center'>
            <Col m={6} sm={12} ml-0 lg={6}>
            <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' disabled={!isEnable} onClick={()=>change_password()}>Submit</button>
            
            </Col>
            <Col m={6} sm={12} ml-0 lg={6}>
            <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
              </Col>
            </Row>
            </form>
            
        </div>
      )
}

export default ChangePassword