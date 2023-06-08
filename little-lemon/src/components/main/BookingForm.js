import React, { useState } from 'react';

//FIXME:import { useNavigate } from 'react-router-dom';
//FIXME:import PropTypes from 'prop-types'


function BookingForm(props) {
  return (
      <main>
          <p className="desc-text form-desc">
              lease fill in the form below
              accurately to enable us serve you
              nicely.{' '}
          </p>
          <form onSubmit='{handleSubmit}'>
          <div className="seperate">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" value='{formData.firstName}' onChange='{handleFormChange}' required />
          </div>
          <div className="seperate">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" value='{formData.lastName}' onChange='{handleFormChange}' required />
          </div>
          <div className="seperate">
            <label htmlFor="contact-number">Contact Number</label>
            <input type="text" id="contact-number" name="contactNumber" placeholder="123-456-7890"
            value='{formData.contactNumber}' onChange='{handleFormChange} '
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          </div>
          <div className="seperate date-time">
            <div className="seperate-child">
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" name="date" value='{formData.date} 'onChange='{handleDateChange}' required min='{currentDate}'/>
            </div>
            <div className="seperate-child">
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time " name="time" value='{formData.time}' onChange='{handleFormChange}' required>
                {/* {options} */}
              </select>
            </div>
          </div>
          <div className="seperate guests-occasion">
            <div className="seperate-child">
              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value='{formData.noOfGuests}' onChange='{handleFormChange}'/>
            </div>
            <div className="seperate-child">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" required value='{formData.occasion}' onChange='{handleFormChange}'>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>
          <input className="submit" type="submit" value="Reserve" aria-label="submit button"/>
      </form>
      </main>
  );
}

BookingForm.propTypes = {};

export default BookingForm;
