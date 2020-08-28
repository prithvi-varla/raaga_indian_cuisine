import React from 'react';
import { Field, reduxForm } from 'redux-form'

import {
    Form,
    Label,
    FormGroup,
    Input,
    Button
  } from 'reactstrap';

import {renderInputField, required, email, aol, minValue18} from '../../../../util/form_validation_util';


class CheckoutForm extends React.Component {
    

render() {

    let {
        handleSubmit, pristine, reset, initialValues, submitting 
    } = this.props;
        
  return (

    //<Form onSubmit={handleSubmit}>
      
    <Form onSubmit={handleSubmit(this.props.actionSubmit)}>

        <button color="primary" className='continue-to-payment'  type="submit" disabled={submitting}>
            Continue to payment method
        </button>
    </Form>

  )
}
}

export default reduxForm({
  form: 'checkoutForm' // a unique identifier for this form
})(CheckoutForm)