import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import SessionModalContainer from '../modals/session_modal_container';
import OrderPlacedModal from '../../MenuComponents/modals/order_placed_modal';

import Loading from '../../Loading/Loading';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleSessionModal = this.toggleSessionModal.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/menu');
  }

  toggleSessionModal() {
    this.props.clearErrors();
    this.props.toggleSessionModal();
  }

  render() {
    const { currentUser, sessionModal, orderPlacedModal } = this.props;

    if (currentUser !== null || localStorage.getItem("token") != null ) {
      return (
        <div className='logged-in-section'>
          <Loading />
          { orderPlacedModal ? <OrderPlacedModal /> : null }
          <div class="right-menu">
          <button className='nav-btn gp-btn' onClick={this.handleLogout}>Log&nbsp;Out</button>
          </div>
          <h3 className='welcome-message'>Welcome User</h3>
        </div>
      );
    } else {
      return (
        <div class="right-menu">
          <button className='nav-btn gp-btn' onClick={this.toggleSessionModal}>Sign&nbsp;In</button>
          { sessionModal ? <SessionModalContainer /> : null }
        </div>
      );
    }
  }
}


export default withRouter(connect(null, null)(Greeting));

