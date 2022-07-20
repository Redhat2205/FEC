import React from 'react';

const charButtonStyle = {
  display: "inline-block",
  width: '40px',
};

const charContainerStyle = {
  width: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CharacteristicsUserRating = ({ quality }) => {
  return (
    <div className="characteristics-container" style={charContainerStyle}>
      <input style={charButtonStyle} type="radio" name={quality} onChange={() => (console.log(quality))}></input>
      <input style={charButtonStyle} type="radio" name={quality} onChange={() => (console.log(quality))}></input>
      <input style={charButtonStyle} type="radio" name={quality} onChange={() => (console.log(quality))}></input>
      <input style={charButtonStyle} type="radio" name={quality} onChange={() => (console.log(quality))}></input>
      <input style={charButtonStyle} type="radio" name={quality} onChange={() => (console.log(quality))}></input>
    </div>
  );
};

export default CharacteristicsUserRating;