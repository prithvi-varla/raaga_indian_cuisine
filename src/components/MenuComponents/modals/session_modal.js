import React from 'react';

import './session_modal.css';

export default class SessionModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.toggleSignupModal = this.toggleSignupModal.bind(this);
    this.toggleSessionModal = this.toggleSessionModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.signupModal) {
      this.props.signup(user);
    } else {
      const pathname = this.props.location.pathname;
      const index = pathname.search(/\d+/);
      if (index === -1) {
        this.props.login(user);
      } else {
        const id = pathname.slice(index);
        this.props.login(user).then(() => {
          //Test123
          //this.props.fetchReviewable(id);
        });
      }
    }
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, {username: 'guest@bonmunch.com', password: 'guestdemo', firstName: 'Guest'});
    this.props.login(user);
  }

  toggleSignupModal() {
    this.props.toggleSignupModal();
    this.props.clearErrors();
  }

  toggleSessionModal(e) {
    if (e.target === e.currentTarget) {
      this.props.toggleSessionModal();
      this.props.clearErrors();
    }
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const { signupModal, errors, toggleSessionModal, toggleSignupModal } = this.props;

    let extraFields;
    if (signupModal) {
      extraFields = (
        <div className='name-container'>
          <input type='text' placeholder='First Name' value={this.state.firstName} onChange={this.update('firstName')}/>
          <input type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.update('lastName')}/>
        </div>
      );
    }

    let guestSignIn;
    if (!signupModal) {
      guestSignIn = <input id='guest-login' type='submit' value='Guest Sign In' onClick={this.handleGuestLogin}/>;
    }

    return (
      <div className='modal-container' onClick={this.toggleSessionModal}>
        <div className='session-modal'>
          {/* Test123 */}
          {/* <img className='logo' src={window.staticImages.logo} alt='FoodDotCom' /> */}
          <h2 className='heading'>{signupModal ? 'Create your account' : 'Sign in with your Food.com account' }</h2>

          <h6 className='errors'>{errors ? errors[0] : null}</h6>

          <form className='session-form'>
            {extraFields}
            <input type='emailAddress' placeholder='Email' value={this.state.username} onChange={this.update('username')}/>
            <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
            <input type='submit' value={signupModal ? 'Create your account' : 'Sign In'} onClick={this.handleSubmit}/>
            {guestSignIn}
            <h6>{signupModal ? 'Have an account?' : 'Don\'t have an account?'} <a onClick={this.toggleSignupModal}>{signupModal ? 'Sign in' : 'Create your account'}</a></h6>
          </form>

          <button className="x-close" onClick={this.toggleSessionModal}>&times;</button>
        </div>
      </div>
    );
  }
}
