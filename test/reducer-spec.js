import { fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = fromJS({});
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        posts: 'test',
      }),
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      posts: 'test',
    }));
  });
});
