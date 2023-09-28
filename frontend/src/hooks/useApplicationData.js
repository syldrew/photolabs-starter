import { useReducer, useEffect } from 'react';

// Define initial state
const initialState = {
  favs: [],
  selectedPhoto: null,
  selectedTopic: null,
  modal: false,
  photoData: [], // New state for photo data
  topicData: [], // New state for topic data
};

// Define action types
const TOGGLE_FAV = 'TOGGLE_FAV';
const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const SELECT_TOPIC = 'SELECT_TOPIC'
const CLOSE_PHOTO_DETAILS_MODAL = 'CLOSE_PHOTO_DETAILS_MODAL';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPIC_DATA ='SET_TOPIC_DATA';

// Create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
    const photoId = action.payload;
    if (state.favs.includes(photoId)) {
      return { ...state, favs: state.favs.filter(id => id !== photoId) };
    };
    return { ...state, favs: [...state.favs, photoId] };

    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload, modal: true };

    case SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload};  

    case CLOSE_PHOTO_DETAILS_MODAL:
      return { ...state, modal: false, selectedPhoto: null };

    case SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };

    case SET_TOPIC_DATA:
        return {...state, topicData: action.payload };

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

  const setPhotoSelected = photo => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: CLOSE_PHOTO_DETAILS_MODAL });
  };

  const getPhotosByTopic = topicId => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(photosByTopic => {
        dispatch({ type: SET_PHOTO_DATA, payload: photosByTopic });
      });
  };

 //Effect to fetch photo data
 useEffect(() => {
    const fetchPhotoData = fetch('/api/photos').then((res) => res.json());
    const fetchTopicData = fetch('api/topics').then((res) => res.json());

    Promise.all([fetchPhotoData, fetchTopicData])
      .then(([photoData, topicData]) => {
        dispatch({ type: SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: SET_TOPIC_DATA, payload: topicData });
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
      });
  }, []); // Empty dependency array for initial fetch

  return {
    state: state,
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    onClosePhotoDetailsModal,
  };
};
