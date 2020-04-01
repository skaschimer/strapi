import reducer, { initialState } from '../reducer';

describe('Upload | components | FiltersCard | reducer', () => {
  it('should return the state with the default value', () => {
    const state = initialState;

    const action = {
      type: 'ON_CHANGE',
      name: 'name',
      value: 'size',
    };

    const actual = reducer(state, action);
    const expected = state.set('name', 'size').set('value', '0KB');

    expect(actual).toEqual(expected);
  });

  it('should return the state with the updated value', () => {
    const state = initialState;

    const action = {
      type: 'ON_CHANGE',
      name: 'filter',
      value: '>',
    };

    const actual = reducer(state, action);
    const expected = state.set('filter', '>');

    expect(actual).toEqual(expected);
  });
  it('should return the updated filters form with custom timestamps', () => {
    const state = initialState;

    const action = {
      type: 'HANDLE_CUSTOM_TIMESTAMPS',
      timestamps: ['createdAtCustom', 'updatedAtCustom'],
    };

    const actualFiltersFormKeys = Object.keys(reducer(state, action).toJS().filtersForm);
    const expectedFiltersFormKeys = ['createdAtCustom', 'updatedAtCustom', 'size', 'mime'];

    expect(actualFiltersFormKeys).toEqual(expectedFiltersFormKeys);
  });

  it('should return the initialState on reset', () => {
    const state = initialState.set('filter', '>');

    const action = {
      type: 'RESET_FORM',
    };

    const actual = reducer(state, action);
    const expected = initialState;

    expect(actual).toEqual(expected);
  });
});
