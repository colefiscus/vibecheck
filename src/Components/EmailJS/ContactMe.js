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
        <Label>Your Name*</Label>
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
        <Label htmlFor="subject-select">Subject*</Label>
        <Select 
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
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>Your Message*</Label>
        <EmailArea
          required
          rows="7"
          cols="30"
          name="message"
          placeholder="RIP to the great Norm Macdonald"
          value={toSend.message}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Your Email*</Label>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Prozo Libre';
`;


const Label = styled.label`
  font-family: 'Josefin Slab';
  font-size: ${18/14}rem;
  font-style: italic;
  width: 300px;
  margin-right: 6px;
  flex: 1;
  text-align: right;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;

const Input = styled.input`
  margin: 8px 0px;
  flex: 3;
  // max-width: 400px;
  font-size: ${18/14}rem;
  font-family: inherit;
  font-weight: 600;
  color: hsl(0, 0%, 0%);

  &::placeholder {
    font-weight: 400;
    color: hsl(0, 0%, 60%);
  }
`;

const Select = styled.select`
  margin: 8px 0px;
  flex: 3;
  font-size: ${18/14}rem;
  font-family: inherit;
  font-weight: 400;
  color: hsl(0, 0%, 0%);
`;

const EmailArea = styled.textarea`
  margin: 8px 0px;
  flex: 3;
  font-size: ${18/14}rem;
  font-family: inherit;
  font-weight: 600;
  color: hsl(0, 0%, 0%);
  resize: none;

  &::placeholder {
    font-weight: 400;
    color: hsl(0, 0%, 60%);
  }
`;

export default ContactMe;