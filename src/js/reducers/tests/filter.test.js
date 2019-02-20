import filter from '../filter';

import { expect } from 'chai';

it('filter should be a function', () => {
  expect(filter).to.be.a('function');
});

describe('FILTER_DONE', () => {
  it('should filter items marked as done', () => {
    const initialState = false;
    const action = { type: 'FILTER_DONE' };
    const endState = 'is-done';
    expect(filter(initialState, action)).to.be.eql(endState);
  });
});

describe('FILTER_TODO', () => {
  it('should filter items marked as to do', () => {
    const initialState = false;
    const action = { type: 'FILTER_TODO' };
    const endState = 'to-do';
    expect(filter(initialState, action)).to.be.eql(endState);
  });
});

describe('CLEAR_FILTER', () => {
  it('should not filter', () => {
    const initialState = false;
    const action = { type: 'CLEAR_FILTER' };
    const endState = false;
    expect(filter(initialState, action)).to.be.eql(endState);
  });
});

