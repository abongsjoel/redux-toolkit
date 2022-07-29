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
  stories: [
    {
      id: 1,
      name: "TypeScript — What is it all about?",
      claps: 699,
      route:
        "https://levelup.gitconnected.com/typescript-what-is-it-all-about-4c9dea82cd32",
    },
    {
      id: 2,
      name: "JavaScript — A brief introduction",
      claps: 164,
      route:
        "https://medium.com/@abongsjoel/javascript-a-brief-introduction-e995ae5a2494",
    },
    {
      id: 3,
      name: "Redux — A birds-eye view",
      claps: 118,
      route:
        "https://levelup.gitconnected.com/redux-a-birds-eye-view-58925fc5ee8",
    },
  ],
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
