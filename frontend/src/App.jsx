import React, { useCallback, useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

  const App = () => {
        const [fav, setFav] = useState([]);
        const toggleLike = (photoId) => fav.includes(photoId) ? setFav(fav.filter(e => e !== photoId)) : setFav([...fav, photoId]);
        const isFav = (photoId) => fav.includes(photoId);
        const isFavPhotoExist = fav.length > 0;
        const [selectedPhoto, setSelectedPhoto] = useState();
        const [modal, setModal] = useState(false);
         const isModal = (photo) => {
            setModal(true);
            setSelectedPhoto(photo);
          };
        const closeModal = () => setModal(false);
  return (
    <div className="App">
     <HomeRoute isFavPhotoExist={isFavPhotoExist} isFav={isFav} toggleLike={toggleLike} isModal={isModal} />
      {modal && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} isFav={isFav} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
