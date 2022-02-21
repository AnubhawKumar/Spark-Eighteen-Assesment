import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import '../assets/css/postsCard.css';

const PostsCard = ({post}) => {
  const { thumbnail_image, event_name, event_date, views, likes, shares } =
    post;
  return (
    <div className="container">
      <h1>{event_name}</h1>
      <img alt="post-images" src={thumbnail_image} />
      <div className="like_view_share_container">
        <p className="like">
          <FontAwesomeIcon
            title="likes"
            icon={faHeart}
            className="font_awesome font_awesome_like"
          />
          {likes}
        </p>
        <p className="view">
          <FontAwesomeIcon
            icon={faEye}
            title="views"
            className="font_awesome font_awesome_view"
          />
          {views}
        </p>
        <p className="share">
          <FontAwesomeIcon
            icon={faShare}
            title ="shares"
            className="font_awesome font_awesome_share"
          />
          {shares}
        </p>
      </div>
      <p className="date">Date : {new Date(event_date).toLocaleDateString()}</p>
    </div>
  );
};

export default PostsCard;
