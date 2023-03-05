import React from 'react'
import { Col, Row } from 'react-bootstrap';
export const SmallInput = (props) => {
  return (
    <React.Fragment>
       <Row>
       <Col m={6} sm={12} lg={4} ml-0 className='p-1'>
       <label htmlFor={props.name} className="form-label col-sm-10 col-lg-12 p-0 text-lg-right float-sm-left">{props.label}<span style={{color:'red',fontSize:"20px"}}>{props.span}</span> </label>  
        </Col>
        <Col m={6} sm={12} lg={6} ml-0 className='p-1'>
         
        <input className='form-Control ml-0 col-sm-12 col-lg-12'
        style={{with:70,padding:'9px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
        onClick={props.onClick}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder || props.label}
        type={props.type || 'text'}
        autoComplete={props.type === 'password' ? 'new-password' : 'off'}
        disabled={props.disabled || false}
        />
        { props.isTouched && props.error && <div className="pt-1  pl-2 form-error " style={{color:"red"}}>{props.error}</div>}
        </Col>
       </Row>
       <div>
        
        </div>
    </React.Fragment>
  )
}
