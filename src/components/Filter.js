import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setFilter, clearTodos } from '../actions';
import { FILTER_COMPLETED, FILTER_ALL, FILTER_ACTIVE } from '../constants/filters';

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(setFilter(e.target.value)),
  onClickClear: (e) => dispatch(clearTodos())
})

const Dropdown = styled.div`
    margin: 3em 0 0 0;
`;

const Filter = ({ todosLength, filter, onChangeFilter, onClickClear }) => (
  <Dropdown className="row">
    <div className="six columns">
      <div className="row">
        <span className="padding-right-small">Show:</span>
        <select onChange={onChangeFilter} value={filter}>
          <option value={FILTER_ALL}>All</option>
          <option value={FILTER_ACTIVE}>Active</option>
          <option value={FILTER_COMPLETED}>Completed</option>
        </select>
      </div>
    </div>
    <div className="six columns">
      <button className="u-pull-right" style={todosLength ? {} : { display: 'none' }} onClick={onClickClear}>Clear</button>
    </div>
  </Dropdown>
)

export default connect(null, mapDispatchToProps)(Filter);
