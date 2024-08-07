import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const socialIcons = [
  {
    icon: faTwitter,
    href: "https://twitter.com/HealthGuardAI",
  },
  {
    icon: faFacebook,
    href: "https://facebook.com/HealthGuardAI",
  },
  {
    icon: faInstagram,
    href: "https://instagram.com/HealthGuardAI",
  },
  {
    icon: faLinkedin,
    href: "https://linkedin.com/company/HealthGuardAI",
  },
  {
    icon: faGithub,
    href: "https://github.com/HealthGuardAI",
  },
];

const SocialItem = ({ social }) => (
  <li>
    <a href={social.href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={social.icon} />
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Footer10 = () => {
  return (
    <footer className="ezy__footer10 bg-white dark:bg-[#0b1727] py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center">
          <a href="#!" className="mb-6">
            <div className="rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-24 h-24">
              <img
                src="/HealthGuardAI.jpg"
                alt="HealthGuard Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <div className="text-center max-w-xl">
            <h3 className="text-2xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
              HealthGuard: Your AI Health Companion
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              HealthGuard uses advanced AI to predict and detect critical diseases like cancer and diabetes. Our user-friendly platform empowers you to take control of your health, providing accurate insights and proactive recommendations for a healthier future.
            </p>
          </div>

          <ul className="flex items-center justify-center my-8 md:my-10 space-x-4">
            {socialIcons.map((social, i) => (
              <SocialItem social={social} key={i} />
            ))}
          </ul>

          <p className="text-gray-600 dark:text-gray-400 pt-4">
            © 2023 HealthGuard AI. All Rights Reserved. | <a href="/privacy-policy" className="underline">Privacy Policy</a> | <a href="/terms-of-service" className="underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer10;