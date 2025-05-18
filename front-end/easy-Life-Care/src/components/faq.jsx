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
    {
      question: "Why should I use Easy Life Care products?",
      answer:
        "Easy Life Care products are crafted with natural and ancient herbs, made to improve and protect holistic wellness and improve overall health and lifestyle. Our natural products contain the ayurvedic power of traditional Ayurvedic knowledge to improve well-being and balance in your life.",
    },
    {
      question: "What are the benefits of Easy Life Care products?",
      answer:
        "Easy Life Care products offer numerous health benefits, by strengthening  vitality, energy, better digestion, and may help in stress management. By using natural ingredients and traditional recipes, Jeena Sikho Ayurveda’s products may improve your body’s natural processes and contribute to a healthier lifestyle.",
    },
    {
      question: "Are Easy Life Care products safe to use?",
      answer:
        "Yes, Easy Life Care products are safe to use as they are made from natural herbs and ingredients without harmful chemicals. We ensure that our products are manufactured in certified facilities and undergo rigorous quality checks to ensure safety and efficacy.",
    },
    {
      question:
        "how do Easy Life Care products contribute to holistic wellness?",
      answer:
        "Easy Life Care focuses on holistic wellness by addressing various aspects of health from the root cause, including physical, mental, and emotional well-being. The natural formulation aims to balance your body’s systems, and helps to maintain overall harmony of the health.",
    },
    {
      question: "why should I choose Easy Life Care over other brands?",
      answer:
        "Easy Life Care stands out for its commitment to using time-tested Ayurvedic principles and natural ingredients. Easy Life Care natural range of products are carefully crafted which may provide effective and safe solutions for a range of health concerns, offering a traditional approach to modern wellness needs.",
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
