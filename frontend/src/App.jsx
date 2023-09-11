import React from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
// import PhotoListItem from './components/PhotoListItem';
import './App.scss';




// const sampleDataForPhotoListItem = {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   };
  
  
const App = () => {
    // const photos = new Array(3).fill(sampleDataForPhotoListItem);
  return (
    <div className="App">
    {/* {photos.map((photo, index) => <PhotoListItem data={photo} key={index}/>)} */}
    <PhotoList />
    <TopicList />
    <TopNavigationBar />
    <HomeRoute />

    </div>
  );
};

export default App;
