import React from 'react';

const tutorial = {

};

// const parentDiv = {
//   width: '100%',
//   height: '100%',
// };

// const toBeClipped = {
//   width: '80%',
//   height: '40%',
//   position: 'relative',
//   backgroundColor: '#bbb',
//   backgroundSize: 'cover',
// };

// const clippers = {
//   position: 'absolute',
// };

const MaskTest = () => {
  return (
    // <div style={parentDiv}>
    //   <div style={toBeClipped}>
    //     <div style={clippers}></div>
    //   </div>
    // </div>

    // <div style={tutorial}>
    //   {/* <svg viewBox=" 0 0 100 100" xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/800px-Five-pointed_star.svg.png" ></svg> */}
    //   <svg viewBox=" -5 -5 10 10"  xmlns="http://www.w3.org/2000/svg">
    //     <box x="0" y="0" width="2%" height="2%" />
    //   </svg>
    // </div>

    <div>
      <div style={{ height: '10px',}}>
        <svg viewBox=" 10 10 5000 5000">
          {/* <circle cs={50} cy={50} r={50} fill="green" /> */}
          <polygon points = "100,10 40,180 190,60 10,60 160,180" width="50px" height="100px" fill = "gold"/>
        </svg>
      </div>
      <div style={{ height: '1px',}}>
        <svg viewBox=" -1150 -35 3000 3000">
          {/* <circle cs={50} cy={50} r={50} fill="green" /> */}
          <polygon points = "100,10 40,180 190,60 10,60 160,180" width="10px" height="10px" fill = "gold"/>
        </svg>
      </div>
      <div style={{ height: '1px',}}>
        <svg viewBox=" 50 -310 7000 7000">
          {/* <circle cs={50} cy={50} r={50} fill="green" /> */}
          <polygon points = "100,10 40,180 190,60 10,60 160,180" width="10px" height="10px" fill = "gold"/>
        </svg>
      </div>
    </div>
  );
};

export default MaskTest;