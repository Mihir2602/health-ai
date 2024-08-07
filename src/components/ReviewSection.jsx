// ReviewSection.jsx
import React, { useState, useEffect } from "react";

const TESTIMONIALS_TEXT_STYLE = {
  position: "relative",
  left: "40px",
  top: "0",
  fontSize: "60px",
  fontWeight: "bold",
  color: "#333",
  letterSpacing: "8px",
  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "HealthGuard's early detection saved my life. Their AI spotted signs of breast cancer months before my regular check-up would have. I'm forever grateful.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "As someone with a family history of diabetes, HealthGuard has been a game-changer. It helps me stay on top of my health and make informed decisions.",
  },
  {
    id: 3,
    name: "Dr. Mike Johnson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "As a doctor, I'm impressed by HealthGuard's accuracy. I often recommend it to my patients as a complementary tool for health monitoring.",
  },
];

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-8 px-2 sm:px-4 lg:px-4">
      <div className="max-w-4xl mx-auto">
        <h2 style={TESTIMONIALS_TEXT_STYLE}>TESTIMONIALS</h2>
        <div className="relative h-96 bg-white shadow-xl rounded-lg overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 w-full h-full transition transition-opacity duration-700 ease-in-out - ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full p-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-500"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {testimonial.name}
                </h3>
                <p className="text-xl text-gray-600 italic text-center max-w-2xl leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
