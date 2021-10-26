import React from 'react';

const FAQ = ({ faq, index }) => {
  return (
    <div
      className={"open" + (faq.open ? "open" : "")}
      key={index}
    >
      {faq.question}
    </div>
  )
}

export default FAQ;