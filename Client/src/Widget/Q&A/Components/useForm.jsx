import React, { useState, useEffect } from "react";
import axios from 'axios';

const useForm = (productID, getQa) => {
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    body: "",
    product_id: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const json = values;
    json.product_id = productID;
    console.log(json);
    axios({
      method: 'post',
      url: `${process.env.API_Base}/qa/questions`,
      headers: { Authorization: process.env.API_Key },
      data: json,
    })
      .then(() => getQa())
      .catch((err) => console.log(err));
  };

  return {
    handleInput, handleSubmit, values,
  };
};
export default useForm;