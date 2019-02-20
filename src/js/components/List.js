import React from 'react';
import { connect } from 'react-redux';

import renderList from '../helpers/renderList';

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};

const List = ({ todos, filter }) => {
  return (
    <ol className="list">
      <h3>Items:</h3>
      {renderList(todos, filter)}
    </ol>
  )
}

export default connect(mapStateToProps)(List);
