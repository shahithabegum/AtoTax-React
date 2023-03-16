import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { GetGSTClientsDD } from "../../../service/GstClientService";
import { Col, Row } from "react-bootstrap";
import { Model } from "../../../shared/Model";
import { Input } from "../../../shared/Input";
import {
  GetS1Process,
  GetYearByClient,
  GetmonthByClient,
} from "../../../service/CollectionAndBalanceService";
import Receivecpop from "./Receivecpop";
import BillAndFeeCollectionValidation from "./BillAndFeeCollectionValidation";
const CreateBillAndFeeCollection = () => {
  const [clientId, setClientId] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [FrequencyType, setFrequencyType] = useState([]);
  const [show, setShow] = useState(false);
  const [yshow, setYShow] = useState(false);
  const [mshow, setMShow] = useState(false);
  const [Oshow, setOShow] = useState(false);
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
      dueYear: "",
      returnFrequencyTypeId: "",
      salesInvoice: false,
      salesBillsNil: false,
      purchaseInvoice: false,
      purchaseNil: false,
      gstTaxAmount: "",
      amountPaid: '',
    },
    validationSchema: BillAndFeeCollectionValidation,
    onSubmit: (values) => {
      setShow(true);
    },
  });

  const getGstClientId = () => {
    GetGSTClientsDD().then((res) => {
      setClientId(res.data.result);
    });
  };
  const getGstClientdata = () => {
    GetS1Process(location.state.gstClientId).then((res) => {
      //
      setFrequencyType(res.data.result.listReturnFreqTypes);
    });
  };
  const getYear = (e) => {
    console.log("year");
    if (e.target.value === "") {
      setYShow(false);
      setOShow(false);
      setMShow(false);
    } else {
      GetYearByClient(location.state.gstClientId, e.target.value).then(
        (res) => {
          if (res?.data?.isSuccess) {
            setYear(res.data.result.yearsAndAmount);
            setYShow(true);
            setOShow(false);
            setMShow(false);
          }
        }
      );
    }

    formik.values.dueYear = "";
    formik.values.dueMonth = "";
    formik.values.salesInvoice = false;
    formik.values.dueMonth = false;
    formik.values.purchaseInvoice = false;
    formik.values.dueMopurchaseNilnth = false;
  };
  const getMonth = (e) => {
    if (e.target.value === "") {
      setOShow(false);
      setMShow(false);
    } else {
      setOShow(true);

      GetmonthByClient(
        location.state.gstClientId,
        formik.values.returnFrequencyTypeId,
        e.target.value
      ).then((res) => {
        if (res?.data?.isSuccess && res.data.result.returnFrequencyTypeId < 4) {
          setMonth(res.data.result.dueMonths);
          setMShow(true);
        }
      });
    }
    console.log("Month");
    var dic2 = Object.entries(year).filter(([k, v]) => {
      if (k === e.target.value) {
        return v;
      }
    });
    var dic3 = dic2[0];
    var val = dic3[1];
    var val2 = val;
    console.log("key2", dic2);
    console.log("key3", val);
    formik.values.amountPaid=val2
    formik.values.dueMonth = "";
    formik.values.salesInvoice = false;
    formik.values.dueMonth = false;
    formik.values.purchaseInvoice = false;
    formik.values.dueMopurchaseNilnth = false;
  };

  console.log("freqtype", FrequencyType);
  console.log("years", year);

 
  console.log("key3", typeof val);
  console.log("Month", mshow);
  console.log("others", Oshow);
  console.log("value", formik.values.dueYear);
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
              onChange={(e) => {
                formik.handleChange(e);
                getYear(e);
              }}
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
        {yshow ? (
          <Row className="my-3 mx-1">
            <Col m={6} sm={12} lg={6} ml-0>
              <label htmlFor="dueYear" className="ml-0">
                Year <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </label>
              <select
                name="dueYear"
                type="number"
                span="*"
                {...formik.getFieldProps("dueYear")}
                onChange={(e) => {
                  formik.handleChange(e);
                  getMonth(e);
                }}
                className="ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control"
              >
                <option value="" label="Select Payment Due year" />
                {Object.entries(year).map(([key, value]) => (
                  <option value={key} label={key} />
                ))}
              </select>

              {formik.touched.dueYear && formik.errors.dueYear ? (
                <p style={{ color: "red" }}>{formik.errors.dueYear}</p>
              ) : null}
            </Col>
            {mshow ? (
              <Col m={6} sm={12} lg={6} ml-0>
                <label htmlFor="dueMonth" className="ml-0">
                  Month{" "}
                  <span style={{ color: "red", fontSize: "20px" }}>*</span>
                </label>
                <select
                  name="dueMonth"
                  type="number"
                  span="*"
                  {...formik.getFieldProps("dueMonth")}
                  className="ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 form-control"
                >
                  <option value="" label="Select Payment Due Month" />
                  {Object.entries(month).map((item, index) => (
                    <option key={index} value={item} label={item} />
                  ))}
                </select>

                {formik.touched.dueMonth && formik.errors.dueMonth ? (
                  <p style={{ color: "red" }}>{formik.errors.dueMonth}</p>
                ) : null}
              </Col>
            ) : (
              ""
            )}
          </Row>
        ) : (
          ""
        )}
        {Oshow ? (
          <Row className="my-3 mx-1">
            <Col m={6} sm={12} lg={6} ml-0>
              <label htmlFor="purchaseInvoice" className="ml-0">
                Purchase
                <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </label>
              <div className="d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="purchaseInvoice"
                    disabled={formik.values.purchaseNil}
                    {...formik.getFieldProps("purchaseInvoice")}
                  />
                  <label
                    class="form-check-label ml-2 mt-1"
                    for="purchaseInvoice"
                  >
                    Purchase Invoice
                  </label>
                </div>
                <div class="form-check ml-4">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="purchaseNil"
                    disabled={formik.values.purchaseInvoice}
                    {...formik.getFieldProps("purchaseNil")}
                  />
                  <label class="form-check-label ml-2 mt-1" for="purchaseNil">
                    Purchase Nil
                  </label>
                </div>
              </div>
              {formik.touched.purchaseInvoice &&
              formik.errors.purchaseInvoice ? (
                <p style={{ color: "red" }}>{formik.errors.purchaseInvoice}</p>
              ) : null}
            </Col>
            <Col m={6} sm={12} lg={6} ml-0>
              <label htmlFor="salesInvoice" className="ml-0">
                Sales
                <span style={{ color: "red", fontSize: "20px" }}>*</span>
              </label>
              <div className="d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="salesInvoice"
                    disabled={formik.values.salesBillsNil}
                    {...formik.getFieldProps("salesInvoice")}
                  />
                  {formik.touched.salesInvoice && formik.errors.salesInvoice ? (
                    <p style={{ color: "red" }}>{formik.errors.salesInvoice}</p>
                  ) : null}
                  <label class="form-check-label ml-2 mt-1" for="salesInvoice">
                    Sales Invoice
                  </label>
                </div>
                <div class="form-check ml-4">
                  <input
                    class="form-check-input large"
                    type="checkbox"
                    value={true}
                    id="salesBillsNil"
                    disabled={formik.values.salesInvoice}
                    {...formik.getFieldProps("salesBillsNil")}
                  />
                  <label class="form-check-label ml-2 mt-1" for="salesBillsNil">
                    Sales Bills Nil
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {Oshow ? (
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
        ) : (
          ""
        )}
        {Oshow ? (
          <Row className="my-3 mx-1 justify-content-center">
            <Col m={6} sm={12} ml-0 lg={6}>
              <button
                type="submit"
                className="btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-3 float-right"
                onClick={() => {
                  setShow(true);
                }}
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
        ) : (
          ""
        )}
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
