import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import telegramLight from "../../assets/telegram-light.svg";
import telegramDark from "../../assets/telegram-dark.svg";
// import upworkLight from "../../assets/upwork-light.svg";
// import upworkDark from "../../assets/upwork-dark.svg";
import CV from "../../assets/cv.pdf";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const telegramIcon = theme === "light" ? telegramLight : telegramDark;
  // const upworkIcon = theme === "light" ? upworkLight : upworkDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Kasim Nurlgn"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kasim
          <br />
          Nurlgn
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/kasimnurlgn" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/kasimnurlgn" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://t.me/Ibnu_Aisheteyn" target="_blank">
            <img src={telegramIcon} alt="Telegram icon" />
          </a>
          <a href="https://x.com/Ibnu_Aisheteyn" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
          Skilled in front-end and back-end technologies, creating innovative,
          scalable, and user-centric web applications.
        </p>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
