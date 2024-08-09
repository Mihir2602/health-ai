import React from "react";
import PropTypes from "prop-types";
import {
  faUserPlus,
  faSignInAlt,
  faPills,
  faChartLine,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contents = [
  {
    icon: faUserPlus,
    title: "Register",
    text: "Sign up for HealthGuard and create your account to access all the features.",
  },
  {
    icon: faSignInAlt,
    title: "Login",
    text: "Enter your credentials to log in and start managing your health data.",
  },
  {
    icon: faPills,
    title: "Checkups",
    text: "Schedule and perform various medical checkups to monitor your health.",
  },
  {
    icon: faChartLine,
    title: "Analytics",
    text: "Explore your health data and insights to better understand your well-being.",
  },
  {
    icon: faFileAlt,
    title: "Reports",
    text: "View and download your personalized health reports and documents.",
  },
];

const ContentItem = ({ item }) => (
  <div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full">
    <div className="p-6 lg:p-12">
      <div className="w-16 h-16 text-[22px] rounded-full shadow-xl flex items-center justify-center mb-6">
        <FontAwesomeIcon icon={item.icon} />
      </div>
      <h5 className="text-2xl font-bold mb-4">{item.title}</h5>
      <p className="leading-relaxed opacity-75">{item.text}</p>
    </div>
  </div>
);

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Tour = () => {
  return (
    <section className="ezy__howitworks5 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col max-w-2xl justify-center items-center text-center mx-auto">
          <h2 className="text-3xl font-bold md:text-[45px] mb-4">
            HealthGuard Workflow
          </h2>
          <p className="text-lg opacity-80">
            Learn about the steps to navigate the HealthGuard application.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-12">
          {contents.map((item, i) => (
            <div className="col-span-4 sm:col-span-2 lg:col-span-1" key={i}>
              <ContentItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;