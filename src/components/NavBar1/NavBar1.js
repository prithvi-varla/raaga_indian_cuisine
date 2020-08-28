

import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findDOMNode } from "react-dom";
import { refHasClassName } from "../../commons/utils";
import BurgerMenuSVG from "../../assets/images/burger-menu";
import ScrollListener from "../../commons/scroll-listener";
import { Link } from "react-router-dom";
import IconButton from "../../commons/icon-button";

import raagLogo from "../../assets/images/raag.png"
import GreetingContainer from '../MenuComponents/greeting/greeting_container';

import "./style.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/fontawesome-free-solid'

import { deleteItem } from '../../actions/order_item_actions';
import { deleteAllItems } from '../../actions/order_item_actions';
import { toggleSessionModal } from '../../actions/modal_actions';

import EmptyCart from "./EmptyCart";
import CartScrollBar from "./CartScrollBar";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import cartBag from './img/shopping-bag.svg';


// Height in px for navbar
const navbarHeight = 0;

const mapStateToProps = state => ({
  order: state.entities.order,
  currentUser: state.session.currentUser,
  orderItems: Object.values(state.entities.orderItems)
});

const mapDispatchToProps = dispatch => ({
  deleteItem: (id, price, quantity) => dispatch(deleteItem(id, price, quantity)),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
  deleteAllItems: () => dispatch(deleteAllItems())
});

class NavBar1 extends React.Component {

  constructor(props) {
    super(props);
    this.navBarRef = React.createRef();
    this.renderLinks = this.renderLinks.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.toggleNavbarBackgroundColor = this.toggleNavbarBackgroundColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      mobileMenuOpened: false,
      navLinks: [
        { title: "Features", url: "/#why-bonMunch" },
        { title: "Menu", url: "/Menu" },
        { title: "Gallery", url: "/Gallery" },
        {
          title: "Review",
          url: "/contact"
        }
      ],

      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false,
      cartBounce: false,

      orderItems: this.props.orderItems,
      totalItems: 0,
      total: this.props.order.total || null
    };
  }

  componentWillReceiveProps(newProps) {
    var d = Object.values(newProps.orderItems).length;
    var g = this.state.orderItems.length;
    if (this.state.orderItems.length != Object.values(newProps.orderItems).length) {
        this.setState({
          cartBounce: true
        });
        setTimeout(
          function() {
            this.setState({
              cartBounce: false
            });
          }.bind(this),
          1000
        );
    }
    this.sumTotalItems(Object.values(newProps.orderItems).length);
    this.setState({
      'total': newProps.order.total,
      'orderItems': Object.values(newProps.orderItems)
    });
  }

  sumTotalItems(number) {
    let total = 0;
    total = number;
    this.setState({
      totalItems: total
    });
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  deleteItem(productId, productPrice, productQuantity) {

    this.props.deleteItem(productId, productPrice, productQuantity);
  }

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }

  handleClick() {
    this.props.history.push(`/menu`);
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  handleClickOutside(event) {
    const cartNode = findDOMNode(this.refs.cartPreview);
    const buttonNode = findDOMNode(this.refs.cartButton);
    if (cartNode != null && cartNode.classList.contains("active")) {
      if (!cartNode || !cartNode.contains(event.target)) {
        this.setState({
          showCart: false
        });
        event.stopPropagation();
      }
    }
  }

  handleScroll() {
    this.toggleNavbarBackgroundColor();
  }

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }

  handleCheckout() {

    if (this.props.currentUser) {
      this.props.history.push('/checkout');
    } else {
      this.props.toggleSessionModal();
      this.setState({
        showCart: false
      });
    }
  }

  toggleBurgerMenu() {
    this.setState(
      {
        mobileMenuOpened: !this.state.mobileMenuOpened
      },
      this.toggleNavbarBackgroundColor
    );

    const { mobileMenuOpened } = this.state;
    if ( mobileMenuOpened) {
      var dd = document.body.classList;
      document.body.classList.add('open-menu');
    } else if ( !mobileMenuOpened) {
      var dd = document.body.classList;
      document.body.classList.remove('open-menu');
    }
  }

  closeBurgerMenu() {
    if (this.state.mobileMenuOpened) {
      this.toggleBurgerMenu();
    }
  }

  toggleNavbarBackgroundColor() {
    // If the navbar is rendered without transparent background
    // there's no need to toggle it's background color
    if (this.props.withTransparentBackground !== false) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const { mobileMenuOpened } = this.state;
      const hasClassName = refHasClassName(this.navBarRef, "gp-header-sticky");

      if (scrollTop > navbarHeight) {
        if (hasClassName) {
          this.navBarRef.current.classList.remove("gp-header-sticky");
          this.navBarRef.current.classList.add("gp-header-fixed");
        }
      } else if (!hasClassName && !this.props.isMenuScreen) {
        this.navBarRef.current.classList.remove("gp-header-fixed");
        this.navBarRef.current.classList.add("gp-header-sticky");
      } 
    }
  }

  renderLinks() {
    return (
      <ul>
        {this.state.navLinks.map((link, index) => (
          <li key={index}>
            {link.external && (
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.icon && <link.icon />} {link.title}
              </a>
            )}
            {!link.external && (
              <Link to={link.url} onClick={this.closeBurgerMenu}>
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
    var df = "Dfd";
    var df2 = "Dfd";
    var df34 = "Dfd";
  }

  render() {
    const { withTransparentBackground = true, className = "" } = this.props;
    const { mobileMenuOpened } = this.state;
    const mobileMenuStyle = {
      maxHeight: mobileMenuOpened ? 360 : 0
    };

    const siteHeaderClass = "site-header " + (this.props.isMenuScreen ? 'site-header-menu gp-header-fixed' : '');
    const navbarClasses = [siteHeaderClass, className];
    if (withTransparentBackground === true) {
      navbarClasses.push(" gp-header-sticky");
    }


    let cartItems;
    cartItems = this.state.orderItems.map(product => {
      
      return (
        <li className="cart-item" key={product.name}>
          {/* <img className="product-image" src={product.image} />  */}
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="item-quantity">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            onClick={this.deleteItem.bind(this, product.id, product.price, product.quantity)}
          >
            ×
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component="ul"
          className="cart-items"
        >
          {cartItems}
        </CSSTransitionGroup>
      );
    }

    let ttes = (

      <div class="greeting-container" hidden= {!this.props.isMenuScreen}>
                  
                  
                  <div className="cart">
                    <a
                      className="cart-icon"
                      href="#"
                      onClick={this.handleCart.bind(this)}
                      ref="cartButton"
                    >

                      <img
                        className={this.state.cartBounce ? "tada" : " "}
                        src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                        alt="Cart"
                      />
                      
                      {this.state.totalItems > 0? (
                        <span className="cart-count">{this.state.totalItems}</span>
                      ) : (
                        ""
                      )}

                    </a>


                    <div
                      className={
                        this.state.showCart ? "cart-preview active" : "cart-preview"
                      }
                      ref="cartPreview"
                    >

                      <CartScrollBar>{view}</CartScrollBar>
                      

                      <div id="fff" className={(this.state.orderItems.length === 0 || this.props.location.pathname.includes('checkout')) ? 'hidden' : 'proceed-to-checkout-button-container'}>    
                        <button className='proceed-to-checkout-button' onClick={this.handleCheckout} onClick={this.handleCheckout.bind(this)}>Proceed to checkout: ${this.state.total ? this.state.total.toFixed(2) : null}</button>
                      </div>
                      

                      <div className={this.props.location.pathname.includes('checkout') ? 'only-on-checkout' : 'hidden'}>
                        <button className='modify-order' onClick={this.handleClick}>&#10094; &nbsp;Modify your order</button>
                      </div>

                    </div>

                  </div>


                </div>
    );



    const Navbar = (
        <header ref={this.navBarRef} className={navbarClasses.join(" ")}>
          <div class="navbar-menu-container">
            <div class="header-inner">

              <div class="site-logo">
                <a href="/" class="logo">
                  <img src={raagLogo} alt="site logo" class="logo-main" />
                  <img src={raagLogo} alt="site logo" class="logo-sticky" />
                </a>
              </div>

              <div class="flex-container">

                <div class="flex-child magenta">
                  
                  <div className={this.props.location.pathname.includes('menu') ? '' : 'hidden'} >
                    <GreetingContainer />
                  </div>
                </div>
                
                <div class="flex-child-2 green">
                  
                {ttes}
                </div>
                
              </div>
              
              <div class="toggle-menu" onClick={this.toggleBurgerMenu}>
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                  
              </div>

              <nav class="site-nav">
                <div class="close-menu">
                  <FontAwesomeIcon icon={faWindowClose} onClick={this.toggleBurgerMenu} />
                </div>

                <ul class="site-main-menu">
                  <li><a ></a></li>
                  <li><a href="/">Home</a></li>
                  <li><a href="/aboutUs">About</a></li>
                  <li><a href="/menu">Menu/&nbsp;Online&nbsp;Order</a></li>
                  <li><a href="/news">News</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/delivery">Delivery</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>

                <div class="right-menu" hidden= {!this.props.isMenuScreen}>
                {/*hidden= {this.props.isMenuScreen || this.state.mobileMenuOpened}> */}
                  <a href="#" class="nav-btn gp-btn">Reservations</a>
                </div>

                {/*
                <div className={this.state.mobileMenuOpened ? '' : 'hidden'}>
                {ttes}
                </div>
                */}

                <div className={this.props.location.pathname.includes('menu') ||
                this.props.location.pathname.includes('checkout') ||
                 this.state.mobileMenuOpened ? '' : 'hidden'} >
                  <GreetingContainer />
                </div>
              </nav>

              
            </div>
          </div>
        </header>
    );

    return withTransparentBackground ? (
      <ScrollListener onScroll={this.handleScroll}>{Navbar}</ScrollListener>
    ) : (
      Navbar
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar1));