import React from 'react';
import AddStarRating from './AddStarRating.jsx';

var modalStyle = {
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

var modalContentStyle = {
  width: '500px',
  backgroundColor: '#fff',
};

var modalHeaderStyle = {
  padding: '10px',
};
var modalFooterStyle = {
  padding: '10px',
  marginLeft: '15px',
};

var modalBodyStyle = {
  padding: '10px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
};

const AddReviewModal = ({ currentItem, show, setShow }) => {
  // console.log('current item⭐️', props.viewedItem.name);
  if (!show) {
    return null;
  } else {
    return (
      <div className="modal-container" style={modalStyle}>
        <div className="modal-content" style={modalContentStyle}>
          <div style={{modalHeaderStyle}}>
            <h1>Write Your Review</h1>
            <h3>About {currentItem.name}</h3>
          </div>
          <div className="modal-body" style={{modalBodyStyle}}>
            <h5 style={{marginLeft: '15px'}}>Overall rating</h5>
            <AddStarRating />
            <p style={{marginLeft: '60%'}}>
              <span>1 star - “Poor”</span><br></br>
              <span>2 stars - “Fair”</span><br></br>
              <span>3 stars - “Average”</span><br></br>
              <span>4 stars - “Good”</span><br></br>
              <span>5 stars - “Great”</span><br></br>
            </p>
            <h5 style={{marginLeft: '15px'}}>Do you recommend this product?</h5>
            <label style={{marginLeft: '15px'}} htmlFor="Yes">Yes</label>
            <input style={{marginLeft: '15px'}} type="radio" name="recommended" value="yes"></input><br></br>
            <label style={{marginLeft: '16.5px'}} htmlFor="No">No</label>
            <input style={{marginLeft: '16.39px'}} type="radio" name="recommended" value="no"></input>
            <h5>Characteristics</h5>
            <h5 style={{marginLeft: '15px'}}>Review summary</h5>
            <textarea style={{marginLeft: '15px', resize: 'none', width: '80%'}} type="text" size="50" maxLength="60" placeholder="Example: Best purchase ever!"></textarea>
            <h5 style={{marginLeft: '15px'}}>Review body</h5>
            <textarea style={{marginLeft: '15px', height: '100px', textAlign: 'none', resize: 'none', width: '80%'}} type="text" placeholder="Why did you like the product or not?" maxLength="1000" size="50"></textarea>
            <h5>Upload photos</h5>
            <h5 style={{marginLeft: '15px'}}>What is your nickname?</h5>
            <textarea style={{marginLeft: '15px', resize: 'none', width: '80%'}} type="text" size="50" maxLength="60" placeholder="Example: jackson11!"></textarea>
            <p style={{fontWeight: 'bold', marginLeft: '15px'}}>For privacy reasons, do not use your full name or email address</p>

            <h5 style={{marginLeft: '15px'}}>What is your email?</h5>
            <textarea style={{marginLeft: '15px', resize: 'none', width: '80%'}} type="text" size="50" maxLength="60" placeholder="Example: jackson11@email.com"></textarea>

          </div>
          <div className="modal-footer" style={{modalFooterStyle}}>
            <button style={{marginLeft: '15px'}}>Submit review</button><br></br>
            <button onClick={() => setShow(!show)} style={{marginLeft: '15px'}}>Close</button>
          </div>
        </div>
      </div>
    );
  }
};

export default AddReviewModal;