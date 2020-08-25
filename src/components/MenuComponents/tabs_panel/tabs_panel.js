import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import RestaurantShowContainer from '../restaurant_show/restaurant_show_container';
import AddressShowContainer from '../address_container/address_show_container';

import './table_style.css';

class TabComponentPanel extends Component{

render(){
  return (
    <Tabs >
      <TabList>
        <Tab>Title 1</Tab>    
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <RestaurantShowContainer />
      </TabPanel>
      <TabPanel>
        <AddressShowContainer />
      </TabPanel>
    </Tabs>
    )
  }
}


export default TabComponentPanel;