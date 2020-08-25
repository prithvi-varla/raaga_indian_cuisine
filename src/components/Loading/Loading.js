import React from 'react';

import './loading.css';

export default class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
   // window.addEventListener('load', this.handleLoad);
   setTimeout(() => {
    this.setState({
        loading: false
      });
  }, 500)
  }

  componentWillUnmount() { 
    //window.removeEventListener('load', this.handleLoad)  
  }

  handleLoad() {
    //$("myclass") //  $ is available here
  }

  render() {
    if (this.state.loading) {
        return (
            <div className="page-loader">
                <div className="loader">
                    <ul className="loader-cup">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="wineglass left">
                        <div className="top"></div>
                    </div>
                    <div className="wineglass right">
                        <div className="top"></div>
                    </div>
                </div>
            </div>
        );
        }else {
            return (<div></div>);
        }
    } 
}