import React, { useEffect, useState } from "react";
 import { GetReturnFrequencyDD } from "../../../service/ReturnFrequencyService";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { SmallInput } from "../../../shared/SamllInput";
import { Update_ClientFeeCharge } from "../../../service/ClientFeeChargeSerivce";
import { GetGSTClientsDD } from "../../../service/GstClientService";
import { toast } from "react-toastify";
import { ClientFeeValidation } from "./ClientFeeValidation";
const UpdateFeeCharge = () => {
  const [status, setStatus] = useState([]);
  const [gstClient, setGstClient] = useState([]);
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    getDefultCharge();
    getGSTClientDD();
  }, []);
  const formik = useFormik({
    initialValues: {
      gstClientId: location.state.gstClientId,
      returnFrequencyTypeId: location.state.returnFrequencyTypeId,
      defaultCharge: location.state.defaultCharge,
      previousCharge: location.state.returnFrequencyType.previousCharge,
    },
    validationSchema: ClientFeeValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const updateFeeCharge = () => {
    const data = Object.assign(formik.values, { id: location.state.id });
    Update_ClientFeeCharge(data, location.state.id).then((res) => {
      if (res?.data?.isSuccess) {
        toast.success(res.data.successMessage.toString())
        navigate("/Clientfeecharges");
      } else {
        toast.error(res?.data?.errorMessages.toString());
      }
    });
  };
  const getDefultCharge = () => {
    GetReturnFrequencyDD().then((res) => {
      console.log(res);
      if (res.status) setStatus(res.data.result);
    });
  };
  const getGSTClientDD = () => {
    GetGSTClientsDD().then((res) => {
      console.log(res.data);
      if (res.status) setGstClient(res.data.result);
    });
  };
  const handleCancle = () => {
    navigate("/Clientfeecharges");
  };
  console.log("status", location.state);
  return (
    <div className="container p-2 col-11 col-sm-10 col-lg-12 mt-5 text-lg-right float-sm-left">
      <form
        id="formik-form"
        onSubmit={formik.handleSubmit}
        className="ml-2 p-2 mt-2 m-auto col-lg-7"
      >
        <h2 className=" fromheading my-1 p-0 text-center">
          Update Client Fee Map
        </h2>

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
              className="form-Control ml-0 col-sm-12 col-lg-12"
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
              {gstClient.map((item) => (
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
          <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput
              name="previousCharge"
              id="previousCharge"
              label="Previous Charge :"
              disabled="true"
              {...formik.getFieldProps("previousCharge")}
            />
          </Col>
        </Row>
        <Row className="my-3 mx-1">
          <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput
              name="defaultCharge"
              id="defaultCharge"
              label="Default Charge :"
              isTouched={formik.touched.defaultCharge}
              error={formik.errors.defaultCharge}
              placeholder="UpdateDefault Charge "
              span="*"
              {...formik.getFieldProps("defaultCharge")}
            />
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
              className="form-Control ml-0 col-sm-12 col-lg-12"
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
              {status.map((item) => (
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
          <Col m={6} sm={12} ml-0 lg={6}>
            <button
              type="submit"
              className="btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right"
              onClick={() => updateFeeCharge()}
            >
              Submit
            </button>
          </Col>
          <Col m={6} sm={12} ml-0 lg={6}>
            <button
              type="submit"
              className="btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1 float-left"
              onClick={() => handleCancle()}
            >
              Cancel
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default UpdateFeeCharge;
