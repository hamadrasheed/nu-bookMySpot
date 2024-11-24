import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq.css'; // Custom CSS for styling

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "How does JustPark make money?", answer: "JustPark earns through commission fees and premium services provided to users and property owners." },
    { question: "How do I book a parking space?", answer: "You can book a parking space through the app or website by entering your location and choosing a spot." },
    { question: "How do I make a long-term booking?", answer: "Simply select the long-term option while booking, and choose a duration that fits your needs." },
    { question: "Can I extend my session if I need more time?", answer: "Yes, you can extend your session easily through the app, subject to availability." },
    { question: "What if I have to cancel my booking?", answer: "You can cancel your booking in advance through the app. Cancellation policies may apply." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="faq-section container py-5">
      <h2 className="text-center mb-5">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question d-flex justify-content-between align-items-center">
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
