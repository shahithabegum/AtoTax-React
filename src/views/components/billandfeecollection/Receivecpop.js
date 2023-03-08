import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import {Create_BillAndFee} from '../../../service/BIllAndFeeCollectionService'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import "./Receivedpop.scss";

const Receivecpop = ({ item,clientId,Service,filling,media }) => {
  let navigate = useNavigate()
  console.log("item", item);
  console.log("client", clientId);
  console.log("Service", Service);
  console.log("filling", filling);
  console.log("media", media);
  
  const Confirm = () =>{
        Create_BillAndFee(item).then(res=>{
            if(res?.data?.isSuccess){
              navigate('/billandfeecollection')
            }
            else{
              toast.error(res?.data?.errorMessages.toString())
            }
          })
    }
    const val=filling.filter(f=>f.id.toString()===item.gstFilingTypeId)
    console.log("fillingval", val);
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
                  
                  </tr>
                  <tr>
                    {Service.filter(service=>service.id.toString()===item.serviceCategoryId).map(name=>(
                      
                    <td className='tilte-td'><b>Filling type : </b> {name.serviceNameAndDesc}</td>))}
                  
                  </tr>
                  <tr>
                    {media.filter(media=>media.id.toString()===item.multimediaTypeId).map(name=>(
                      
                    <td className='tilte-td'><b>Filling type : </b> {name.mediaAndDesc}</td>))}
                  
                  </tr>
                  <tr>
                  <td  className='tilte-td'><b>Due Month : </b>{item.dueMonth}</td>
                  </tr>
                  <tr>
                  <td  className='tilte-td'><b>Due Year : </b>{item.dueYear}</td>
                  </tr>
                  <tr>
                    {filling.filter(f=>f.id.toString()===item.gstFilingTypeId).map(name=>(
                      
                    <td className='tilte-td'><b>Filling type : </b> {name.filingType}</td>))}
                  
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
