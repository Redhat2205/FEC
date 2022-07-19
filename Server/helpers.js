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
