// import { useState } from 'react';
// export const useApplicationData = () => {
//   const [favs, setFavs] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [modal, setModal] = useState(false);
//   const updateToFavPhotoIds = (photoId) => {
//     favs.includes(photoId) ? setFavs(favs.filter(e => e !== photoId)) : setFavs([...favs, photoId]);
//   };
//     const setPhotoSelected = (photo) => {
//     setModal(true);
//     setSelectedPhoto(photo);
//   };
// const onClosePhotoDetailsModal = () => {
//     setModal(false);
//     setSelectedPhoto(null);
//   };
//   return {
//     state: { favs, selectedPhoto, modal },
//     updateToFavPhotoIds,
//     setPhotoSelected,
//     onClosePhotoDetailsModal

//   };
// };

import { useReducer } from 'react';

// Define initial state
const initialState = {
  favs: [],
  selectedPhoto: null,
  modal: false,
};

// Define action types
const TOGGLE_FAV = 'TOGGLE_FAV';
const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const CLOSE_PHOTO_DETAILS_MODAL = 'CLOSE_PHOTO_DETAILS_MODAL';

// Create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      return {
        ...state,
        favs: state.favs.includes(action.payload)
          ? state.favs.filter((id) => id !== action.payload)
          : [...state.favs, action.payload],
      };
    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload, modal: true };
    case CLOSE_PHOTO_DETAILS_MODAL:
      return { ...state, modal: false, selectedPhoto: null };
    default:
      return state;
  }
};

export const useApplicationData = () => {
  // Use the reducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define action functions to update state
  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: TOGGLE_FAV, payload: photoId });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: CLOSE_PHOTO_DETAILS_MODAL });
  };

  return {
    state: state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};
