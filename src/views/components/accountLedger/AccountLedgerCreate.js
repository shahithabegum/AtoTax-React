import React, { useEffect, useState } from 'react'
import {GetPaymentsDD} from '../../../service/PaymentTypeService'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import {Create_AccountLedger} from '../../../service/AccountLedgerService'
//import AddressValidation from './AddressValidation'
import { SmallInput } from '../../../shared/SamllInput';
import { toast } from 'react-toastify';
const AccountLedgerCreate = () => {
  const [paymentId,setPaymentId] =useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    GetpaymentDD()
  },[])
    const formik = useFormik({
        initialValues: {
          incomeAmount:null,
          expenseAmount:null,
          paymentTypeId:'',
          transactionReferenceNo:'',
          comments:''
          },
       //validationSchema:AddressValidation,
        onSubmit: values => {
            console.log(values)
          },
        });
       const createAccountsLedger = () =>{
     
          formik.values.incomeAmount=formik.values.incomeAmount?formik.values.incomeAmount:null
          formik.values.expenseAmount=formik.values.expenseAmount?formik.values.expenseAmount:null
        
        Create_AccountLedger(formik.values).then(res=>{
            if(res?.data?.isSuccess){
              navigate('/accountLedger')
            }
            else {
              toast.error(res?.data?.errorMessages.toString())
            }
          }) 
       }
       const GetpaymentDD =()=>{
        GetPaymentsDD().then(res=>{
          console.log(res)
         
          setPaymentId(res.data.result)
        })
      }
      const handleCancle =()=>{
        navigate('/accountLedger')
      }
     var income= formik.values.expenseAmount > 0;
     var expense= formik.values.incomeAmount > 0;
      return (
          <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5 '>
            
              <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
              <h2 className="Tableheading ml-1 text-center">Accounts Ledger</h2>  
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={12} ml-0>
              <SmallInput  
              name="incomeAmount"
              id="incomeAmount"
              label="Income Amount :"
              type="number"
              disabled={income}
             
              placeholder="Enter Income Amount"
              isTouched={formik.touched.incomeAmount}
              error={formik.errors.incomeAmount}
              {...formik.getFieldProps("incomeAmount")}
              />
              </Col>
            
              </Row>
              <Row className='my-3 mx-1 ' >
              <Col m={6} sm={12} lg={12} ml-0>
              <SmallInput  
              name="expenseAmount"
              id="expenseAmount"
              label="Expense Amount :"
              disabled={expense}
              type="number"
              placeholder="Enter Expense Amount"
              isTouched={formik.touched.expenseAmount}
              error={formik.errors.expenseAmount}
              {...formik.getFieldProps("expenseAmount")}
              />
              </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="paymentTypeId"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
              Payment Type :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
             <select className='form-Control ml-0 col-sm-12 col-lg-12'
                style={{with:70,padding:'10px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
              name="paymentTypeId"
              type="number"
              {...formik.getFieldProps("paymentTypeId")}
             >
                <option value='' label="Select Payment Type" />
                {paymentId.map(item=>(
               <option value={item.id} label={item.paymentMethod} />
              ))}
            </select>
            {formik.touched.paymentTypeId && formik.errors.paymentTypeId ? (
               <p style={{color:"red",textAlign:"left"}}>{formik.errors.paymentTypeId}</p>
             ) : null}
            </Col>
              </Row>
              <Row className='my-3 mx-1' >
              <Col m={6} sm={12} lg={12} ml-0>
              <SmallInput  
              name="transactionReferenceNo"
              id="transactionReferenceNo"
              label="Transaction ReferenceNo :"
              span="*"
              placeholder="Enter Transaction Reference No"
              isTouched={formik.touched.transactionReferenceNo}
              error={formik.errors.transactionReferenceNo}
              {...formik.getFieldProps("transactionReferenceNo")}
              />
              </Col>
            
              </Row>
              <Row className='my-3 mx-1 ' >
              <Col m={6} sm={12} lg={4} ml-0  className='p-1'>
              <label htmlFor="comments"className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
              Comments :<span style={{color:'red',fontSize:'20px'}}>*</span>
             </label>
             </Col>
            
            <Col m={6} sm={12} ml-0 lg={6} className='p-1'>
            <textarea class="form-control" 
             name="comments"
            id="comments" 
            rows="3"
            placeholder="Enter comments"
            isTouched={formik.touched.comments}
            error={formik.errors.comments}
            {...formik.getFieldProps("comments")}></textarea>
            </Col>
              </Row>
              <Row className='my-3 mx-1 justify-content-center'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>createAccountsLedger()}>Submit</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                </Col>
              </Row>
              </form>
              
          </div>
        )
}

export default AccountLedgerCreate