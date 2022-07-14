import React from 'react';

const testStyle = {
  // backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/30000/nahled/solid-gold-background.jpg)',
  backgroundColor: '#ffe229',
  fontColor: 'black',
  fontSize: '20px',
  textAlign: 'center',
  margin: 'auto',

  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  width: '100px',
  height: '25px',
  padding:  '0 0 0 0',
};

const starStyle = {
  margin: 'auto',
  // paddingBottom: '5px',
  // padding: '0px 93px ' /* 0.25 */
  // padding: '0px 90px ' /* 0.50 */
  // padding: '0px 87px ' /* 0.75 */
  // padding: '0px 80px ' /* 1.00 */
  // padding: '0px 73px ' /* 1.25 */
  // padding: '0px 70px', /* 1.50 */
  // padding: '0px 67px ' /* 1.75 */
  // padding: '0px 60px', /* 2.00 */
  // padding: '0px 53px', /* 2.25 */
  // padding: '0px 50px', /* 2.50 */
  // padding: '0px 47px', /* 2.75 */
  // padding: '0px 40px', /* 3.00 */
  // padding: '0px 33px', /* 3.25 */
  // padding: '0px 30px', /* 3.50 */
  // padding: '0px 27px', /* 3.75 */
  // padding: '0px 20px', /* 4.00 */
  // padding: '0px 13px', /* 4.25 */
  // padding: '0px 10px', /* 4.50 */
  // padding: '0px 7px', /* 4.75 */
  // padding: '0px 0px', /* 5.00 */
  // backgroundColor: 'rga(10,0,0,0.9)',
  // overflow: 'hidden',
}

const StarTest = () => {

  return (
  <div style={testStyle}>
    {/* <p style={starStyle}>☆☆☆☆☆</p> */}
    ☆☆☆☆☆
  </div>
  );
};

export default StarTest;