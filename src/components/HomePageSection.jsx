import React from "react";

const HomePageSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-[#f2f5f8]">
      {/* Text Content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 ml-20">
        <h1 className="text-3xl font-bold text-black mb-4">HealthGuard</h1>
        <p className="text-lg text-black">Welcome to HealthGuard, your AI-powered health companion designed to predict and detect critical diseases such as cancer and diabetes. Our advanced artificial intelligence model analyzes your health data to provide accurate insights, empowering you to take control of your well-being. With a user-friendly interface and comprehensive services, HealthGuard makes it easy for you to monitor your health, understand potential risks, and take proactive steps towards a healthier future. Experience the power of cutting-edge technology combined with intuitive design, all aimed at safeguarding your health. Start your journey to better health today with HealthGuard - your personal health predictor and guardian.
        </p>
      </div>

      {/* Video Showcase */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
          {/* Video */}
          <div className="w-full h-64 bg-gray-300 rounded-lg mt-4 relative">
            <video
              className="w-full h-full object-fill rounded-lg"
              src="/Healthcare.mp4" // Path for the video in the public directory
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
