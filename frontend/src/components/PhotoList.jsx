import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ isFav, toggleLike, photos, isModal}) => {
    if (typeof(photos) === 'object') {
        photos = Object.values(photos);
      } 
      const photoList = photos.map(photo => {
      return (
        <PhotoListItem  key={photo.id} isFav={isFav} toggleLike={toggleLike} photoId={photo.id} photo={photo} isModal={() => isModal(photo)}/>
      );
    });
    return (
      <ul className="photo-list">
        {photoList}
      </ul>
    );
  };

export default PhotoList;
