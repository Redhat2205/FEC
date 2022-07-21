import React, { useState, useEffect } from "react";
import axios from 'axios';

const useAnswerForm = (questionID, addModalStatus) => {
  const [submit, setSubmit] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);
  const [allUrls, setAllUrls] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    body: "",
  });

  const urlArray = [];
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOnChangePhoto = (e) => {
    setImageSrc(imageSrc.concat(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const json = values;
    const formData = new FormData();
    formData.append("upload_preset", "fecuploads");
    const promises = imageSrc.map((image) => {
      if (formData.get('file') === undefined) {
        formData.append("file", image[0]);
      } else {
        formData.set("file", image[0]);
      }
      return axios.post("https://api.cloudinary.com/v1_1/dnwsss6fk/image/upload", formData);
    });
    Promise.all(
      promises,
    )
      .then((response) => {
        response.forEach((res) => {
          urlArray.push(res.data.url);
        });
        json.photos = urlArray;
        axios.post(`answers/submit/${questionID}`, json);
      })
      .then(() => setSubmit(true))
      .then(() => {
        setImageSrc([]);
        setValues({
          name: "",
          email: "",
          body: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return {
    handleInput, handleSubmit, values, submit, setSubmit, handleOnChangePhoto, imageSrc, setImageSrc, setValues,
  };
};

export default useAnswerForm;