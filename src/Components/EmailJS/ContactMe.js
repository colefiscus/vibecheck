import React, { useState } from 'react';
import { send } from 'emailjs-com';
import styled from 'styled-components';

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_8r1wilv',
      'template_plsfqif',
      toSend,
      'user_kSU4A4CIGbdNQtHJZBCs5'
    )
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed...', err)
      })
  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <input 
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange} 
        />
      </InputWrapper>
      <InputWrapper>
        <input 
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange} 
        />
      </InputWrapper>
      <InputWrapper>
        <input 
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange} 
        />
      </InputWrapper>
      <InputWrapper>
        <input 
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange} 
        />
      </InputWrapper>
      <button type="submit">Submit</button>
    </Form>
  )
}

const Form = styled.form`

`;

const InputWrapper = styled.div`
  border: 3px solid deeppink;
`;

export default ContactMe;