import React, { useEffect, useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import { GetGSTClientsDD } from "../../../service/GstClientService";
import { GetReturnFrequencyDD } from "../../../service/ReturnFrequencyService";
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import {SalesGSTR1Filed} from '../../../service/CollectionAndBalanceService'
import { toast } from "react-toastify";
import BillAndFeeCollectionValidation from "./BillAndFeeCollectionValidation";
const SalesGSTR = () => {
    const location =useLocation();
    const [clientId, setClientId] = useState([]);
    const [FrequencyType, setFrequencyType] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        getGstClientId();
        getfrequencyDD();
      }, []);
       const formik = useFormik({
        initialValues: {
            returnFrequencyTypeId:location.state.returnFrequencyTypeId,
            gstClientId:location.state.gstClientId,
               dueMonth:location.state.dueMonth,
               dueYear:location.state.dueYear,
               salesFiled:false,
               salesNotFiled:false,
               salesNilFiled:false,
               salesNilNotFiled:false
        },
        validationSchema: BillAndFeeCollectionValidation,
        onSubmit: (values) => {
          
        },
      });
      const getGstClientId = () => {
        GetGSTClientsDD().then((res) => {
          setClientId(res.data.result);
        });
      };
      const getfrequencyDD = () => {
        GetReturnFrequencyDD().then((res) => {
          console.log(res);
          if (res.status) setFrequencyType(res.data.result);
        });
      };
      const UpdateBillAndFee = () =>{
         SalesGSTR1Filed(formik.values).then(res=>{
            if(res?.data?.isSuccess){
          navigate('/billandfeecollection')
            }
            else{
              toast.error(res?.data?.errorMessages.toString())
            }
          })
          
       }
      const handleCancle =()=>{
        navigate('/billandfeecollection')
      }
    console.log("data",location.state)
    return (
        <div className="container p-2 col-11 col-sm-10 col-lg-12 mt-5">
          <form
            id="formik-form"
            onSubmit={formik.handleSubmit}
            className="ml-2 p-2 mt-2 m-auto col-lg-12"
          >
            <h2 className="Tableheading ml-1 text-center">GSTR1 Processing</h2>
            <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={4} ml-0 className="p-1">
            <label
              htmlFor="gstClientId"
              className="form-label col-sm-12 col-lg-12 p-0 text-lg-right float-sm-left"
            >
              GST Client :
              <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </label>
          </Col>

          <Col m={6} sm={12} ml-0 lg={6} className="p-1">
            <select
              className="form-Control ml-0 col-sm-12 col-lg-9"
              style={{
                with: 70,
                padding: "10px",
                borderRadius: "5px",
                border: " 1px solid lightgray",
              }}
              name="gstClientId"
              disabled="true"
              {...formik.getFieldProps("gstClientId")}
            >
              {clientId.map((item) => (
                <option value={item.id} label={item.gstClientAndGSTIN} />
              ))}
            </select>
            {formik.touched.gstClientId && formik.errors.gstClientId ? (
               <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.gstClientId}
              </p>
            ) : null}
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={4} ml-0 className="p-1">
            <label
              htmlFor="returnFrequencyTypeId"
              className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left"
            >
              Return Type :
              <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </label>
          </Col>

          <Col m={6} sm={12} ml-0 lg={6} className="p-1">
            <select
              className="form-Control ml-0 col-sm-12 col-lg-9"
              style={{
                with: 70,
                padding: "10px",
                borderRadius: "5px",
                border: " 1px solid lightgray",
              }}
              name="returnFrequencyTypeId"
              type="number"
              disabled="true"
              {...formik.getFieldProps("returnFrequencyTypeId")}
            >
              <option value=" " label="Select Return Type" />
              {FrequencyType.map((item) => (
                <option value={item.id} label={item.returnFreqType} />
              ))}
            </select>
            {formik.touched.returnFrequencyTypeId &&
            formik.errors.returnFrequencyTypeId ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.returnFrequencyTypeId}
              </p>
            ) : null}
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={4} ml-0 className="p-1">
          <label htmlFor="salesFiled" className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
                Sales :
                <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </label>
          </Col>

          <Col m={6} sm={12} ml-0 lg={6} className="p-1">
          <div className="d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="salesFiled"
                    disabled={formik.values.salesNotFiled}
                    {...formik.getFieldProps("salesFiled")}
                  />
                  {formik.touched.salesFiled && formik.errors.salesFiled ? (
                    <p style={{ color: "red" }}>{formik.errors.salesFiled}</p>
                  ) : null}
                  <label class="form-check-label ml-2 mt-1" for="salesNotFiled">
                    Sales Filed
                  </label>
                </div>
                <div class="form-check ml-4">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="salesNotFiled"
                    disabled={formik.values.salesFiled}
                    {...formik.getFieldProps("salesNotFiled")}
                  />
                  <label class="form-check-label ml-2 mt-1" for="salesNotFiled">
                    Sales Not Filed
                  </label>
                </div>
              </div>
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={4} ml-0 className="p-1">
          <label htmlFor="salesNilFiled" className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">
                Sales Nil:
                <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </label>
          </Col>

          <Col m={6} sm={12} ml-0 lg={6} className="p-1">
          <div className="d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="salesNilFiled"
                    disabled={formik.values.salesNilNotFiled}
                    {...formik.getFieldProps("salesNilFiled")}
                  />
                  {formik.touched.salesNilFiled && formik.errors.salesNilFiled ? (
                    <p style={{ color: "red" }}>{formik.errors.salesNilFiled}</p>
                  ) : null}
                  <label class="form-check-label ml-2 mt-1" for="salesNilFiled">
                    Sales Nil Filed
                  </label>
                </div>
                <div class="form-check ml-4">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="salesNilNotFiled"
                    disabled={formik.values.salesNilFiled}
                    {...formik.getFieldProps("salesNilNotFiled")}
                  />
                  <label class="form-check-label ml-2 mt-1" for="salesNilNotFiled">
                    Sales Nil Not Filed
                  </label>
                </div>
              </div>
          </Col>
        </Row>
              <Row className='my-3 mx-1 justify-content-center'>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>UpdateBillAndFee()}>File GSTR1</button>
                </Col>
                <Col m={6} sm={12} ml-0 lg={6}>
                <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
                  </Col>
                </Row>
            </form>
            </div>
  )
}

export default SalesGSTR