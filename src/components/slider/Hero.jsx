import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import zach from '../../assets/zach.jpg'
import CV from '../../assets/RESUME-CV.pdf'


const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "2",
  name: "Zach Gleason",
  description: `I'm a Full-Stack Software Engineer`
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`${zach}`}
            alt="about author"
          />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Hello, I'm {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={["Software Engineer", "Web Designer", "Tech Enthusiast"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <a href={CV} download className="color">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
