import React, { useState } from 'react';
import axios from 'axios';
import AddStarRating from './AddStarRating.jsx';
import CharacteristicsUserRating from './CharacteristicsUserRating.jsx';
import ImgUpload from './ImgUpload.jsx';

// styles
const left15PX = {
  marginLeft: '15px',
};

const radioLabels = { width: '20%', display: 'inline-block', textAlign: 'center' };

const radioWrapper = { width: '100%', marginTop: '10px', marginBottom: '10px' };

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
  // width: '500px',
  width: '80%',
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
  borderTop: '1px solid #fff',
  borderBottom: '1px solid #fff',
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
              <h5 style={{ marginLeft: '15px' }}>Overall rating<span style={{fontWeight: '100', color: 'red'}}> *required</span></h5>
              <div style={{ marginLeft: '15px' }}>
                <AddStarRating form={form} setForm={setForm}/>
                <p style={{display: 'inline-block', width: '85%'}}>
                  <span>1 star - “Poor”</span><br></br>
                  <span>2 stars - “Fair”</span><br></br>
                  <span>3 stars - “Average”</span><br></br>
                  <span>4 stars - “Good”</span><br></br>
                  <span>5 stars - “Great”</span><br></br>
                </p>
              </div>
              <h5 style={left15PX}>Do you recommend this product?<span style={{fontWeight: '100', color: 'red'}}> *required</span></h5>
              <div>
                <div>
                  <label style={{ display: 'inline-block', marginLeft: '15px', width: '4%', textAlign: 'center' }} htmlFor="Yes">Yes</label>
                  <input  type="radio" name="recommended" value="yes" onChange={(e) => setForm(old => ({...old, recommend: true}))}></input><br></br>
                </div>
                <div>
                  <label style={{ display: 'inline-block', marginLeft: '15px', width: '4%', textAlign: 'center' }} htmlFor="No">No</label>
                  <input  type="radio" name="recommended" value="no" onChange={(e) => setForm(old => ({...old, recommend: false}))}></input>
                </div>
              </div>
              <h5 style={left15PX}>Characteristics<span style={{fontWeight: '100', color: 'red'}}> *required</span></h5>
              <div>
                <ul>
                  {mappings.map((property, index, coll) => (index % 2 === 0 ? (
                    <div style={{borderBottom: 'solid 1px #222222', marginBottom: '5px'}}>
                      <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {property}
                      </div>
                      {property === 'Size' && (<div style={radioWrapper}>
                        <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                        <label style={radioLabels}>A size too small</label>
                        <label style={radioLabels}>1/2 size too small</label>
                        <label style={radioLabels}>Perfect</label>
                        <label style={radioLabels}>1/2 size too big</label>
                        <label style={radioLabels}>A size too wide</label>
                      </div>)}
                      {property === 'Width' && (<div style={radioWrapper}>
                        <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                        <label style={radioLabels}>Too narrow</label>
                        <label style={radioLabels}>Slightly narrow</label>
                        <label style={radioLabels}>Perfect</label>
                        <label style={radioLabels}>Slightly wide</label>
                        <label style={radioLabels}>Too wide</label>
                      </div>)}
                      {property === 'Comfort' && (<div style={radioWrapper}>
                        <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                        <label style={radioLabels}>Uncomfortable</label>
                        <label style={radioLabels}>Slightly uncomfortable</label>
                        <label style={radioLabels}>Ok</label>
                        <label style={radioLabels}>Comfortable</label>
                        <label style={radioLabels}>Perfect</label>
                      </div>)}
                      {property === 'Quality' && (<div style={radioWrapper}>
                        <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                        <label style={radioLabels}>Poor</label>
                        <label style={radioLabels}>Slightly uncomfortable</label>
                        <label style={radioLabels}>What I expected</label>
                        <label style={radioLabels}>Pretty great</label>
                        <label style={radioLabels}>Perfect</label>
                      </div>)}
                      {property === 'Length' && (<div style={radioWrapper}>
                        <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                        <label style={radioLabels}>Runs short</label>
                        <label style={radioLabels}>Runs slightly short</label>
                        <label style={radioLabels}>Perfect</label>
                        <label style={radioLabels}>Runs slightly long</label>
                        <label style={radioLabels}>Runs long</label>
                      </div>)}
                      {property === 'Fit' && (<div style={radioWrapper}>
                        <CharacteristicsUserRating quality={property} qualID={coll[(index + 1)]} form={form} setForm={setForm} userChara={userChara} setUserChara={setUserChara} />
                        <label style={radioLabels}>Runs tight</label>
                        <label style={radioLabels}>Runs slightly tight</label>
                        <label style={radioLabels}>Perfect</label>
                        <label style={radioLabels}>Runs slightly long</label>
                        <label style={radioLabels}>Runs long</label>
                      </div>)}
                    </div>
                  )
                    : null))}
                </ul>
              </div>
              <h5 style={left15PX}>Review summary</h5>
              <textarea style={ {marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: Best purchase ever!" onChange={(e) => setForm(old => ({...old, summary: e.target.value}))}></textarea>
              <h5 style={left15PX}>Review body<span style={{fontWeight: '100', color: 'red'}}> *required</span></h5>
              <textarea style={{ marginLeft: '15px', height: '100px', textAlign: 'none', resize: 'none', width: '80%' }} type="text" placeholder="Why did you like the product or not?" maxLength="1000" size="50" onChange={(e) => setForm(old => ({...old, body: e.target.value}))}></textarea>
              <h5>Upload photos</h5>
              <ImgUpload form={form} setForm={setForm} userPhotos={userPhotos} setUserPhotos={setUserPhotos} />
              <h5 style={left15PX}>What is your nickname?<span style={{fontWeight: '100', color: 'red'}}> *required</span></h5>
              <textarea style={{ marginLeft: '15px', resize: 'none', width: '80%' }} type="text" size="50" maxLength="60" placeholder="Example: jackson11!" onChange={(e) => setForm(old => ({...old, name: e.target.value}))}></textarea>
              <p style={{ fontWeight: 'bold', marginLeft: '15px' }}>For privacy reasons, do not use your full name or email address</p>

              <h5 style={left15PX}>What is your email?<span style={{fontWeight: '100', color: 'red'}}> *required</span></h5>
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