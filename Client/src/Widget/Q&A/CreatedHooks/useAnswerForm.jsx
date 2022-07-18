import React, { useState, useEffect } from "react";
import axios from 'axios';

const useAnswerForm = (questionID, getQa) => {
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
    const requests = [];
    for (let i = 0; i < imageSrc.length; i += 1) {
      if (formData.get('file') === undefined) {
        formData.append("file", imageSrc[i][0]);
      } else {
        formData.set("file", imageSrc[i][0]);
      }
      requests.push(axios.post("https://api.cloudinary.com/v1_1/dnwsss6fk/image/upload", formData));
    }
    axios.all(
      requests,
      // [
      //   imageSrc.forEach((image) => {
      //     if (formData.get('file') === undefined) {
      //       formData.append("file", image[0]);
      //     } else {
      //       formData.set("file", image[0]);
      //     }
      //     axios.post("https://api.cloudinary.com/v1_1/dnwsss6fk/image/upload", formData);
      //     // .then((r) => { (urlArray.push(r.data.url)); });
      //   }),
      // ],
    )
      .then((response) => {
        response.forEach((res) => {
          console.log(res.data.url);
          urlArray.push(res.data.url);
        });

        json.photos = urlArray;
        axios({
          method: 'post',
          url: `${process.env.API_Base}/qa/questions/${questionID}/answers`,
          headers: { Authorization: process.env.API_Key },
          data: json,
        }).then((r) => { console.log("PRINT RESPONSE"); console.log(r); });
      })
      .then(() => getQa())
      .then(() => setSubmit(true))
      .then(() => (setValues({
        name: "",
        email: "",
        body: "",
      })))
      .catch((err) => console.log(err));
  };

  return {
    handleInput, handleSubmit, values, submit, setSubmit, handleOnChangePhoto, imageSrc,
  };
};

export default useAnswerForm;
