'use strict';
import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
  render(){
    return (
      <div className="BusinessList">{
        this.props.businesses.map(business=>{
          return <Business business={business} />
        })
      }
      <Business {this.props.businesses[0]}/>
      </div>
    );
  }
}

export default BusinessList;
