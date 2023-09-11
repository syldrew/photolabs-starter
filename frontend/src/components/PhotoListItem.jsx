import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
    const { imageSource, profile, username, location } = props.data;
    return (

    //   <div>
    //     <img src={props.data.imageSource}></img>
    //     <img src={props.data.profile}></img>
    //     <p>{props.data.username}</p>
    //     <p>{props.data.location.city}, {props.data.location.country}</p>
    //   </div>  

<div className="photo-list__item">
    <PhotoFavButton></PhotoFavButton>
    <img className="photo-list__image" src={imageSource} alt="Photo"></img>
     <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={profile} alt={`Profile Image for ${username}`}></img>
     <div className="photo-list__user-info">
      <span>{username}</span>
      <div className="photo-list__user-location">
      {location.city}, {location.country}
     </div>
    </div>
   </div>
</div>
    );
  };

export default PhotoListItem;
