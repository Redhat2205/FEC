import React, { useState } from 'react';
import AddStarRating from './AddStarRating.jsx';
import CharacteristicsUserRating from './CharacteristicsUserRating.jsx';
import ImgUpload from './ImgUpload.jsx';
import axios from 'axios';

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
  height: '90%',
  overflow: 'auto',
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
  // height: '500px',
  height: '500px',
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

  // console.log(mappings);

  // state/hooks
  const [userChara, setUserChara] = useState(bareQualityIds);
  const [userSum, setUserSum] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [userBody, setUserBody] = useState('');
  const [userRec, setUserRec] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userPhotos, setUserPhotos] = useState([]);
  const [submittedModal, setSubmittedModal] = useState(false);
  const urlArray = [];
  const [modalDone, setModalDone] = useState(false);

  if (currentItem) {
    const [form, setForm] = useState({
      product_id: currentItem.id,
      rating: userRating,
      summary: userSum,
      body: userBody,
      recommend: userRec,
      name: userName,
      email: userEmail,
      photos: userPhotos,
      characteristics: userChara,
    });

    // submission handler
    const submitHandler = () => {
      let formValidated = false;

      let validated = {
        rating: false,
        recommend: false,
        characteristics: false,
        body: false,
        name: false,
        email: false,
      };

      // rating validation
      if (form.rating > 0) {
        validated.rating = true;
        console.log('rating validated');
      }

      // recommend validation
      if (form.recommend) {
        validated.recommend = true;
        console.log('recommend validated');
      }

      // characteristics validation
      if (Object.values(userChara).filter(value => value > 0).length === Object.values(userChara).length) {
        validated.characteristics = true;
        console.log('characteristics validated');
      }

      // body validation
      if (form.body.length > 50) {
        validated.body = true;
        console.log('body validated');
        // console.log('review body must be at least 50 characters!');
      }

      // name validation
      if (form.name) {
        validated.name = true;
        console.log('name validated');
      }

      // email validation
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        validated.email = true;
        console.log('email validated');
      }

      // final validation before submission
      if (Object.values(validated).filter((value) => value === true).length === 6) {
        formValidated = true;
        console.log('entire form is validated!');
      }

      // testing final validation
      // console.log(Object.values(validated).filter((value) => value === true).length);
      // console.log(Object.values(validated).length);

      // form is fully validated!
      if (formValidated) {
        console.log('can submit form!', form);
        const formData = new FormData();
        formData.append('upload_preset', 'fecRnR');
        // get image urls from cloudinary and set new photo array state
        // iterate through array of images
        const promises = userPhotos.map((photo) => {
          formData.append('file', photo[0]);
          return axios.post('https://api.cloudinary.com/v1_1/ratingsredhat/image/upload', formData);
            // .then((res) => console.log(res.data.url))
            // .catch((err) => console.log('nah bro', err));
        });
        // console.log(promises);
        Promise.all(promises)
          .then((obj) => {
            console.log(obj);
            obj.forEach((image) => urlArray.push(image.data.url));
            // urlArray.push()
            // res.forEach(obj => urlArray.push(obj.data.url));
          })
          .then(() => {
            console.log(urlArray);
            // set state of photo urls
            setUserPhotos(() => (urlArray));
            setForm((old) => ({ ...old, photos: urlArray }));
          })
          .then(() => {
            // const testFormData = new FormData();
            // for (var key in form) {
            //   testFormData.append(key, form[key]);
            // }
            const pizzaSlice = form;
            JSON.stringify(pizzaSlice);
            // console.log('bruh🟣', form);
            console.log('characteristics value????', form.characteristics, typeof form.characteristics);
            axios({
              method: 'post',
              url: `${process.env.API_Base}/reviews`,
              headers: { Authorization: process.env.API_Key },
              data: {
                product_id: form.product_id,
                rating: form.rating,
                name: form.name,
                body: form.body,
                summary: form.summary,
                email: form.email,
                recommend: form.recommend,
                characteristics: form.characteristics,
                photos: form.photos,
              },
            })
              .then((res) => { console.log(res.status); })
              .catch((err) => { console.log(err); });
            // console.log('🍕', pizzaSlice);
            // axios.post(`${process.env.API_Base}/reviews`, pizzaSlice, { headers: { Authorization: process.env.API_Key } })
            //   .then((res) => {
            //     // res.status === 201 ? console.log('review posted successfully!') : console.log('review did not return a 201!')
            //     if (res.status === 201) {
            //       console.log('review successfully posted');
            //     }
            //   })
            //   .catch((err) => {
            //     console.log('🟥There was an error posting user review!', err.config);
            //     // console.log('this was sent over👋', err.config.data);
            //   });
          });
        // console.log(urlArray);
        setSubmittedModal((old) => !old);
        // submit form to API
      }
    };
    if (!show) {
      return null;
    }
    if (!submittedModal) {
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
              <ImgUpload form={form} setForm={setForm} userPhotos={userPhotos} setUserPhotos={setUserPhotos} />
              <h5 style={left15PX}>What is your nickname?</h5>
              <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11!" onChange={(e) => setForm(old => ({...old, name: e.target.value}))}></textarea>
              <p style={{ fontWeight: 'bold', marginLeft: '15px' }}>For privacy reasons, do not use your full name or email address</p>

              <h5 style={left15PX}>What is your email?</h5>
              {/* <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(e) => setUserEmail(e.target.value)}></textarea> */}
              <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(e) => setForm(old => ({...old, email: e.target.value}))}></textarea>
              <div className="modal-footer" style={modalFooterStyle}>
                <button style={left15PX} onClick={submitHandler}>Submit review</button><br></br>
                <button onClick={() => setShow(!show)} style={left15PX}>Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <div style={modalBodyStyle}>
              <p>Review Submitted!</p>
              <button onClick={(e) => {setModalDone((old) => (!old)); setSubmittedModal((old) => (!old)); setShow((old) => (!old))}}>✕</button>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default AddReviewModal;