import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



import AboutUs from '../components/AboutUs/AboutUs'
import NavBar1 from '../components/NavBar1/NavBar1';
import Carousel from '../components/LandingPage/Carousel';
import { AboutPage } from '../components/AboutPage/AboutPage';
import News  from '../components/News/News';
import Delivery from '../components/Delivery/Delivery'
import { ContactPage } from '../components/ContactPage/ContactPage';
import CommentsComponent from '../components/CommentsComponent/CommentsComponent'
import Gallery from '../components/Gallery/Gallery'
import RestaurantShowContainer from '../components/MenuComponents/restaurant_show/restaurant_show_container';

import Checkout from '../components/MenuComponents/checkout/checkout';

function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUsComponent} />
          <Route exact path='/menu' component={ RestaurantShowContainer }/>
          <Route exact path="/news" component={NewsComponent} />
          <Route exact path="/gallery" component={GalleryComponent} />
          <Route exact path="/delivery" component={DeliveryComponent} />
          <Route exact path="/contact" component={Comments} />
          <Route path='/checkout' component={ Checkout } />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
      <div className="App">
      <NavBar1 /> 
      <Carousel />
      <AboutPage />
      <ContactPage />
      </div>
  );
}

function NewsComponent() {
  return (
    <div className="App">
      <News />
    </div>
  );
}

function DeliveryComponent() {
  return (
    <div className="App">
      <Delivery />
    </div>
  );
}

function AboutUsComponent() {
  return (
    <div className="App">
      <AboutUs />
    </div>
  );
}

function Comments() {
  return (
    <div className="App">
      <CommentsComponent />
    </div>
  );
}

function GalleryComponent() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
