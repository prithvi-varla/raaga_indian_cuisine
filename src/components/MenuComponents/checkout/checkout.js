import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Order from '../order/order';
import NavBar1 from '../../NavBar1/NavBar1';
import { pick, pickBy, merge } from 'lodash';
import { updateTip, addCheckoutInfo } from '../../../actions/checkout_actions';
import { receiveItemInstructionsErrors, clearErrors } from '../../../actions/menu_item_actions';
import { toggleOrderPlacedModal } from '../../../actions/modal_actions';
import { createOrder } from '../../../actions/order_item_actions';

import './checkout.css'

import { ContactPage } from '../../../components/ContactPage/ContactPage';

import CheckoutForm from './Components/index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentAddress: state.currentAddress,
  checkoutInfo: state.entities.checkoutInfo,
  orderSubtotal: state.entities.order.subtotal,
  order: state.entities.order,
  orderItems: Object.values(state.entities.orderItems),
  itemInstructionsError: state.errors.menuItem.itemInstructions
});

const mapDispatchToProps = dispatch => ({
  updateTip: amount => dispatch(updateTip(amount)),
  addCheckoutInfo: () => dispatch(addCheckoutInfo()),
  receiveItemInstructionsErrors: () => dispatch(receiveItemInstructionsErrors()),
  createOrder: payload => dispatch(createOrder(payload)),
  clearErrors: () => dispatch(clearErrors()),
  toggleOrderPlacedModal: () => dispatch(toggleOrderPlacedModal())
});

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apt: "",
      crossStreet: "",
      city: "",
      state: "",
      zip: "",
      deliveryInstructions: "",
      payee: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      postalCode: "",
      tip: ".2",
      customTip: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCustomTipClick = this.handleCustomTipClick.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidUpdate() {
    if (this.props.checkoutInfo === false && this.props.location.pathname === '/checkout/payment') {
      this.props.history.push('/checkout');
    }
  }

  componentDidMount() {
    
    if (localStorage.getItem("token") == null ) {
      this.props.history.push('/');
    }

    this.props.updateTip(0.2);

    let address, city, state, zip;

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      address,
      city,
      state,
      zip
    });

  }

  update(field) {
    return(e) => {
      if (field === 'tip') {
        this.setState({[field]: e.target.value});
        this.setState({'customTip': ""});
        this.props.updateTip(parseFloat(e.target.value));
      } else if (field === 'customTip') {

        if (!parseFloat(e.target.value) && e.target.value !== "" && e.target.value[e.target.value.length - 1] !== '.') {
          return;
        }

        this.setState({[field]: e.target.value});
        this.setState({'tip': ""});
        const newTip = (e.target.value === "" ? 0 : parseFloat(e.target.value) / this.props.orderSubtotal);
        this.props.updateTip(newTip);
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  updateDeliveryInstructions() {
    return(e) => {
      if (e.target.value.length > 255) {
        this.props.receiveItemInstructionsErrors();
      } else {
        this.setState({'deliveryInstructions': e.target.value});
      }
    };
  }

  handleCustomTipClick() {
    this.setState({'customTip': (parseFloat(this.state.tip) * this.props.orderSubtotal).toFixed(2)});
    this.setState({'tip': ""});
  }

  handleSubmit(e) {
    this.props.addCheckoutInfo();
    this.props.history.push('/checkout#/payment');
  }

  placeOrder(e) {

    let payload = merge({}, this.props.order);
    //payload.user_id = this.props.currentUser.id;
    //payload.restaurant_id = payload.restaurantId;
    payload.deliveryFee = payload.deliveryFee;
    payload.deliveryInstructions = this.state.deliveryInstructions;

    payload.orderItems = this.props.orderItems;
    payload.orderItems.forEach((orderItem, idx) => {
      orderItem.itemInstructions = orderItem.itemInstructions;
      orderItem.productId = orderItem.id;

      if (orderItem.options) {
        orderItem.orderItemOptions = Array.from(orderItem.options.values());

        while (orderItem.orderItemOptions.some(el => el instanceof Array)) {
          orderItem.orderItemOptions.forEach((option, idx) => {
            if (option instanceof Array) orderItem.orderItemOptions.splice(idx, 1, ...option);
          });
        }

        orderItem.orderItemOptions.forEach((option, idx) => {
          if (option === null) return;
          option.item_option_id = option.id;
          orderItem.orderItemOptions[idx] = pick(option, 'item_option_id');
        });
      }

      payload.orderItems[idx] = pick(orderItem, ['productId', 'quantity', 'itemInstructions', 'orderItemOptions']);
    });

    payload = pick(payload, [ 'subtotal', 'tax', 'tip', 'deliveryFee', 'total', 'deliveryInstructions', 'orderItems']);

    this.props.createOrder(payload).then(() => {
      this.props.history.push('/');
      this.props.toggleOrderPlacedModal();
    });
  }

  render() {
    if (!this.props.checkoutInfo || !this.props.location.hash.includes('payment')) {

      return(
        <div className='checkout-container' onClick={this.props.itemInstructionsError ? this.props.clearErrors : null}>
          <NavBar1 isMenuScreen = "true"/>
          <div className='checkout-show-main'>
          <div className='checkout-main'>
            <form className='checkout-form'>
              <h1>You've entered user information</h1>
              <h5>Does everything below look correct?</h5>

              <h3>Contact</h3>
              <input className='contact-input' type='text' value={this.state.firstName} onChange={this.update('firstName')}/>
              <input className='contact-input' type='text' value={this.state.lastName} onChange={this.update('lastName')}/>
              <input className='contact-input' type='email' value={this.state.email} onChange={this.update('email')}/>
              <input className='contact-input' type='text' placeholder='e.g. 555 555 1212' value={this.state.phone} onChange={this.update('phone')}/>

              <textarea className='deliveryInstructions' placeholder='Delivery instructions (e.g. Check in with doorman.)' value={this.state.deliveryInstructions} onChange={this.updateDeliveryInstructions()}></textarea>

              <h6 className='errors'>{this.props.itemInstructionsError ? this.props.itemInstructionsError : null}</h6>

              <button className='continue-to-payment' onClick={this.handleSubmit}>Continue to payment method</button>
            </form>
          
          </div>
          <ContactPage />  
          </div>
          <div className='order-container'>
            <Order />
          </div>
        </div>
      );

    } else {

      return (
        <div className='checkout-container'>
          <NavBar1 isMenuScreen = "true"/>
          <div className='checkout-show-main'>
          <div className='checkout-main'>
            <h1>Review and place order</h1>
            <h5>Review address, payments, and tip to complete your purchase</h5>

            <h3>Your order settings</h3>
            <ul>
              <li>{this.state.firstName} {this.state.lastName}</li>
              <li>{this.state.address}, {this.state.city}, {this.state.state} {this.state.zip}</li>
              <li>{this.state.phone}</li>
            </ul>

            <h3>Payment information</h3>


            <div className='payment-input-form'>

              <div className='payee-container'>
                <h6>Select below payment Method</h6>
                <select>
                  <option value="deskPayment">Pay at Location</option>
                </select>
              </div>

            </div>


            <div className='tip-entry-container'>

              <div className='preset-tip-container'>
                <h3>Add a tip</h3>
                <button className={this.state.tip === '.15' ? 'tip-selected' : 'tip'} value='.15' onClick={this.update('tip')}>15%</button>
                <button className={this.state.tip === '.2' ? 'tip-selected' : 'tip'} value='.2' onClick={this.update('tip')}>20%</button>
                <button className={this.state.tip === '.25' ? 'tip-selected' : 'tip'} value='.25' onClick={this.update('tip')}>25%</button>
                <button className={this.state.tip === '.3' ? 'tip-selected' : 'tip'} value='.3' onClick={this.update('tip')}>30%</button>
              </div>

              <div className='custom-tip-container'>
                <button className={this.state.tip === '' ? 'tip-selected' : 'tip'} onClick={this.handleCustomTipClick}>Custom tip</button>
                <input id='custom-tip-input' placeholder='Custom tip amount' value={this.state.customTip} onChange={this.update('customTip')}/>
              </div>
            </div>


            <button className='place-your-order' onClick={this.placeOrder}>Place Your Order</button>
          </div>

          <ContactPage />  
          </div>

          <div className='order-container'>
            <Order />
          </div>
        </div>
      );

    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));