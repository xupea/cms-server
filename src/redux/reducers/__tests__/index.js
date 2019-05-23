import rootReducer, { createStore } from 'redux';
import { worlds } from '../index';
import * as types from '../../actions';

describe('worlds reducer', () => {
  it('should return the initial state', () => {
    expect(worlds(undefined, {})).toEqual([])
  })

  // it('should handle recipe creation', () => {
  //   const store = createStore(rootReducer, []);
  //   const recipe = { recipeName: 'fruitties' };

  //   const action = recipeActions.addRecipeSuccess(recipe);
  //   store.dispatch(action);

  //   const actual = store.getState().userRecipes[0];
  //   const expected = { recipeName: 'fruitties' };

  //   expect(actual).toEqual(expected);
  // });

  // it('should handle ADD_TODO', () => {
  //   expect(
  //     reducer([], {
  //       type: types.ADD_TODO,
  //       text: 'Run the tests'
  //     })
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 0
  //     }
  //   ])

  //   expect(
  //     reducer(
  //       [
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0
  //         }
  //       ],
  //       {
  //         type: types.ADD_TODO,
  //         text: 'Run the tests'
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 1
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0
  //     }
  //   ])
  // })
})