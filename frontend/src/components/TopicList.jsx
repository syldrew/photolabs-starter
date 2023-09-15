import React from "react";
import TopicListItem from "./TopicListItem"
import "../styles/TopicList.scss";
import topics from "mocks/topics";

const TopicList = () => {
    const topicList = topics.map(topic => {
        return (
          <TopicListItem data={topic} key={topic.id} />
        );
      });
  return (
    <div className="top-nav-bar__topic-list">
       {topicList}
    </div>
  );
};

export default TopicList;
