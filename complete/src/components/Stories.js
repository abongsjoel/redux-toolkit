import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clapForStory,
  loadStories,
  selectStoriesList,
  selectStoriesLoadError,
  selectStoriesLoading,
} from "../redux/stories";

const Stories = () => {
  const stories = useSelector(selectStoriesList);
  const loading = useSelector(selectStoriesLoading);
  const loadError = useSelector(selectStoriesLoadError);

  const dispatch = useDispatch();

  const handleClap = (storyId) => {
    dispatch(clapForStory(storyId));
  };

  React.useEffect(() => {
    dispatch(loadStories());
  }, [dispatch]);

  return loading ? (
    <p>loading...</p>
  ) : loadError ? (
    <p style={{ color: "red" }}>{loadError}</p>
  ) : (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>
          <a href={story.route} target="_blank" rel="noreferrer">
            {story.name}
          </a>
          <button onClick={() => handleClap(story.id)}>Clap</button>
          <i>{story.claps}</i>
        </li>
      ))}
    </ul>
  );
};

export default Stories;
