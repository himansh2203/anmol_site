import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../css/faq.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Easy Life Care?",
      answer:
        "Easy Life Care is an online platform that offers a wide range of authentic Ayurvedic products and alternative medicines sourced from the best herbs in India.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by browsing our products, adding them to your cart, and proceeding to checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, net banking, and UPI.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq-title">Frequently Asked Questions</div>
      <div className="faq-content">
        {faqs.map((item, index) => (
          <div className="faq-question" key={index}>
            <div className="faq-question-header">
              <div className="faq-question-title">{item.question}</div>
              <FontAwesomeIcon
                icon={openIndex === index ? faChevronUp : faChevronDown}
                className="dropdown-icon"
                onClick={() => toggleAnswer(index)}
              />
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
