import React from 'react';
import { connect } from 'react-redux';

import isDisabled from '../helpers/isDisabled';

import filterDone from '../actions/filter/filterDone';
import filterToDo from '../actions/filter/filterToDo';
import clearFilter from '../actions/filter/clearFilter';

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterDone: () => dispatch(filterDone()),
    filterToDo: () => dispatch(filterToDo()),
    clearFilter: () => dispatch(clearFilter())
  };
};

const Filters = ({ filter, filterDone, filterToDo, clearFilter }) => {
  return (
    <div className="filters">
      <h3>Filter by:</h3>
      <button disabled={isDisabled(filter, false)} onClick={clearFilter}>All</button>
      <button disabled={isDisabled(filter, 'is-done')} onClick={filterDone}>Done</button>
      <button disabled={isDisabled(filter, 'to-do')} onClick={filterToDo}>To do</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
