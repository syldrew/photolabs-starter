import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ isFavPhotoExist, isFav, toggleLike, isModal, topics,photos}) => {
  return (
    <div className="home-route">
           <TopNavigationBar isFavPhotoExist={isFavPhotoExist} topics={topics} />
           <PhotoList isFav={isFav} toggleLike={toggleLike} photos={photos} isModal={isModal}/>
    </div>
  );
};

export default HomeRoute;
