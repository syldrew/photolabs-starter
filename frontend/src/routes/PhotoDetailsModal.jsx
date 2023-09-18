import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = ({ isFav, toggleLike, closeModal, selectedPhoto }) => {
    const { id, urls, user, location, similar_photos } = selectedPhoto;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"  onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton isFav={isFav} toggleLike={toggleLike} photoId={id}></PhotoFavButton>
        <img className="photo-details-modal__image" src={urls.regular} alt="Image"></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile Image for ${user.username}`}></img>
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList isFav={isFav} toggleLike={toggleLike} photos={similar_photos}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
