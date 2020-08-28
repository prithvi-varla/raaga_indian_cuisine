import React from 'react';

import './menu_item.css';

import storyPic2 from "../../../media/food/3.jpg"

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleMenuItemModal();
    this.props.selectItem(this.props.menuItem);
  }

  render() {
    //
    const { name, price, description } = this.props.menuItem;

    return(


            <div class="col-md-6">
              <div className='menu-item-container' 
              onClick={this.handleClick}>
                <div class="food-item">
                  {/* 
                  <div class="food-thumb">
                    <a href="#">
                      <img src={storyPic2} alt="food" />
                      <span><i class="ei ei-icon_plus"></i></span>
                  </a>
                  </div>
                  */}

                  <div class="content">
                    <h3 class="title"><a >Crema di Pomodoro</a></h3>
                    <span class="price">$23.00</span>

                    <p>
                    Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
    );
  }
}