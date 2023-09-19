import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

  const App = () => { 
        const {
            state: { favs, selectedPhoto, modal },
            updateToFavPhotoIds,
            setPhotoSelected,
            onClosePhotoDetailsModal
          } = useApplicationData();
          const isFav = (photoId) => favs.includes(photoId);
          const isFavPhotoExist = favs.length > 0;
  return (
    <div className="App">
      <HomeRoute isFavPhotoExist={isFavPhotoExist} isFav={isFav} toggleLike={updateToFavPhotoIds} isModal={setPhotoSelected} />
      {modal && <PhotoDetailsModal isModal={setPhotoSelected} closeModal={onClosePhotoDetailsModal} selectedPhoto={selectedPhoto} isFav={isFav} toggleLike={updateToFavPhotoIds} />}
    </div>
  );
};

export default App;
