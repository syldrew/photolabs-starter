import { useState } from 'react';
export const useApplicationData = () => {
  const [favs, setFavs] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modal, setModal] = useState(false);
  const updateToFavPhotoIds = (photoId) => {
    favs.includes(photoId) ? setFavs(favs.filter(e => e !== photoId)) : setFavs([...favs, photoId]);
  };
    const setPhotoSelected = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };
const onClosePhotoDetailsModal = () => {
    setModal(false);
    setSelectedPhoto(null);
  };
  return {
    state: { favs, selectedPhoto, modal },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal

  };
};