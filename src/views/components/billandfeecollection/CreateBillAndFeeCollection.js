import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { GetGSTClientsDD } from "../../../service/GstClientService";
import { Col, Row } from "react-bootstrap";
import { Model } from "../../../shared/Model";
import { Input } from "../../../shared/Input";
import {GetS1Process} from '../../../service/CollectionAndBalanceService'
import Receivecpop from "./Receivecpop";
import BillAndFeeCollectionValidation from "./BillAndFeeCollectionValidation";
const CreateBillAndFeeCollection = () => {
  const [clientId, setClientId] = useState([]);
  const [month, setMonth] = useState([]);
  const [FrequencyType, setFrequencyType] = useState([]);
  const [show, setShow] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    getGstClientId();
    getGstClientdata(); 
  }, []);
  const formik = useFormik({
    initialValues: {
      gstClientID: location.state.gstClientId,
      dueMonth: "",
      returnFrequencyTypeId: "",
      salesInvoice: false,
      salesBillsNil: false,
      purchaseInvoice: false,
      purchaseNil: false,
      gstTaxAmount: "",
      amountPaid: "",
    },
    validationSchema: BillAndFeeCollectionValidation,
    onSubmit: (values) => {
      setShow(true)
    },
  });
  const getGstClientId = () => {
    GetGSTClientsDD().then((res) => {
      setClientId(res.data.result);
    });
  };
  const getGstClientdata = () => {
    GetS1Process(location.state.gstClientId).then((res) => {
    
      setMonth(res.data.result.dueMonths);
      setFrequencyType(res.data.result.listReturnFreqTypes
        )
    });
  };
 
 
  const handleCancle = () => {
    navigate("/billandfeecollection");
  };
  return (
    <div className="container p-2 col-11 col-sm-10 col-lg-12 mt-5">
      <form
        id="formik-form"
        onSubmit={formik.handleSubmit}
        className="ml-2 p-2 mt-2 m-auto col-lg-12"
      >
        <h2 className="Tableheading ml-1">GST Bills Processing</h2>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={6} ml-0>
            <label htmlFor="gstClientID" className="ml-0">
              GST Client
            </label>
            <select
              name="gstClientID"
              type="number"
              span="*"
              disabled="true"
              {...formik.getFieldProps("gstClientID")}
              className="ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control"
            >
              <option value="" label="Select Client" />
              {clientId.map((item) => (
                <option value={item.id} label={item.gstClientAndGSTIN} />
              ))}
            </select>

            {formik.touched.gstClientID && formik.errors.gstClientID ? (
              <p style={{ color: "red" }}>{formik.errors.gstClientID}</p>
            ) : null}
          </Col>

          <Col m={6} sm={12} lg={6} ml-0>
            <label htmlFor="returnFrequencyTypeId" className="ml-0">
              Frequency Type
              <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </label>
            <select
              name="returnFrequencyTypeId"
              type="number"
              span="*"
              {...formik.getFieldProps("returnFrequencyTypeId")}
              className="ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control"
            >
              <option value="" label="Select Frequency Type" />
              {FrequencyType.map((item) => (
                <option value={item.id} label={item.returnFreqType} />
              ))}
            </select>

            {formik.touched.returnFrequencyTypeId &&
            formik.errors.returnFrequencyTypeId ? (
              <p style={{ color: "red" }}>
                {formik.errors.returnFrequencyTypeId}
              </p>
            ) : null}
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={6} ml-0>
            <label htmlFor="dueMonth" className="ml-0">
              Month <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </label>
            <select
              name="dueMonth"
              type="number"
              span="*"
              {...formik.getFieldProps("dueMonth")}
              className="ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control"
            >
              <option value="" label="Select Payment Due Month" />
              {month.map((item, index) => (
                <option key={index} value={item
                } label={item
                } />
              ))}
            </select>

            {formik.touched.dueMonth && formik.errors.dueMonth ? (
              <p style={{ color: "red" }}>{formik.errors.dueMonth}</p>
            ) : null}
          </Col>
          <Col m={6} sm={12} lg={6} ml-0>
            <label htmlFor="purchaseInvoice" className="ml-0">
            Purchase
              <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </label>
            <div className="d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={true}
                  id="purchaseInvoice"
                  disabled={formik.values.purchaseNil}
                  {...formik.getFieldProps("purchaseInvoice")}
                />
                <label class="form-check-label" for="purchaseInvoice">
                Purchase Invoice
                </label>
              </div>
              <div class="form-check ml-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={true}
                  id="purchaseNil"
                  disabled={formik.values.purchaseInvoice}
                  {...formik.getFieldProps("purchaseNil")}
                />
                <label class="form-check-label" for="purchaseNil">
                purchaseNil
                </label>
              </div>
            </div>
            {formik.touched.purchaseInvoice && formik.errors.purchaseInvoice ? (
              <p style={{ color: "red" }}>{formik.errors.purchaseInvoice}</p>
            ) : null}
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={6} ml-0>
          <Input  
        name="gstTaxAmount"
        id="gstTaxAmount"
        label="GST Tax Amount "
        placeholder="Enter GST Tax Amount "
        type="number"
        span="*"
        isTouched={formik.touched.gstTaxAmount}
        error={formik.errors.gstTaxAmount}
        {...formik.getFieldProps("gstTaxAmount")}
        />
             
          </Col>
          <Col m={6} sm={12} lg={6} ml-0>
            <label htmlFor="salesInvoice" className="ml-0">
              Sales
              <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </label>
            <div className="d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={true}
                  id="salesInvoice"
                  disabled={formik.values.salesBillsNil}
                  {...formik.getFieldProps("salesInvoice")}
                />
                 {formik.touched.salesInvoice && formik.errors.salesInvoice ? (
              <p style={{ color: "red" }}>{formik.errors.salesInvoice}</p>
            ) : null}
                <label class="form-check-label" for="salesInvoice">
                  Sales Invoice
                </label>
              </div>
              <div class="form-check ml-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={true}
                  id="salesBillsNil"
                  disabled={formik.values.salesInvoice}
                  {...formik.getFieldProps("salesBillsNil")}
                />
                <label class="form-check-label" for="salesBillsNil">
                  sales Bills Nil
                </label>
              </div>
            </div>
           
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={6} ml-0>
          <Input  
        name="amountPaid"
        id="amountPaid"
        label="Amount Paid"
        placeholder="Enter Amount Paid "
        type="number"
        span="*"
        isTouched={formik.touched.amountPaid}
        error={formik.errors.amountPaid}
        {...formik.getFieldProps("amountPaid")}
        />
             
          </Col>
        </Row>
        <Row className="my-3 mx-1 justify-content-center">
          <Col m={6} sm={12} ml-0 lg={6}>
            <button
              type="submit"
              className="btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-3 float-right"
              onClick={() => {setShow(true)}}
            >
              Submit
            </button>
          </Col>
          <Col m={6} sm={12} ml-0 lg={6}>
            <button
              type="submit"
              className="btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-3"
              onClick={() => handleCancle()}
            >
              Cancel
            </button>
          </Col>
        </Row>
      </form>
      <Model
        show={show}
        onHide={() => {
          setShow(false);
        }}
        //  confirm={Confirm()}
        handleCancle={() => {
          navigate("/billandfeecollection");
        }}
        title=""
      >
        <Receivecpop
          onHide={() => {
            setShow(false);
          }}
          item={formik.values}
          clientId={clientId}
          frequency={FrequencyType}
        />
      </Model>
    </div>
  );
};

export default CreateBillAndFeeCollection;
