import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ isFav, toggleLike, photos }) => {
    const photoList = photos.map(photo => {
      return (
        <PhotoListItem  key={photo.id} isFav={isFav} toggleLike={toggleLike} photoId={photo.id} data={photo}/>
      );
    });
    return (
      <ul className="photo-list">
        {photoList}
      </ul>
    );
  };

export default PhotoList;
