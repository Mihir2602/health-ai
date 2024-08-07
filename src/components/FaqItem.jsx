// FaqItem.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);
  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${
        isOpen && "active"
      } bg-gray-100 dark:bg-[#1E2735] rounded-lg mt-6`}
    >
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span>{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
      </a>
      <div className={`${isOpen ? "block" : "hidden"} p-4 lg:p-6 pt-0 lg:pt-0`}>
        <p className="opacity-50">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

export default FaqItem;
