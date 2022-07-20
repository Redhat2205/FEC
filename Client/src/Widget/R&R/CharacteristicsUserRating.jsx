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

const CharacteristicsUserRating = ({
  quality, form, setForm, userChara, setUserChara, qualID,
}) => {
  const handleRadioSelect = (e) => {
    setUserChara((old) => ({ ...old, [e.target.dataset.qualid]: e.target.value }));
    // console.log('testing!!', userChara);
    setForm((old) => ({ ...old, characteristics: userChara }));
    // console.log(form);
    // console.log(e.target.name, e.target.value, e.target.dataset.qualid);
  };
  return (
    <div className="characteristics-container" style={charContainerStyle}>
      {/* <input style={charButtonStyle} type="radio" data-qualid={qualID} name={quality} value="1" onChange={(e) => (console.log(e.target.dataset.qualid, e.target.value))}></input>
      <input style={charButtonStyle} type="radio" data-qualid={qualID} name={quality} value="2" onChange={(e) => (console.log(e.target.dataset.qualid, e.target.value))}></input>
      <input style={charButtonStyle} type="radio" data-qualid={qualID} name={quality} value="3" onChange={(e) => (console.log(e.target.dataset.qualid, e.target.value))}></input>
      <input style={charButtonStyle} type="radio" data-qualid={qualID} name={quality} value="4" onChange={(e) => (console.log(e.target.dataset.qualid, e.target.value))}></input>
      <input style={charButtonStyle} type="radio" data-qualid={qualID} name={quality} value="5" onChange={(e) => (console.log(e.target.dataset.qualid, e.target.value))}></input>
       */}

      <input style={charButtonStyle} data-qualid={qualID} type="radio" name={quality} value="1" onChange={handleRadioSelect}></input>
      <input style={charButtonStyle} data-qualid={qualID} type="radio" name={quality} value="2" onChange={handleRadioSelect}></input>
      <input style={charButtonStyle} data-qualid={qualID} type="radio" name={quality} value="3" onChange={handleRadioSelect}></input>
      <input style={charButtonStyle} data-qualid={qualID} type="radio" name={quality} value="4" onChange={handleRadioSelect}></input>
      <input style={charButtonStyle} data-qualid={qualID} type="radio" name={quality} value="5" onChange={handleRadioSelect}></input>
    </div>
  );
};

export default CharacteristicsUserRating;