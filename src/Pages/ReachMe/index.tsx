import React, { useState } from 'react';
import './index.css';

type ReachMeProps = {

}

const ReachMePropsDefault = {

}

const validateEmail = (email : string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const ReachMe = ({ }: ReachMeProps): JSX.Element => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm(form => {
      if (!event || !event.target)
        return form

      return {
        ...form,
        [event.target.name]: event.target.value
      }
    })
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    var erroneous = false

    if (form.name === '') {
      erroneous = true
      setErrors(errors => ({
        ...errors,
        name: 'Name cannot be empty'
      }))
    }

    if (form.email === '') {
      erroneous = true
      setErrors(errors => ({
        ...errors,
        email: 'Email cannot be empty'
      }))
    } else if (!validateEmail(form.email)) {
      erroneous = true
      setErrors(errors => ({
        ...errors,
        email: 'That email is not valid'
      }))
    }

    if (form.message === '') {
      erroneous = true
      setErrors(errors => ({
        ...errors,
        message: 'Message cannot be empty'
      }))
    }
  }

  return (
    <div className="reach-me">
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={onValueChange}
          placeholder="Name"
          value={form.name} />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={onValueChange}
          placeholder="Email"
          value={form.email} />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          onChange={onValueChange}
          placeholder="Message"
          value={form.message} />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

ReachMe.defaultProps = ReachMePropsDefault

export default ReachMe;



