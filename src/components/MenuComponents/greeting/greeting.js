import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import SessionModalContainer from '../modals/session_modal_container';

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
    const { currentUser, sessionModal } = this.props;

    if (currentUser !== null ) {
      return (
        <div className='logged-in-section'>
          <div class="right-menu">
          <button className='nav-btn gp-btn' onClick={this.handleLogout}>Log&nbsp;Out</button>
          </div>
          <h3 className='welcome-message'>Welcome, </h3>
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

