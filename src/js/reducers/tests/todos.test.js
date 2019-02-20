import todos from '../todos';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

it('todos should be a function', () => {
  expect(todos).to.be.a('function')
});

describe('ADD_ITEM', () => {
  it('should add a new item', () => {
    const initialState = deepFreeze([]);
    const action = deepFreeze({ type: 'ADD_ITEM', content: 'Example item' });
    const endState = [{ content: 'Example item', status: 'to-do' }];
    expect(todos(initialState, action)).to.be.eql(endState);
  });

  it('should add a new item again', () => {
    const initialState = deepFreeze([{ content: 'Example item', status: 'to-do' }]);
    const action = deepFreeze({ type: 'ADD_ITEM', content: 'Another example item' });
    const endState = [
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' }
    ];
    expect(todos(initialState, action)).to.be.eql(endState);
  });
});

describe('REMOVE_ITEM', () => {
  it('should remove an item based on its index', () => {
    const initialState = deepFreeze([
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' }
    ]);
    const action = deepFreeze({ type: 'REMOVE_ITEM', index: 1 });
    const endState = [{ content: 'Example item', status: 'to-do' }];
    expect(todos(initialState, action)).to.be.eql(endState);
  });

  it('should remove another item based on its index', () => {
    const initialState = deepFreeze([
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' },
      { content: 'Another example item 2', status: 'to-do' },
      { content: 'Another example item 3', status: 'to-do' }
    ]);
    const action = deepFreeze({ type: 'REMOVE_ITEM', index: 2 });
    const endState = [
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' },
      { content: 'Another example item 3', status: 'to-do' }
    ];
    expect(todos(initialState, action)).to.be.eql(endState);
  });
});

describe('CHECK_ITEM', () => {
  it('should mark item as done based on its index', () => {
    const initialState = deepFreeze([
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' }
    ]);
    const action = deepFreeze({ type: 'CHECK_ITEM', index: 1 });
    const endState = [
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'is-done' }
    ];
    expect(todos(initialState, action)).to.be.eql(endState);
  });

  it('should mark another item as done based on its index', () => {
    const initialState = deepFreeze([
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' },
      { content: 'Another example item 2', status: 'to-do' },
      { content: 'Another example item 3', status: 'is-done' }
    ]);
    const action = deepFreeze({ type: 'CHECK_ITEM', index: 0 });
    const endState = [
      { content: 'Example item', status: 'is-done' },
      { content: 'Another example item', status: 'to-do' },
      { content: 'Another example item 2', status: 'to-do' },
      { content: 'Another example item 3', status: 'is-done' }
    ];
    expect(todos(initialState, action)).to.be.eql(endState);
  });
});

describe('UNCHECK_ITEM', () => {
  it('should uncheck item based on its index', () => {
    const initialState = deepFreeze([
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'is-done' }
    ]);
    const action = deepFreeze({ type: 'UNCHECK_ITEM', index: 1 });
    const endState = [
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' }
    ];
    expect(todos(initialState, action)).to.be.eql(endState);
  });

  it('should uncheck another item based on its index', () => {
    const initialState = deepFreeze([
      { content: 'Example item', status: 'is-done' },
      { content: 'Another example item', status: 'to-do' },
      { content: 'Another example item 2', status: 'to-do' },
      { content: 'Another example item 3', status: 'is-done' }
    ]);
    const action = deepFreeze({ type: 'UNCHECK_ITEM', index: 0 });
    const endState = [
      { content: 'Example item', status: 'to-do' },
      { content: 'Another example item', status: 'to-do' },
      { content: 'Another example item 2', status: 'to-do' },
      { content: 'Another example item 3', status: 'is-done' }
    ];
    expect(todos(initialState, action)).to.be.eql(endState);
  });
});
