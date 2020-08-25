import React from 'react';

import {
    Label,
    Input,
    CustomInput
  } from 'reactstrap';


export const required = value => value ? undefined : 'Required'
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const minValue18 = minValue(18)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
export const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

export const renderInputField = ({ input, label, type, htmlFor,className, meta: { touched, error, warning } }) => (
    <div className="form-valid">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input
        {...input} placeholder={label} type={type} className={className}
        />
        {touched && ((error && <span> {error}</span>) || (warning && <span> {warning}</span>))}
        
    </div>
)

export const renderSelectField = ({ input, label, type, htmlFor, optionValues, meta: { touched, error, warning } }) => (
  <div className="form-valid">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
      {...input} placeholder={label} type={type}
      >{optionValues}</Input>
      {touched && ((error && <span> {error}</span>) || (warning && <span> {warning}</span>))}
      
  </div>
)

export const renderInputCurrencyField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-valid">
      <Input
      {...input} placeholder={label} type={type}
      />
      {touched && ((error && <span> {error}</span>) || (warning && <span> {warning}</span>))}
      
  </div>
)

export const renderCheckbox = ({ input, label, type, className, id, meta: { touched, error, warning } }) => (
  <div className="form-valid">
      <CustomInput
      {...input} className={className} type={type} label={label} id={id}
      />
  </div>
)
