const axios = require('axios');
require('dotenv').config();

const getProduct = (req, res) => {
  const productID = req.url.slice(-5);
  // console.log(productID);
  axios({
    method: 'GET',
    url: `${process.env.API_Base}/products/${productID}`,
    headers: { Authorization: process.env.API_Key },
  })
    .then((productData) => {
      // console.log('productData: ', productData.data);
      res.status(200).send(productData.data);
    })
    .catch((err) => {
      // console.log('error in server when getting product: ', err);
      res.status(500).send(err);
    });
};

const getReviews = (req, res) => {
  const productID = req.url.slice(-5);
  axios({
    method: 'GET',
    url: `${process.env.API_Base}/reviews`,
    headers: { Authorization: process.env.API_Key },
    params: {
      count: '9999',
      product_id: productID,
    },
  })
    .then((reviewsData) => {
      // console.log('reviews: ', reviewsData.data);
      res.status(200).send(reviewsData.data);
    })
    .catch((err) => {
      // console.log('error in server when getting reviews: ', err);
      res.status(500).send(err);
    });
};
const getQA = (req, res) => {
  const productID = req.url.slice(-5);
  console.log(productID);
  axios({
    method: 'get',
    url: `${process.env.API_Base}/qa/questions`,
    headers: { Authorization: process.env.API_Key },
    params: {
      product_id: productID,
      count: '9999',
    },
  })
    .then((qAData) => {
      res.send(qAData.data);
    })
    .catch((err) => console.log(err));
};
const reportAnswer = (req, res) => {
  const answerID = req.url.slice(-7);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/answers/${answerID}/report`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204);
    })
    .catch((err) => console.log(err));
};
const reportQuestion = (req, res) => {
  const questionID = req.url.slice(-6);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/questions/${questionID}/report`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204);
    })
    .catch((err) => console.log(err));
};
const helpfulAnswer = (req, res) => {
  const answerID = req.url.slice(-7);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/answers/${answerID}/helpful`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204);
    })
    .catch((err) => console.log(err));
};
const helpfulQuestion = (req, res) => {
  const questionID = req.url.slice(-6);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/questions/${questionID}/helpful`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204);
    })
    .catch((err) => console.log(err));
};
module.exports = { getProduct, getReviews, getQA, reportAnswer, reportQuestion, helpfulQuestion, helpfulAnswer };