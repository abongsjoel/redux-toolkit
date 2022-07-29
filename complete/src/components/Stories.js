import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clapForStory, selectStoriesList } from "../redux/stories";

const Stories = () => {
  const stories = useSelector(selectStoriesList);

  const dispatch = useDispatch();

  const handleClap = (storyId) => {
    dispatch(clapForStory(storyId));
  };

  return (
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
