import React from 'react'

export const Input = (props) => {
  return (
    <React.Fragment>
         <div className='form-group d-sm-m-1'> 
        <label htmlFor={props.name} className="form-label ml-0">{props.label}<span style={{color:'red',fontSize:"20px"}}>{props.span}</span> </label>
       <div>
        <input className=' ml-0 col-lg-10 col-sm-10 col-m-6 d-sm-m-0 '
        style={{with:"100",padding:'7px',borderRadius:'5px' ,border:' 1px solid lightgray'}}
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
       { props.isTouched && props.error && <div className="pt-1  pl-2 form-error text-danger">{props.error}</div>}
        </div>
        </div>
    </React.Fragment>
  )
}
