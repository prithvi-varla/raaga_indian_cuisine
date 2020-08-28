import React from 'react';
import { Field, reduxForm } from 'redux-form'

import {
    Form
  } from 'reactstrap';

class CheckoutForm extends React.Component {
    

render() {

    let {
        handleSubmit, submitting 
    } = this.props;
        
  return (
      
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