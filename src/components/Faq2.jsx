import React from "react";
import FaqItem from "./FaqItem";
import { faqList } from "./FaqData"; // Assuming you have a separate file for faqList

const Faq2 = () => {
  return (
    <section className="ezy__faq2 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white ml-28 ">
      <div className="container px-16 md:px-8 lg:px-28">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p>
              It’s easier to reach your savings goals when you have the right
              savings account. Take a look and find the right one for you!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0 md:gap-6">
          <div className="col-span-12 md:col-span-6">
            {faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
              <FaqItem faq={faq} key={i} />
            ))}
          </div>
          <div className="col-span-12 md:col-span-6">
            {faqList
              .slice(Math.floor(faqList.length / 2), faqList.length)
              .map((faq, i) => (
                <FaqItem faq={faq} key={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq2;
