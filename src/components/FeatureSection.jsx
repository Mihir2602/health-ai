// FeaturesSection.jsx
import React, { useState, useEffect } from "react";

const CONTAINER_STYLE = {
  position: "relative",
  height: "500px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  background: "linear-gradient(135deg, #f6f9fc 0%, #e9f1f7 100%)",
};

const CARD_STYLE = {
  height: "400px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#FFFFFF",
  color: "#333",
  fontFamily: "'Poppins', sans-serif",
  borderRadius: "20px",
  boxSizing: "border-box",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: "all 0.5s ease-in-out",
  padding: "30px",
  textAlign: "left",
  overflow: "hidden",
};

const FEATURES_TEXT_STYLE = {
  position: "absolute",
  left: "40px",
  top: "0%",
  fontSize: "72px",
  fontWeight: "bold",
  color: "#1a365d",
  writingMode: "vertical-rl",
  textOrientation: "mixed",
  transform: "rotate(180deg)",
  letterSpacing: "8px",
  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  height: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = [
    {
      title: "AI-Powered Disease Prediction",
      description: "Our advanced AI analyzes your health data to predict potential risks for cancer and diabetes with high accuracy.",
      image: "/brain.jpg"
    },
    {
      title: "Personalized Health Insights",
      description: "Receive tailored health recommendations based on your unique profile and risk factors.",
      image: "/dna.jpg"
    },
    {
      title: "User-Friendly Interface",
      description: "Navigate your health information effortlessly with our intuitive and accessible dashboard.",
      image: "/interface.jpg"
    },
    {
      title: "Expert Medical Support",
      description: "Access to a network of healthcare professionals for consultation on your AI-generated health insights.",
      image: "/stethoscope.jpg"
    },
    {
      title: "Predictive Wellness Score",
      description: "Receive a dynamic wellness score that predicts your overall health status and suggests improvements.",
      image: "silhoutte.jpg"
    },
    {
      title: "Health Goal Tracking",
      description: "Set and monitor personal health goals with AI-assisted progress tracking and motivation.",
      image: "trophy.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div style={CONTAINER_STYLE}>
      <div style={FEATURES_TEXT_STYLE}>FEATURES</div>
      {features.map((feature, index) => {
        const offset = (index - currentIndex + features.length) % features.length;
        return (
          <div
            key={index}
            style={{
              ...CARD_STYLE,
              position: "absolute",
              opacity: offset === 0 ? 1 : 0.5,
              transform: `translateX(${offset * 420 - 280}px) scale(${
                1 - Math.abs(offset) * 0.15
              })`,
              zIndex: features.length - Math.abs(offset),
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ 
                width: "160px", 
                height: "140px", 
                marginRight: "30px", 
                borderRadius: "20px", 
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "3px solid",
                borderImage: "linear-gradient(45deg, #c0c0c0, #f0f0f0) 1",
              }}>
                <img src={feature.image} alt={feature.title} style={{width: "100%", height: "100%", objectFit: "cover"}} />
              </div>
              <h3 style={{
                fontSize: "32px", 
                fontWeight: "bold", 
                color: "#1a365d",
                lineHeight: "1.2",
                marginBottom: "10px"
              }}>{feature.title}</h3>
            </div>
            <p style={{
              fontSize: "18px", 
              lineHeight: "1.6", 
              color: "#4a5568",
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
            }}>{feature.description}</p>
            <div style={{
              width: "60px",
              height: "4px",
              background: "#3182ce",
              marginTop: "20px",
              borderRadius: "2px"
            }}></div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesSection;