import { createAction, createReducer } from "@reduxjs/toolkit";

/* Actions */

export const clapForStory = createAction("story/clap", (storyId) => {
  return { payload: { id: storyId } };
});

/* Selectors */

const selectStoriesState = (rootState) => rootState.stories;
export const selectStoriesList = (rootState) =>
  selectStoriesState(rootState).stories;

/* Reducer */

const initialState = {
  stories: [],
};

const reducer = createReducer(initialState, {
  [clapForStory]: (state, action) => {
    const clappedStory = state.stories.find(
      (story) => story.id === action.payload.id
    );

    clappedStory.claps += 1;
  },
});

export default reducer;
