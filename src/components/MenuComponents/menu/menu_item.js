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

      /*
      <div className='menu-item-container' onClick={this.handleClick}>
        <div className='item-name-and-price'>
          <h5>{name}</h5>
          <h5>${price}</h5>
        </div>
        <div className='item-description'>
          {description}
        </div>
      </div>
*/
            <div class="col-md-6">
            </div>
            
    );
  }
}
