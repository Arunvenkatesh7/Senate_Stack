import React,{useState} from 'react'
import './form.css'
import {RiFacebookLine, RiInstagramLine, RiMailFill} from "@remixicon/react";
import axios from 'axios';


const FormElement = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      alert('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    }
  };



  return (
    <>

    <div className="form_headers">
        <div className="header">SCHEDULE A SITE VISIT: ARRANGE AN ON-SITE CONSULTATION</div>
        <div className="subheader">Need on-site expertise for your construction project? Contact us to schedule a site visit and consultation with our construction professionals.</div>
    </div>


<div class="container">
      <span class="big-circle"></span>
      <img src="conlocimg/formimg/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">
Solid foundations for a brighter future!</h3>
          <p class="text">
          Our crew + your dream = phenomenal results.
          </p>

          <div className="form_image"></div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              
                <div className="s_icon"><RiInstagramLine/></div>
                <div className="s_icon"><RiFacebookLine/></div>
                <div className="s_icon"><RiMailFill/></div>
            </div>
          </div>
        </div>

        <div class="contact-form">
        <form onSubmit={handleSubmit} autoComplete="off">
      <h3 className="title">Contact us</h3>
      <div className="input-container">
        <input
          type="text"
          name="name"
          className="input"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <label htmlFor=""></label>
        <span>Username</span>
      </div>
      <div className="input-container">
        <input
          type="email"
          name="email"
          className="input"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label htmlFor=""></label>
        <span>Email</span>
      </div>
      <div className="input-container">
        <input
          type="tel"
          name="phone"
          className="input"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <label htmlFor=""></label>
        <span>Phone</span>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="address"
          className="input"
          value={formData.address}
          onChange={handleChange}
          placeholder="Location"
        />
        <label htmlFor=""></label>
        <span>Location</span>
      </div>
      <div className="input-container">
        <select
          name="service"
          className="input"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your service</option>
          <option className="options" value="design">Design & Built</option>
          <option className="options" value="construction_management">Construction Management</option>
          <option className="options" value="project_management">Project Management</option>
          <option className="options" value="structural_repairs">Structural Repairs</option>
          <option className="options" value="repairs">Repairs and Refurbishment</option>
        </select>
        <label htmlFor=""></label>
        <span>Service</span>
      </div>
      <div className="input-container textarea">
        <textarea
          name="message"
          className="input"
          value={formData.message}
          onChange={handleChange}
          placeholder="Details here"
        ></textarea>
        <label htmlFor=""></label>
        <span>Message</span>
      </div>
      <input type="submit" value="Send" className="btn" />
    </form>



        </div>
      </div>
    </div>
    </>
  )
}

export default FormElement
