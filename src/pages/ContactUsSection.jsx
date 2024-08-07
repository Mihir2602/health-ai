import React, { useState } from "react";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle form submission logic here (e.g., API call)
      console.log("Form submitted:", formData);
    }

    setValidated(true);
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="mb-4 ">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#202F43] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#202F43] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Email"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#202F43] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Message"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="text-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
        >
          Send
        </button>
      </div>
    </form>
  );
};

const ContactFormCard = () => (
  <div className="p-6 md:p-12">
    <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-4">
      Contact Us
    </h2>
    <p className="text-lg mb-12">
      We list your menu online, help you process orders.
    </p>
    <ContactForm />
  </div>
);

const ContactUsSection = () => {
  return (
    <section className="ezy__contact7 light  md: bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-12 py-6">
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-2 mb-4 lg:mb-0">
            <div
              className="bg-center bg-no-repeat bg-cover min-h-[100px] w-full lg:w-[50vw] h-full"
              style={{
                marginTop: "12vh",
                backgroundImage: "url(/Contact.jpg)",
                height: "65vh",
              }}
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
