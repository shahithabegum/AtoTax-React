import React from "react";
import { Dialog, DialogActions, DialogContent, Slide } from '@material-ui/core'
import { Close } from "@material-ui/icons";
import { CancelButton, SubmitButton } from "./Buttons";
import { Col, Row } from 'react-bootstrap';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});
export function Model(props) {
    return (
        <Dialog open={props.show} onClose={props.onHide} TransitionComponent={Transition} maxWidth={'md'}  style={{marginLeft:"20%"}}>
            <div className="d-flex justify-content-between align-items-center  py-2 px-3">
                <div className="primary-title text-capitalize">{props.title}</div>
                <button onClick={props.onHide} className="closeButton">
                    <Close/>
                </button>
            </div>
            <DialogContent style={{padding:"20px",with:"100%"}}>
            
                {props.children}
                {/* <Row className='my-1 mx-1 justify-content-center '>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn btn-block btn-outline-info ml-0 col-sm-10 col-lg-12 my-0' onClick={props.onHide}>Confirm</button>
              
              </Col>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-12 my-0'  onClick={props.handleCancle}>Cancel</button>
                </Col>
              </Row> */}
            </DialogContent>
            {/* <DialogActions className="border-top py-3">
             <CancelButton onClick={props.onHide}>
                    CANCEL
                </CancelButton>
                <SubmitButton form="formik-form" type="submit" onClick={props.handleCancle}>
                    {props.submitButtonText || 'CREATE'}
                </SubmitButton> */}
        </Dialog>
    );
}