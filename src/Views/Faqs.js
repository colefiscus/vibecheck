import React, { useState } from "react";
import styled from "styled-components/macro";

import FAQ from "../Components/FAQs/FAQ";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Who made this site?",
      answer: `A guy named Cole Fiscus did! You can find out more about him on the Info page.`,
      open: false
    },
    {
      question: "How does this all work?",
      answer: "You judge a recent dining-out experience based on four factors: the food, the service you received, the vibes / setting of the place, and the value you thought you got for what you paid. Viibcheck will calculate a score based on how important you deemed each one of the factors to your overall experience.",
      open: false
    },
    {
      question: "The rating scale...why?",
      answer: "10 is too big. 5 is too small. Think of it more as a scale between 1 - 7 with an extra three levels of badness used to account for those truely terrible experiences.",
      open: false
    },
    {
      question: "Ok, but can you like just give me some examples or something?",
      answer: "A 7 should be reserved for the best experiences of your life - less than a handful of scores should receive a 7. A 5 is great! You loved it! It's uncommon, but not rare. A 3 is pretty average - you didn't love it, didn't hate it. A 1 is just bad. You did not enjoy it in the slightest. A 0 is actually awful, like something is wrong. And a -2 is an abhorrent insult to humanity, Gordon Ramsey couldn't help this score get better and it wouldn't even deserve it in the first place.",
      open: false
    },
    {
      question: "Where can I change my scale settings?",
      answer: "You can change them in your profile.",
      open: false
    },
    {
      question: "Is there an app?",
      answer: "You may be able to put Viibcheck onto your phone as an app using your browser. Check your browser settings and look for an option to download the site to your phone. It should show up on your home screen for easy access!",
      open: false
    },
  ])

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <MainWrapper>
      <Title>Frequently Asked Questions</Title>
      <FAQSWrapper className="faqs">
        {faqs.map((faq, i) => {
            return <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
        })}
      </FAQSWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

const Title = styled.h1`
  font-family: 'Biryani';
  font-size: ${22/14}rem;
  margin-bottom: 15px;
`;

const FAQSWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
`;

export default Faqs;