import React from 'react';

import './menu_item.css';

import storyPic2 from "../../../media/food/3.jpg"

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  toggleCategory123() {
    this.props.toggleMenuItemModal();
    this.props.selectItem(this.props.menuItem);
  }

  render() {
    //
    const { name, price, description } = this.props.menuItem;

    return(
            <div class="col-md-6">
              <div className='menu-item-container'onClick={() => this.toggleCategory123()}>
                <div class="food-item">

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
