import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [fav, setFav] = useState('');
    const handleClick = () => {
        if (fav) {
          setFav('');
        } else {
          setFav(true);
        }
      };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={fav}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;