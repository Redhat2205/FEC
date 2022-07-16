import React, { useState, useEffect } from "react";

const useForm = (validate) => {
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    body: "",
  });
  const handleInput = (e) => {
    //
  };
  const handleSubmit = (e) => {};
  return {
    handleInput, handleSubmit, values, errors,
  };
};