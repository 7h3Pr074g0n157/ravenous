'use strict';
import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'highest_rated',
  'Most Reviewed': 'most_reviewed'
};

class SearchBar extends React.Component{
  renderSortByOptions(){

      return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });

  }
  render(){
    return (
      <div class="SearchBar">
  <div class="SearchBar-sort-options">
    <ul>
      this.renderSortByOptions();
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
    );
  }
}

export default SearchBar;
