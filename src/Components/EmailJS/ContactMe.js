import React, { useState } from 'react';
import { send } from 'emailjs-com';
import styled from 'styled-components';

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    subject: '',
    from_name: '',
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
    clearInputs();
  }

  const clearInputs = () => {
    setToSend({
      subject: '',
      from_name: '',
      message: '',
      reply_to: ''
    })
  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Label>Your Name: </Label>
        <Input 
          required
          type="text"
          name="from_name"
          placeholder="Terd Ferguson"
          value={toSend.from_name}
          onChange={handleChange} 
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="subject-select">Subject: </Label>
        <select 
          required
          id="subject-select" 
          name="subject" 
          value={toSend.subject} 
          onChange={handleChange}
        >
          <option value="Idea">Idea</option>
          <option value="Bug">Bug</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Friendly Hello">Friendly Hello</option>
        </select>
      </InputWrapper>
      <InputWrapper>
        <Label>Your Message: </Label>
        <Input
          required
          type="text"
          name="message"
          placeholder="RIP to the great Norm Macdonald"
          value={toSend.message}
          onChange={handleChange} 
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Your Email: </Label>
        <Input
          required
          type="email"
          name="reply_to"
          placeholder="podiatrist@mothmail.com"
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
  
`;

const Label = styled.label`
  font-family: 'Josefin Slab';
  font-weight: 100;
  font-style: italic;
  font-size: ${18/14}rem;
`;

const Input = styled.input`
  margin: 8px 0px;
  width: 100%;
  font-size: ${18/14}rem;
  font-family: 'Telex';
  font-style: italic;
  color: hsl(0, 0%, 0%);

  &::placeholder {
    color: hsl(0, 0%, 60%);
  }
`;

export default ContactMe;