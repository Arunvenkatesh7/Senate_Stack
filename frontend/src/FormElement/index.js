import React from 'react'
import './form.css'
import {RiFacebookLine, RiInstagramLine, RiMailFill} from "@remixicon/react";

const FormElement = () => {
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
       
          

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder="Username"/>
              <label for=""></label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder="Email"/>
              <label for=""></label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" placeholder="phone" />
              <label for=""></label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder="Message here"></textarea>
              <label for=""></label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default FormElement
