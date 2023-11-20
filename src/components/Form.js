import React from "react";
// import "./styles/ReservationsContent.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  telephone: yup
    .string()
    .required("Telephone is a required field!")
    .matches(
      /^[0-9\-\+]{9,15}$/,
      "Phone number must match the form 0771234567 or +0771234567"
    ),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date and time!"),
});

function Form({ onFormConfirmed }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = data => {
    onFormConfirmed(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
        <div className='field'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            placeholder='Jane Hopper'
            name='name'
            {...register("name")}
          />
          <span className='error-message'>{errors.name?.message}</span>
        </div>
        <div className='field'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='email@email.com'
            name='email'
            {...register("email")}
          />
          <span className='error-message'>{errors.email?.message}</span>
        </div>
        <div className='field'>
          <label htmlFor='telephone'>Telephone</label>
          <input
            type='tel'
            placeholder='0771234567'
            name='telephone'
            {...register("telephone")}
          />
          <span className='error-message'>{errors.telephone?.message}</span>
        </div>

        <div className='field occasion'>
          <label htmlFor='occasion'>Occasion (optional)</label>
          <div className='options'>
            <select name='occasion' {...register("occasion")}>
              <option value='select'>Select occasion</option>
              <option value='birthday'>Birthday</option>
              <option value='engagement'>Engagement</option>
              <option value='anniversary'>Anniversary</option>
            </select>
          </div>
        </div>
        <div className='field guest'>
          <label htmlFor='guests'>Guests</label>
          <input
            type='number'
            placeholder='2'
            name='guests'
            {...register("guests")}
          />
          <span className='error-message'>{errors.guests?.message}</span>
        </div>
        <div className='field'>
          <label htmlFor='date'>Date & Time</label>
          <input type='datetime-local' name='date' {...register("date")} />
          <span className='error-message'>{errors.date?.message}</span>
        </div>
        <button className='reserve-btn' type='submit'>
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
