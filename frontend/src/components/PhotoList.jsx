import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = () => {
    const photoList = photos.map(photo => {
      return (
        <PhotoListItem data={photo} key={photo.id}/>
      );
    });
    return (
      <ul className="photo-list">
        {photoList}
      </ul>
    );
  };

export default PhotoList;
