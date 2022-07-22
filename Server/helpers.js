const axios = require('axios');
require('dotenv').config();

exports.getProduct = (req, res) => {
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

exports.getReviews = (req, res) => {
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
exports.getQA = (req, res) => {
  const productID = req.url.slice(-5);
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
exports.reportAnswer = (req, res) => {
  const answerID = req.url.slice(-7);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/answers/${answerID}/report`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
};
exports.reportQuestion = (req, res) => {
  const questionID = req.url.slice(-6);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/questions/${questionID}/report`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
};
exports.helpfulAnswer = (req, res) => {
  const answerID = req.url.slice(-7);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/answers/${answerID}/helpful`,
    headers: { Authorization: process.env.API_Key },
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
};
exports.helpfulQuestion = (req, res) => {
  const questionID = req.url.slice(-6);
  axios({
    method: 'put',
    url: `${process.env.API_Base}/qa/questions/${questionID}/helpful`,
    headers: { Authorization: process.env.API_Key },
  })
    .then((r) => {
      // const json = CircularJSON.stringify(response);
      res.status(204).send();
    })
    .catch((err) => { console.log(err); res.status(500).send(err); });
};
exports.submitQuestion = (req, res) => {
  const params = req.body;
  axios({
    method: 'post',
    url: `${process.env.API_Base}/qa/questions`,
    headers: { Authorization: process.env.API_Key },
    data: params,
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
};
exports.submitAnswer = (req, res) => {
  const params = req.body;
  const questionID = req.url.slice(-6);
  axios({
    method: 'post',
    url: `${process.env.API_Base}/qa/questions/${questionID}/answers`,
    headers: { Authorization: process.env.API_Key },
    data: params,
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
};

exports.getStyles = (req, res) => {
  const productID = req.url.slice(-12, -7);
  axios({
    method: 'GET',
    url: `${process.env.API_Base}/products/${productID}/styles`,
    headers: { Authorization: process.env.API_Key },
  })
    .then((stylesData) => {
      res.status(200).send(stylesData.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
