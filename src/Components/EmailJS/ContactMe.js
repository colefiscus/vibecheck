import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        name="from_name"
        placeholder="from name"
        value={toSend.from_name}
        onChange={handleChange} 
      />
      <input 
        name="to_name"
        placeholder="to name"
        value={toSend.to_name}
        onChange={handleChange} 
      />
      <input 
        name="message"
        placeholder="Your message"
        value={toSend.message}
        onChange={handleChange} 
      />
      <input 
        name="reply_to"
        placeholder="Your email"
        value={toSend.reply_to}
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactMe;