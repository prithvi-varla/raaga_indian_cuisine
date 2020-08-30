import React from 'react';
import { deleteAllItems } from '../../../actions/order_item_actions';
import { deleteOrder, deleteOrderItems } from '../../../session_storage/session_storage';
import { removeCheckoutInfo } from '../../../actions/checkout_actions';
import { toggleOrderPlacedModal, toggleReviewModal } from '../../../actions/modal_actions';
import { pick, pickBy, merge } from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './order_item.css';
import './order_placed_modal.css';
import raagLogo from "../../../assets/images/raag.png"

const mapStateToProps = state => ({
  order: state.entities.order,
  orderItems: state.entities.orderItems
});

const mapDispatchToProps = dispatch => ({
  deleteAllItems: () => dispatch(deleteAllItems()),
  removeCheckoutInfo: () => dispatch(removeCheckoutInfo()),
  toggleOrderPlacedModal: () => dispatch(toggleOrderPlacedModal()),
  toggleReviewModal: () => dispatch(toggleReviewModal())
});

class OrderPlacedModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailSent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleOrderPlacedModal = this.toggleOrderPlacedModal.bind(this);
  }

  handleChange() {
    return(e) => {
      this.setState({email: e.target.value});
    }
  }

  toggleOrderPlacedModal(e) {
    if (this.state.emailSent === true) {
      this.setState({emailSent: false});
    }
    if (e.target === e.currentTarget) {
      this.props.deleteAllItems();
      this.props.removeCheckoutInfo();
      deleteOrder();
      deleteOrderItems();
      this.props.toggleOrderPlacedModal();
    }
  }

  render() {
    const { restaurantName, subtotal, deliveryFee, tax, tip, total } = this.props.order;

    const orderList = Object.values(this.props.orderItems).map(itemObj => {
      const optionsList = new Array();
      Array.from(itemObj.options.values()).forEach(option => {
        if (option === null) return null;
        if (option instanceof Array) {
          option.forEach(item => {
            optionsList.push(<li key={item.id} className='optionsorder-item-'><span>{item.name}</span></li>);
          });
        } else {
          optionsList.push(<li key={option.id} className='order-item-options'><span>{option.name}</span></li>);
        }
      });

      return <li key={itemObj.id} className='modal-order-item'>
          <div className='modal-order-container'>
            <div id='modal-quantity'>{itemObj.quantity}</div>
            <div id='modal-item-name'>{itemObj.name}</div>
            <div id='modal-price'>${(itemObj.price * itemObj.quantity).toFixed(2)}</div>
          </div>
          <ul className='modal-options-list'>{optionsList}</ul>
          <div className='modal-order-item-instructions'>{itemObj.itemInstructions ? `"${itemObj.itemInstructions}"` : null}</div>
        </li>;
    });

    return (
      <div className='modal-container' onClick={this.toggleOrderPlacedModal}>
        <div className='order-placed-modal'>
           <img className='logo' src={raagLogo} alt='Raag' /> 
          <h2 className='heading'>Your order has been placed!</h2>

          <div className='modal-order-info'>
            <div className='modal-review-subheader'>
              <h5>Your order details are as below:</h5>
            </div>

            <ul className='modal-order-list'>
              {orderList}
            </ul>

            <div className='totals'>
              <div className='totals-actions'>
              </div>

              <div className='totals-container'>
                <div className='totals-text'>
                  <li>Subtotal:</li>
                  <li id={deliveryFee === 0 ? 'hidden' : null}>Delivery Fee:</li>
                  <li>Tax:</li>
                  <li>Tip:</li>
                  <li>Total:</li>
                </div>
                <div className='totals-amounts'>
                  <li>${subtotal.toFixed(2)}</li>
                  <li id={deliveryFee === 0 ? 'hidden' : null}>${deliveryFee.toFixed(2)}</li>
                  <li>${tax.toFixed(2)}</li>
                  <li>${(parseFloat(tip) * subtotal).toFixed(2)}</li>
                  <li>${total.toFixed(2)}</li>
                </div>
              </div>
            </div>
          </div>

          <button className="x-close" onClick={this.toggleOrderPlacedModal}>&times;</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderPlacedModal));
