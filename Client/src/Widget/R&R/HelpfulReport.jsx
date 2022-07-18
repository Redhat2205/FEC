/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const axios = require('axios');

// click handler REPORT
const HelpfulReport = ({ reviewID, helpfulness }) => {
  let reported = false;
  let helpful = false;
  const reportReview = () => {
    if (!reported) {
      console.log(`report review ${reviewID}`);
      reported = true;
      axios({
        // eslint-disable-next-line camelcase
        method: 'put',
        url: `${process.env.API_Base}/reviews/${reviewID}/report`,
        headers: { Authorization: process.env.API_Key },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log('🟥There was an error reporting review', err);
        });
    }
  };

  // click handler HELPFUL
  const helpfulReview = () => {
    if (!helpful) {
      helpful = true;
      console.log(`mark review ${reviewID} helpful`);
      axios({
        // eslint-disable-next-line camelcase
        method: 'put',
        url: `${process.env.API_Base}/reviews/${reviewID}/helpful`,
        headers: { Authorization: process.env.API_Key },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log('🟥There was an error marking review helpful', err);
        });
    }
  };

  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        Helpful?
        <span style={{ textDecoration: 'underline', marginLeft: '5px', marginRight: '3.5px' }} onClick={() => helpfulReview()}>Yes</span>
        <span>{`(${helpfulness})`}</span>
      </div>
      <div style={{ display: 'inline-block', marginLeft: '10px', marginRight: '10px' }}>|</div>
      {reported ? <div style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>Reported</span></div> : <div style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }} onClick={() => reportReview()}>Report</span></div>}
      {/* // {!reported ? <div style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }} onClick={() => helpfulReview()}>Report</span></div>} */}
    </div>
  );
};

export default HelpfulReport;