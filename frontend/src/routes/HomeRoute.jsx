import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";
import '../styles/HomeRoute.scss';

const HomeRoute = ({ isFavPhotoExist, isFav, toggleLike, isModal }) => {
  return (
    <div className="home-route">
           <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
           <PhotoList isFav={isFav} toggleLike={toggleLike} photos={photos} isModal={isModal}/>
    </div>
  );
};

export default HomeRoute;
