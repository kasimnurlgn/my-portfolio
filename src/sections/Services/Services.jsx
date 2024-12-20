import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { useTheme } from "../../common/ThemeContext";
import "./Services.css";

const Service = () => {
  const { theme } = useTheme(); // Access current theme

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      name: "Web Development",
      description:
        "I build custom web applications to help your business succeed online.",
      icon: "ri-code-line", // Web Development Icon
    },
    {
      name: "Responsive Design",
      description:
        "I design responsive websites for an exceptional user experience.",
      icon: "ri-layout-3-line", // or "ri-screen-2-line"
    },
    {
      name: "E-commerce Solutions",
      description:
        "I Build feature-rich e-commerce platforms to boost your online business.",
      icon: "ri-shopping-cart-2-line", // E-commerce Solutions Icon
    },
    {
      name: "Performance boost",
      description:
        "I Improve load times and performance for a seamless user experience.",
      icon: "ri-speed-line", // Performance Boost Icon
    },
    {
      name: "API Integration",
      description:
        "I Integrate third-party services and APIs to streamline your workflows.",
      icon: "ri-plug-line", // API Integration Icon
    },
    {
      name: "Maintenance & Support",
      description:
        "I offer web maintenance and support to keep your site secure and smooth.",
      icon: "ri-tools-line", // Maintenance & Support Icon
    },
  ];

  return (
    <section id="services" className="section-padding border-top">
      <div className="container">
        <div className="row ">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title ">
              {/* Added margin-bottom */}
              <h1 className="fw-semibold">Services</h1>
            </div>
          </div>
        </div>

        <div className="row g-4 text-center pt-3">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={index}
            >
              <div
                className={`service ${theme === "light" ? "light" : "dark"}`} // Add light/dark class based on theme
              >
                <div className="iconbox">
                  <i className={service.icon}></i>
                </div>
                <h5 className="mt-4 mb-3">{service.name}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
