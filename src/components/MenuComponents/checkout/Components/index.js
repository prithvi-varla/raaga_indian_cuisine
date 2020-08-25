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

        <FormGroup>
            <Field name="firstName" type="firstName" id="firstName"
                htmlFor="firstName"
                component={renderInputField} label="First Name"
                validate={[ required, minValue18 ]}
                className="contact-input"
            />
        </FormGroup>

        <FormGroup>
            <Field name="lastName" type="lastName" id="lastName"
                htmlFor="lastName"
                component={renderInputField} label="Last Name"
                validate={[ required, minValue18 ]}
                className="contact-input"
            />
        </FormGroup>

        <FormGroup>
            <Field name="emailAddress" type="email" id="email"
                htmlFor="email"
                component={renderInputField} label="Email"
                validate={[ required, email ]}
                warn={aol}
                className="contact-input"
            />
        </FormGroup>

        <FormGroup>
            <Field name="phonenumber" type="text" id="phonenumber"
                htmlFor="phonenumber"
                component={renderInputField} label="Phone Number"
                validate={[ required, minValue18 ]}
                className="contact-input"
            />
        </FormGroup>
        

        <FormGroup>
        <Label htmlFor="exampleText">Comments</Label>
        <Input className="deliveryInstructions"
        placeholder= "Delivery instructions (e.g. Check in with doorman.)" 
        type="textarea" name="text" id="exampleText" />
        </FormGroup>

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