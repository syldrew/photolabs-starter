import React, { useCallback, useState } from "react";
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
    const [Fav, isFav] = useState(false);
    function toggleLike(e) {
      isFav(!Fav);
      props.toggleLike(props.photoId);
    }
    return (
      <div className="photo-list__fav-icon" onClick={(e) => toggleLike(e)}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon displayAlert={false} selected={Fav} ></FavIcon>
        </div>
      </div>
    );
  }
  
  export default PhotoFavButton;