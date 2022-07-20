import React, { useState, useEffect } from "react";
import axios from 'axios';

const useQuestionForm = (productID, getQa) => {
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    body: "",
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
    axios.post(`questions/submit/`, json);
    setSubmit(true);
    setValues({
      name: "",
      email: "",
      body: "",
      product_id: "",
    });
  };

  return {
    handleInput, handleSubmit, values, submit, setSubmit, setValues,
  };
};
export default useQuestionForm;
