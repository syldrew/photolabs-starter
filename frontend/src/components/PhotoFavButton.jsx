import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [fav, setFav] = useState('');
  return (
    // <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon" onClick={() => setFav('true')}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={fav}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;