import React, { useState } from "react";
import "./styles/ReservationsContent.css";
import SubmitImage from "./assets/submit-successfully.png";
import Form from "./Form";

function ReservationsPage() {
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState(null);

  const onFormConfirmed = details => {
    setIsSubmittedForm(true);
    setConfirmationDetails(details);
  };

  return (
    <div className='res-content-wrapper'>
      <div className='res-content-container'>
        <div className='text'>
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className='form'>
          {!isSubmittedForm ? (
            <>
              <h1>Reserve a Table</h1>
              <p>
                Please fill in and submit form to book your reservation at
                Little Lemon.
              </p>
              <Form onFormConfirmed={onFormConfirmed} />
            </>
          ) : (
            <>
              <img src={SubmitImage} alt='submit icon' className='submitIcon' />
              <h1>Booking created successfully! </h1>
              <p>Please check your reservation details:</p>
              <ul>
                {confirmationDetails &&
                  Object.entries(confirmationDetails).map(([key, value]) => {
                    if (key === "date") {
                      value = value.replace("T", " ");
                    }
                    return (
                      <li key={key}>
                        <span>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        : {value}
                      </li>
                    );
                  })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;
