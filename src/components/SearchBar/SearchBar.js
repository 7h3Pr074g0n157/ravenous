'use strict';
import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'highest_rated',
  'Most Reviewed': 'most_reviewed'
};

function getSortByClass(sortByOption){
  if(this.state.sortBy == sortByOption){
    return 'active';
  }else{
    return '';
  }
}

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'term': '',
      'location': '',
      'sortBy': 'best_match'
    };
  }

  handleSortByChange(sortByOption){
    this.setState({
      sortBy: sortByOption
    });
  }

  renderSortByOptions(){
      return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
        return <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
      });
  }

  render(){
    return (
      <div class="SearchBar">
  <div class="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
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
