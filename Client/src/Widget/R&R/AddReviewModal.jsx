import React, { useState } from 'react';
import AddStarRating from './AddStarRating.jsx';
import CharacteristicsUserRating from './CharacteristicsUserRating.jsx';

// styles
const left15PX = {
  marginLeft: '15px',
};

const modalStyle = {
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
};

const modalContentStyle = {
  width: '500px',
  backgroundColor: '#fff',
};

const modalHeaderStyle = {
  padding: '10px',
};

const modalFooterStyle = {
  padding: '10px',
  marginLeft: '15px',
};

const modalBodyStyle = {
  padding: '10px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
};

// component
const AddReviewModal = ({
  currentItem, show, setShow, characteristics,
}) => {
  const charac = Object.entries(characteristics);

  // charac.forEach((prprty) => console.log(prprty[1].id));
  const mappings = [];

  const bareQualityIds = {};

  charac.forEach((key) => {
    mappings.push(key[0]);
    mappings.push(key[1].id);
    // const kvp = {};
    // kvp[key[0]] = key[1].id;
    // mappings.push(kvp);
    bareQualityIds[key[1].id] = 0;
  });

  console.log(mappings);

  // state/hooks
  const [userChara, setUserChara] = useState(bareQualityIds);
  const [userSum, setUserSum] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [userBody, setUserBody] = useState('');
  const [userRec, setUserRec] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [form, setForm] = useState({
    id: currentItem.id,
    rating: userRating,
    summary: userSum,
    body: userBody,
    recommend: userRec,
    name: userName,
    email: userEmail,
    photos: [],
    characteristics: userChara,
  });

  if (!show) {
    return null;
  }
  return (
    <div className="modal-container" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <div style={{ modalHeaderStyle }}>
          <h1>Write Your Review</h1>
          <h3 style={left15PX}>{`About ${currentItem.name}`}</h3>
        </div>
        <div className="modal-body" style={modalBodyStyle}>
          <h5 style={{ marginLeft: '15px' }}>Overall rating</h5>
          <AddStarRating form={form} setForm={setForm} />
          <p style={{ marginLeft: '60%' }}>
            <span>1 star - “Poor”</span><br></br>
            <span>2 stars - “Fair”</span><br></br>
            <span>3 stars - “Average”</span><br></br>
            <span>4 stars - “Good”</span><br></br>
            <span>5 stars - “Great”</span><br></br>
          </p>
          <h5 style={left15PX}>Do you recommend this product?</h5>
          <label style={left15PX} htmlFor="Yes">Yes</label>
          <input style={left15PX} type="radio" name="recommended" value="yes" onChange={(e) => setForm(old => ({...old, recommend: true}))}></input><br></br>
          <label style={{ marginLeft: '16.5px' }} htmlFor="No">No</label>
          <input style={{ marginLeft: '16.39px' }} type="radio" name="recommended" value="no" onChange={(e) => setForm(old => ({...old, recommend: false}))}></input>
          <h5>Characteristics</h5>
          <div>
            <ul>
              {/* {mappings.map((property, index) => (
                <div key={index}>
                  <div>
                    {property[0]}
                  </div>
                  <CharacteristicsUserRating id={property[1]} quality={property[0]} />
                </div>
              ))} */}
              {mappings.map((property, index, coll) => (index % 2 === 0 ? (
                <div>
                  <div>
                    {property}
                  </div>
                  {/* <CharacteristicsUserRating quality={property} id={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} /> */}
                  <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                </div>
              )
                : null))}
            </ul>
          </div>
          <h5 style={left15PX}>Review summary</h5>
          <textarea style={ {marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: Best purchase ever!" onChange={(e) => setForm(old => ({...old, summary: e.target.value}))}></textarea>
          <h5 style={left15PX}>Review body</h5>
          <textarea style={{ marginLeft: '15px', height: '100px', textAlign: 'none', resize: 'none', width: '80%' }} type="text" placeholder="Why did you like the product or not?" maxLength="1000" size="50" onChange={(e) => setForm(old => ({...old, body: e.target.value}))}></textarea>
          <h5>Upload photos</h5>
          <h5 style={left15PX}>What is your nickname?</h5>
          <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11!" onChange={(e) => setForm(old => ({...old, name: e.target.value}))}></textarea>
          <p style={{ fontWeight: 'bold', marginLeft: '15px' }}>For privacy reasons, do not use your full name or email address</p>

          <h5 style={left15PX}>What is your email?</h5>
          {/* <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(e) => setUserEmail(e.target.value)}></textarea> */}
          <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(e) => setForm(old => ({...old, email: e.target.value}))}></textarea>

        </div>
        <div className="modal-footer" style={modalFooterStyle}>
          <button style={left15PX}>Submit review</button><br></br>
          <button onClick={() => setShow(!show)} style={left15PX}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;