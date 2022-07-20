import React from 'react';
import axios from 'axios';

const ImgUpload = ({
  form, setForm, userPhotos, setUserPhotos,
}) => {
  const addImgHandler = (e) => {
    // console.log('current upload image', e.target.files[e.target.files.length - 1]);
    // console.log('current state of photos array:', e.target.files);
    setUserPhotos((old) => (old.concat(e.target.files)));
    // console.log('current state of userPhotos', userPhotos);
    setForm((old) => ({ ...old, photos: userPhotos }));
  };

  return (
    <div>
      <input accept="image" type="file" id="files" onChange={addImgHandler}></input>
      {userPhotos.length >= 1 && <input accept="image" type="file" id="files" onChange={addImgHandler}></input>}
      {userPhotos.length >= 2 && <input accept="image" type="file" id="files" onChange={addImgHandler}></input>}
      {userPhotos.length >= 3 && <input accept="image" type="file" id="files" onChange={addImgHandler}></input>}
      {userPhotos.length >= 4 && <input accept="image" type="file" id="files" onChange={addImgHandler}></input>}
      {/* {userPhotos.length === 5 ? <input accept="image" type="file" id="files" onChange={(e) => (console.log(e.target.files[e.target.files.length - 1]))}></input> : null} */}
    </div>
  );
};

export default ImgUpload;