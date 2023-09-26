import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ isFav, toggleLike, photoId, photo, isModal }) => {
          const { urls, user, location } = photo;
    return (
    <div className="photo-list__item">
     <PhotoFavButton isFav={isFav} toggleLike={toggleLike} photoId={photoId}></PhotoFavButton>   
     <img className="photo-list__image" src={urls.regular} alt="Image" onClick={isModal}></img>
     <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={user.profile} alt={`Profile Image for ${user.username}`}></img>
     <div className="photo-list__user-info">
      <span>{user.name}</span>
      <div className="photo-list__user-location">
      {location.city}, {location.country}
     </div>
    </div>
   </div>
</div>
    );
  };

export default PhotoListItem;
