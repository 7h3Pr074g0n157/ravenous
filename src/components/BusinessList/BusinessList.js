'use strict';
import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
  render(){
    return (
      <div className="BusinessList">
        this.props.businesses.map(business=>{
    <Business businesses={this.props.businesses} />
  });
</div>
    );
  }
}

export default BusinessList;
