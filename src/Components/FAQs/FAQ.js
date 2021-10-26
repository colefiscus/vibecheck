import React from 'react';

const FAQ = ({ faq, index }) => {
  return (
    <div
      className={"open" + (faq.open ? "open" : "")}
      key={index}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  )
}

export default FAQ;