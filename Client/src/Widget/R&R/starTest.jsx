import React from 'react';

const parentContainer = {
  width: '155px',
  height: '36px',
};

const testStyle = {
  // backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/30000/nahled/solid-gold-background.jpg)',
  // backgroundColor: '#ffe229',
  // background: 'linearGradient(to right,
  //   red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)';

  // background: "linear-gradient(to-right, #e66465 50%, #9198e5 50%)",
  // fontColor: 'black',
  // fontSize: '20px',
  // textAlign: 'center',
  // margin: 'auto',

  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  width: '31px',
  height: '29px',
  // padding: '0 0 0 0',
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
};

const testBG = {
  // backgroundColor: 'gold',
  // background: "linear-gradient(to-right#e66465, #9198e5)",
  // background: "linearGradient(to right, red 20%, orange 20% 40%)",

  // background: "linear-gradient(#e66465 50% 50%, #9198e5 50%)",

  backgroundImage: `linear-gradient(to right, rgb(255, 237, 39) ${'10%'}, #ffffff ${'90%'})`,
  height: '36px',
};

const singleStarOutline = {
  height: '36px',
  width: '31px',
};

const singleStarFill = {
  position: 'relative',
  display: 'inline-block',
  height: '36px',
  backgroundColor: '#333333',
};

const singleStarContainer = {
  height: '36px',
  width: '31px',
  display: 'inline-block',
};

const newStar = {
  width: '20%',
  height: '100px',
  float: 'left',
  // display: 'inline-block',
};

const StarTest = () => (
  <div style={parentContainer}>
    <div style={testBG}>
      <div style={singleStarContainer}>
        <img style={singleStarOutline} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
      </div>
      <div style={singleStarContainer}>
        <img style={singleStarOutline} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
      </div>
      <div style={singleStarContainer}>
        <img style={singleStarOutline} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
      </div>
      <div style={singleStarContainer}>
        <img style={singleStarOutline} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
      </div>
      <div style={singleStarContainer}>
        <img style={singleStarOutline} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
      </div>
    </div>

    {/* <ul>
    <img style={newStar} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    <img style={newStar} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    <img style={newStar} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    <img style={newStar} alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    </ul> */}
    {/* <img alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    <img alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    <img alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" />
    <img alt="star-outline" src="https://raw.githubusercontent.com/psfonseka/five-stars/master/dist/star.png" /> */}
  </div>
);

export default StarTest;