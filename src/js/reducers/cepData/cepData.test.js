import cepData from './index';
import { UPDATE_CEP_DATA } from './action-types';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

describe('UPDATE_CEP_DATA', () => {
  it('should update cep data after request to api', () => {
    const initialState = deepFreeze({});
    const action = deepFreeze({
      type: UPDATE_CEP_DATA,
      data: {
        "status": 1,
        "code": "06233-030",
        "state": "SP",
        "city": "Osasco",
        "district": "Piratininga",
        "address": "Rua Paula Rodrigues"
      }
    });
    const endState = {
      "status": 1,
      "code": "06233-030",
      "state": "SP",
      "city": "Osasco",
      "district": "Piratininga",
      "address": "Rua Paula Rodrigues"
    }
    expect(cepData(initialState, action)).to.be.eql(endState);
  });

  // it('should add a new item again', () => {
  //   const initialState = deepFreeze([{ content: 'Example item', status: 'to-do' }]);
  //   const action = deepFreeze({ type: 'ADD_ITEM', content: 'Another example item' });
  //   const endState = [
  //     { content: 'Example item', status: 'to-do' },
  //     { content: 'Another example item', status: 'to-do' }
  //   ];
  //   expect(todos(initialState, action)).to.be.eql(endState);
  // });
});
