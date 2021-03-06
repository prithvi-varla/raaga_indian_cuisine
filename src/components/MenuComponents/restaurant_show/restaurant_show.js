
import React from 'react';
import MenuItem from '../menu/menu_item';
import MenuItemModal from '../modals/menu_item_modal';
import Order from '../order/order';
import Loading from '../../Loading/Loading';
import NavBar1 from '../../NavBar1/NavBar1';
import { MenuBanner } from './MenuBanner';

import './restaurant_show.css';
import { ContactPage } from '../../../components/ContactPage/ContactPage';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";


export default class RestaurantShow extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentItem: null,
      selectedCategory: null,
      selectedSubCategory: null,
      categoriesList: null,
      subCategoriesList: null,
      productList: null
    };

    this.selectItem = this.selectItem.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleSubCategory = this.toggleSubCategory.bind(this);
  }

  componentDidMount() {
    
    if (this.props.restaurant.companyId) {
      this.props.fetchCategories("CATEGORY").then(() => {
        this.props.fetchSubCategories("SUB_CATEGORY").then(() => {
          this.props.fetchMenuItems();
          this.props.fetchMenuItems().then(() => { 
            var d = this.props.categories.data[0];
            if (this.props.categories.data.length > 0) {
              this.toggleCategory(d.categoryId);
            }
            });
          });
      });
    } else {
      this.props.fetchRestaurantInfo();
    }
  }

  selectItem(selectedItem) {
    this.setState({currentItem: selectedItem});
  }

  toggleCategory(selectedItem) {

    if (selectedItem != null) {
      
      var  subCategories = this.props.subCategories.data.filter(subCategory=> subCategory.parentCategoryId === selectedItem);
      //this.setState({'productList': ""});
      this.setState({'subCategoriesList': subCategories});

      if (subCategories.length > 0) {

          var  element = this.props.menuItems.filter(menuItem => menuItem.categoryId === subCategories[0].categoryId);
          //this.setState({'productList': ""});
          this.setState({'productList': element});
      }

      this.setState({'selectedCategory': selectedItem});
      this.setState({'selectedSubCategory': null});

    }
  }

  toggleSubCategory(selectedItem) {
    
   var  element = this.props.menuItems.filter(menuItem => menuItem.categoryId === selectedItem);
    //this.setState({'productList': ""});
    this.setState({'productList': element});
    this.setState({'selectedSubCategory': selectedItem});
  }

  render() {

    if (this.props.restaurant 
      && this.props.categories.action == 'FETCH' 
      && this.props.subCategories.action == 'FETCH') {

      const { name, address, city, state, zip, phone, img_url, open_time, close_time, latitude, longitude, distance, rating_avg, rating_count } = this.props.restaurant;
      const { currentUserFirstName, toggleMenuItemModal, menuItemModal, reviewModal, currentUser, reviewable } = this.props;

      var categoriesList = this.state.categoriesList == null ?this.props.categories.data : this.state.categoriesList;
      const categories = categoriesList.map((category,index) => {
        var classFlag = this.state.selectedCategory != null ? category.categoryId == this.state.selectedCategory : index==0;
        var classname1 =  classFlag ? "nav-item nav-link active" : "nav-item nav-link";
        return (
            
                <a key={category.categoryId} class={classname1} id="zoetig-tab" data-toggle="tab" href="#zoetig" role="tab" aria-controls="zoetig" aria-selected="true" onClick={() => this.toggleCategory(category.categoryId)}>
                  <span>{category.categoryName}</span>
                </a>
              
          );
      });

      var subCategoriesList = this.state.subCategoriesList == null ?this.props.subCategories.data : this.state.subCategoriesList;
      const subCategories = subCategoriesList.map((subCategory,index) => {
        var classFlag = this.state.selectedSubCategory != null ? subCategory.categoryId == this.state.selectedSubCategory : index==0;
        var classname1 =  classFlag ? "menu-filter current" : "menu-filter";
        return (
          <li key={subCategory.categoryId} class={classname1} id="nav-antipasti-tab" data-toggle="tab" href="#nav-antipasti" role="tab" aria-controls="nav-antipasti" aria-selected="true" onClick={() => this.toggleSubCategory(subCategory.categoryId)}>
            <span>{subCategory.categoryName}</span>
          </li>
            
        );
      });

      var productList = this.state.productList == null ?this.props.menuItems : this.state.productList;
      const menuItems =  JSON.stringify(productList) == "{}"? [] : productList.map((menuItem,index) => {
        return <MenuItem key={menuItem.productId}  menuItem={menuItem} selectItem={this.selectItem} toggleMenuItemModal={toggleMenuItemModal} />;
      });

      let view;
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component="div"
          className="row"
        >
          {menuItems}
        </CSSTransitionGroup>
      );
      return (
        <div>

          <Loading />
          <NavBar1 isMenuScreen = "true"/>
          <div className='restaurant-show-container'>
            <div className='restaurant-show-main'>

            <MenuBanner />
              <div className='menu-container'>
                
                <div class="section-title text-center">
                  <h3 class="sub-title wow fadeInUp">Menu</h3>
                  <h2 class="title wow fadeInUp" data-wow-delay="0.3s">
                    Choose your dish from menu
                  </h2>
                </div>
                

                <div class="food-tabs-wrapper wow fadeInUp" data-wow-delay="0.5s">

                  <nav class="tabs-inner">
                    <div class="nav menu-tabs" role="tablist">

                      {categories}
                    </div>
                  </nav>

                  <div class="tab-content tab-content-top">
                    <div class="tab-pane fade show active" id="zoetig" role="tabpanel" aria-labelledby="zoetig-tab">

                    <ul class="menu-filter" data-wow-delay="0.4s">

                          {subCategories}
                        
                      </ul>

                      <ul className='menu'>

                      <div class="tab-content tab-content-child">
                        <div  class="tab-pane fade show active" id="nav-insalatone" role="tabpanel" aria-labelledby="nav-insalatone-tab">
									        
                              {view}
								        </div>
                      </div>

                        { menuItemModal ? <MenuItemModal menuItem={this.state.currentItem} deliveryFee={this.props.restaurant.delivery_fee} deliveryMinimum={this.props.restaurant.delivery_minimum} toggleMenuItemModal={toggleMenuItemModal}
                        restaurantName={this.props.restaurant.name}/> : null }
                      </ul>

                    </div>
                  </div>
                </div>
              </div>  
              
          <ContactPage />  
            </div>

            <div className='order-container'>
              <Order selectItem={this.selectItem} toggleMenuItemModal={toggleMenuItemModal}/>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    } 
  }
}