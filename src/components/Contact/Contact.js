import React, { useState } from 'react'
import './Contact.css'
import validator from 'validator'
import axios from 'axios';
import 'animate.css';
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  const initialData = {
    email: "",
    name: "",
    reason: "",
    message: "",
  }
  const [mailDetails, setMailDetails] = useState(initialData);
  const [error, setError] = useState(false)
  const [created, setCreated] = useState(false)
  const [responseError, setResponseError] = useState(false)


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMailDetails(values => ({ ...values, [name]: value }))
  }

  const submitResponse = () => {
    if (validator.isEmail(mailDetails.email) && validator.isAlpha(mailDetails.name.split(" ").join(""))) {
      axios.post("https://sheetdb.io/api/v1/ykdi2ar7p16k4",
        mailDetails,
        {
          headers: {
            'Authorization': 'Bearer s4cyb7gydb88if1bylqxtj95ybk3nvr7annfgln6'
          }
        }
      ).then(res => {
        if (res.status === 201) {
          setCreated(true);
          setTimeout(() => setCreated(false), 2000)
          setMailDetails(initialData)
        }
      })
        .catch(err => {
          setResponseError(true);
          setTimeout(() => {
            setResponseError(false);
          }, 2000);
        })
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000)
    }
  }
  return (
    <section className='section-4 py-5' id='contact'>
      <div className='container'>
      {error &&
        <div className="alert animate__animated animate__fadeIn alert-danger alert-box" role="alert">
          Enter Valid Email or Name
        </div>}

      {created &&
        <div className="alert animate__animated animate__fadeIn alert-success alert-box" role="alert">
          Mail Sent!
        </div>}

        {responseError &&
        <div className="alert animate__animated animate__fadeIn alert-info alert-box" role="alert">
          An Error Occured!
        </div>}

      <h1 className='text-left c-primary'>Contact</h1>
      <form className=''>
        <div className="mb-3 m-auto">
          <input type="text" className="form-control" id="name" placeholder='Name' name='name' value={mailDetails.name} onChange={handleChange} />
        </div>
        <div className="mb-3 m-auto">
          <input type="email" className="form-control" required id="email" placeholder='Email' name='email' value={mailDetails.email} onChange={handleChange} />
        </div>
        <div className="mb-3 m-auto">
          <input type="text" className="form-control" id="reason" required placeholder='Reason for Contact' name='reason' value={mailDetails.reason} onChange={handleChange} />
        </div>
        <div className="mb-3 m-auto">
          <textarea className="form-control" id="message" rows="3" required placeholder='Message' name='message' value={mailDetails.message} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3 m-auto">
          <a className='button-18' id="contact-btn" onClick={submitResponse}> <IoMdSend className='me-2'/> <span>Contact Me</span></a>
        </div>
      </form>
      </div>
      
    </section>
  )
}

export default Contact