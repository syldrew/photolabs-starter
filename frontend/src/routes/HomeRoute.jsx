import React, { useCallback, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
    const [fav, setFav] = useState([]);
    const toggleLike = (photoId) => fav.includes(photoId) ? setFav(fav.filter(e => e !== photoId)) : setFav([...fav, photoId]);
    const isFav = (photoId) => fav.includes(photoId);
    const isFavPhotoExist = fav.length > 0;
  return (
    <div className="home-route">
           <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
           <PhotoList isFav={isFav} toggleLike={toggleLike} photos={photos} />
    </div>
  );
};

export default HomeRoute;
