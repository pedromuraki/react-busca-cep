import React from 'react';
import { connect } from 'react-redux';

import isDisabled from '../helpers/isDisabled';

import removeItem from '../actions/todos/removeItem';
import checkItem from '../actions/todos/checkItem';
import uncheckItem from '../actions/todos/uncheckItem';

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (index) => dispatch(removeItem(index)),
    checkItem: (index) => dispatch(checkItem(index)),
    uncheckItem: (index) => dispatch(uncheckItem(index))
  };
};

const ListItem = ({ content, status, index, removeItem, checkItem, uncheckItem }) => {
  return (
    <li className={status}>
      {content}
      <div>
        <button
          disabled={isDisabled(status, 'is-done')}
          onClick={() => checkItem(index)}>
          Done
        </button>
        <button
          onClick={() => removeItem(index)}>
          Remove
        </button>
        <button
          disabled={isDisabled(status, 'to-do')}
          onClick={() => uncheckItem(index)}>
          Uncheck
        </button>
      </div>
    </li>
  )
}

export default connect(null, mapDispatchToProps)(ListItem);
