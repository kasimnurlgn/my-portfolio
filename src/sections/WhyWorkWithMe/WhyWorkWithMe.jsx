import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTheme } from "../../common/ThemeContext";
import "./WhyWorkWithMe.css";

// Ensure the remixicon CSS is imported
import "remixicon/fonts/remixicon.css";

const WhyWorkWithMe = () => {
  const { theme } = useTheme(); // Access theme context

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Ensures animation runs only once
  }, []);

  const reasons = [
    {
      name: "Expertise",
      description:
        "I bring years of professional experience and deep technical expertise to every project.",
      icon: "ri-lightbulb-line", // This is the class name for the lightbulb icon
    },
    {
      name: "Reliability",
      description:
        "I deliver on time and ensure that your expectations are met or exceeded.",
      icon: "ri-shield-check-line", // This is the class name for the shield icon
    },
    {
      name: "Collaboration",
      description:
        "I work closely with clients to understand their unique needs and goals.",
      icon: "ri-group-line", // This is the class name for the group icon
    },
    {
      name: "Innovative Solutions",
      description:
        "I use cutting-edge technologies to provide tailored solutions.",
      icon: "ri-tools-line", // This is the class name for the tools icon
    },
    {
      name: "Client Satisfaction",
      description:
        "Your satisfaction is my priority, and I strive for excellence in every project.",
      icon: "ri-thumb-up-line", // This is the class name for the smiley icon
    },
    {
      name: "Post-Project Support",
      description:
        "I offer ongoing support to ensure the long-term success of your projects.",
      icon: "ri-phone-line", // This is the class name for the phone icon
    },
  ];

  return (
    <section id="why-work-with-me" className="why-work-with-me">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h1>Why Work With Me</h1>
        </div>
        <div className="reasons-container">
          {reasons.map((reason, index) => (
            <div
              className={`reason-card-wrapper ${
                theme === "light" ? "light" : "dark"
              }`}
              key={index}
            >
              <div
                className="reason-card"
                data-aos="fade-right" // Adds the right animation
                data-aos-once="true" // Ensures the animation happens once
              >
                <div className="reason-card-front">
                  <div className="reason-icon">
                    <i className={reason.icon}></i> {/* Rendering the icon */}
                  </div>
                  <h3>{reason.name}</h3>
                </div>
                <div className="reason-card-back">
                  <p>{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
