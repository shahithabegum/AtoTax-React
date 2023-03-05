import React, { useEffect, useState } from 'react'
import{GetUser} from '../../../service/UserService'
import{GetRoles,GetUserRoles} from '../../../service/RolesService'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { MultiSelect } from "react-multi-select-component";
import {Assign_Role} from '../../../service/RolesService'
import { toast } from 'react-toastify';
const AssignRole = () => {
    const [userId,setUserId] =useState([])
    const [roles,setRoles] =useState([])
    const [userforrole,setUserforrole] =useState([])
    const [val,setVal] =useState([])
    let navigate = useNavigate()
    useEffect(()=>{
        GetUserId();
        Get_Roles();
    },[])
  
  let options=roles.map((item)=>{
    return { value:item.id , label:item.name}
  })
      const formik = useFormik({
          initialValues: {
            userId:'',
            roleIds:[],
            
           
          },
          //validationSchema:GSTFilingValidation,
          onSubmit: values => {
              console.log("val",val)
             
              console.log("testvalue",formik.values.test)
            },
          });
         const assignRoles = () =>{
            formik.values.roleIds=val.map((x)=>{
                return x.value
              });
            Assign_Role(formik.values).then(res=>{
                console.log("formik.values",formik.values)
                if(res?.data?.isSuccess){
                    navigate("/roles")
                }
                else{
                   toast.error(res?.data?.errorMessages.toString())
                }
            })
            
           
         }
         const GetUserId =()=>{
            GetUser().then(res=>{
              console.log(res)
             
              setUserId(res.data.result)
            })
          }
          const Get_Roles =()=>{
            GetRoles().then(res=>{
              console.log(res)
             
              setRoles(res.data.result)
            })
          }
        const handleCancle =()=>{
          navigate('/roles')
        }
        const handleselect =(e)=>{
          console.log(e.target.value)
          GetUserRoles(e.target.value).then(res=>{
            console.log("res",res.data.result.listRoles)
            setVal(res.data.result.listRoles)
          })
        }
       console.log("roles",val)
       console.log("userforrole",userforrole)
        console.log("value",formik.userId)
    return (
      <div  className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
          
          <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-5 m-auto col-lg-7">
          <h2 className=' fromheading my-1 p-0 ml-3 text-center'>Assign Roles</h2>
          <Row className='my-3 mx-1' >
                <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="Statusid"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
               User Id :<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
              
              <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <select className='form-Control ml-0 col-sm-12 col-lg-12'
                  style={{with:70,padding:'9px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
                name="userId"
                {...formik.getFieldProps("userId")}
                onChange={handleselect}
               >
                  <option value="" label="Select User" />
               {userId.map(item=>(
                <option value={item.id} label={item.userName} />
                ))}
                
              </select>
              {formik.touched.userId && formik.errors.userId ? (
                 <p style={{color:"red",textAlign:"left"}}>{formik.errors.userId}</p>
               ) : null}
              </Col>
                </Row>
          <Row className='my-3 mx-1' >
          <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
                <label htmlFor="Roles"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
               Roles :<span style={{color:'red',fontSize:'20px'}}>*</span>
               </label>
               </Col>
               <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
               <MultiSelect
                 selectionType="tags"
                 options={options}
                 value={val}
                 onChange={setVal}
                
               />
               </Col>
                </Row>
                <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>assignRoles()}>Submit</button>
                
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
          </form>
      </div>
    )
}

export default AssignRole