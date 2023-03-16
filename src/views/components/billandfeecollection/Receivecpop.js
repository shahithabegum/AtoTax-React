import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import {Update_ProcessInvoices} from '../../../service/CollectionAndBalanceService'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import "./Receivedpop.scss";

const Receivecpop = ({ item,clientId,frequency}) => {
  let navigate = useNavigate()
  console.log("item", item);
  console.log("client", clientId);
  console.log("frequency", frequency);
  
  
  const Confirm = () =>{
    item.dueMonth=item.dueMonth ? item.dueMonth : null;
    console.log("m",item.dueMonth)
    Update_ProcessInvoices(item).then(res=>{
      if(res?.data?.isSuccess){
     
       console.log("res",res.data.result)
       navigate("/ViewBillAndFeeCollection",{ state: res.data.result})
      }
      else {
        toast.error(res?.data?.errorMessages.toString())
      }
    })
    }
    
  return (
    <div className="container">
      <div className="Billpopupwarapper">
        <div className="Billpopup w-full">
        
          <div className="container">
            <div className="displaylist mt-2 ml-0 m-auto p-5">
              <p className="text-center mt-3" style={{ fontSize: "20px" }}>
                    Are You Sure You Want to proceed ?
                  </p>
              <table class="view-table table table-responsive ml-0 w-full m-auto ">
                <tbody className="view-table-body ">
                  <tr>
                    {clientId.filter(client=>client.id===item.gstClientID).map(name=>(
                      
                    <td className='tilte-td'><b>GST Client : </b> {name.gstClientAndGSTIN}</td>))}
                  
                      
                  {frequency.filter(f=>f.id.toString()===item.returnFrequencyTypeId).map(name=>(
                      
                      <td className='tilte-td'><b>Frequency Type : </b> {name.returnFreqType}</td>))}
                  </tr>
                  <tr>
                  <td  className='tilte-td'><b>Purchase Invoice : </b>{item.purchaseInvoice.toString()}</td>
                  <td  className='tilte-td'><b>Purchase Nil : </b>{item.purchaseNil.toString()}</td>
                  </tr>
                 
                  <tr>
                  <td  className='tilte-td'><b>Sales Invoice : </b>{item.salesInvoice.toString()}</td>
                  <td  className='tilte-td'><b>Sales Bills Nil : </b>{item.salesBillsNil.toString()}</td>
                  </tr>
                  <tr>
                     
                      <td  className='tilte-td'><b>Due Month : </b>{item.dueMonth}</td>
                      <td  className='tilte-td'><b>Due Year : </b>{item.dueYear}</td>
                  </tr> 
                  <tr>
                  <td  className='tilte-td'><b>GST Tax Amount : </b>{item.gstTaxAmount}</td>
                  <td  className='tilte-td'><b>Amount Paid : </b>{item.amountPaid}</td>
                  </tr>
                </tbody>
              </table>
              <Row className='my-1 mx-1 justify-content-center '>
              <Col m={6} sm={12} ml-0 lg={12}>
              <button type="submit" className='btn btn-block btn-outline-info ml-0 col-sm-10 col-lg-12 my-0' onClick={Confirm}>Received</button>
              </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receivecpop;
