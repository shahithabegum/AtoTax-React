// import React, { useEffect, useState } from 'react'
// import{GetStatus} from '../../../service/StatusService'
// import {useNavigate,useLocation} from 'react-router-dom'
// import { useFormik } from 'formik';
// import { Col, Row } from 'react-bootstrap';
// import { Input } from '../../../shared/Input';
// import {Update_AmendType} from '../../../service/AmendTypesServices'
// import { AmendValidation } from './AmendValidation';

// const UpdateAmendType = () => {
//   const [status,setStatus] =useState([])
//   let navigate=useNavigate()
//   const location = useLocation();
//   useEffect(()=>{
//     getStatus()
//   },[])
//     const formik = useFormik({
//         initialValues: {
//             amendTypeName:location.state.amendTypeName,
//             statusId:location.state.statusId
//         },
//         validationSchema:AmendValidation,
//         onSubmit: values => {
//             console.log(values)
//           },
//         });
//        const UpdateAmend = () =>{
//         const data = Object.assign(formik.values,{id:location.state.id})
//            Update_AmendType(data,location.state.id).then(res=>{console.log("response",res.data)}).then( navigate('/AmendType'))
          

//        }
//        const getStatus =()=>{
//         GetStatus().then(res=>{
//           console.log(res)
//           if(res.status)
//             setStatus(res.data.result)
//         })
//       }
//       const handleCancle =()=>{
//         navigate('/AmendType')
//       }
//       return (
//         <div className='containerp-2 col-11 col-sm-10 col-lg-12'>
//             <h2 className=' fromheading my-1 p-0'>Update AmendType</h2>  
//             <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2  col-lg-7">
//             <Row className='my-3 mx-1' >
//             <Col m={6} sm={12} lg={12} ml-0>
//             <Input  
//             name="amendTypeName"
//             id="amendTypeName"
//             label="AmendType Name"
//             placeholder="Enter Amend Type "
//             span="*"
//             {...formik.getFieldProps("amendTypeName")}
//             />
//                   {formik.touched.amendTypeName && formik.errors.amendTypeName ? (
//              <p style={{color:"red"}}>{formik.errors.amendTypeName}</p>
//            ) : null}
//             </Col>
//             </Row>
//             <Row className='my-3 mx-1' >
//             <Col m={6} sm={12} lg={12} ml-0>
//           <label htmlFor="Statusid" className='ml-2'>
//            Status 
//           </label>
//           <select
//             name="Statusid"
//             type="number"
//             span="*"
//             {...formik.getFieldProps("statusId")}
//             className='col-8 ml-1 p-2 rounded'
//           >
//               <option value='' label="Select Status" />
//            {status.map(item=>(
//             <option value={item.id} label={item.statusType} />
//             ))}
//           </select>
          
//           {formik.touched.statusId && formik.errors.statusId ? (
//              <p style={{color:"red"}}>{formik.errors.statusId}</p>
//            ) : null}
//           </Col>
//             </Row>
//             <Row className='my-3 mx-1'>
//                   <Col m={6} sm={12} ml-0>
//                   <button type="submit" className='btn  btn-outline-info ml-1 col-sm-10 col-lg-2 my-1' onClick={()=>UpdateAmend()}>Submit</button>
//                   <button type="submit" className='btn  btn-outline-danger ml-1 col-sm-10 col-lg-2 my-1'  onClick={()=>handleCancle()}>Cancel</button>
//                   </Col>
//                   </Row>
//             </form>
//         </div>
//       )
// }

// export default UpdateAmendType