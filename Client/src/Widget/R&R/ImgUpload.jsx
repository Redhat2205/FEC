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

    // do this after the axios comes back with an individual image url
    setForm((old) => ({ ...old, photos: userPhotos }));
  };

  return (
    <div>
      {userPhotos.length === 5 && <p style={{ color: 'red' }}>5 photo upload limit reached</p>}
      <input accept="image" type="file" id="files" onChange={addImgHandler} />
      {userPhotos.length >= 1 && <input accept="image" type="file" id="files" onChange={addImgHandler} />}
      {userPhotos.length >= 2 && <input accept="image" type="file" id="files" onChange={addImgHandler} />}
      {userPhotos.length >= 3 && <input accept="image" type="file" id="files" onChange={addImgHandler} />}
      {userPhotos.length >= 4 && <input accept="image" type="file" id="files" onChange={addImgHandler} />}
    </div>
  );
};

export default ImgUpload;