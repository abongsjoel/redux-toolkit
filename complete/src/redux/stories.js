import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";

/* Actions */

export const clapForStory = createAction("story/clap", (storyId) => {
  return { payload: { id: storyId } };
});

export const loadStories = createAsyncThunk("story/load", async () => {
  const response = await fetch("http://localhost:3001/stories");

  const stories = await response.json();

  return { stories };
});

/* Selectors */

const selectStoriesState = (rootState) => rootState.stories;
export const selectStoriesList = (rootState) =>
  selectStoriesState(rootState).stories;
export const selectStoriesLoading = (rootState) =>
  selectStoriesState(rootState).storiesLoading;
export const selectStoriesLoadError = (rootState) =>
  selectStoriesState(rootState).error;

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

  [loadStories.pending]: (state) => {
    state.storiesLoading = true;
  },

  [loadStories.fulfilled]: (state, action) => {
    state.storiesLoading = false;
    state.stories = action.payload.stories;
  },

  [loadStories.rejected]: (state) => {
    state.storiesLoading = false;
    state.error =
      "Error, something went wrong. Contact support if problem persis";
  },
});

export default reducer;
