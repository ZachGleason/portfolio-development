import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instructor from '../../assets/instructor.jpeg'

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      desc: `Zach is a fantastic developer and technical resource. He is a hard worker who is committed to the craft of software development.
      His code is clean, thoughtful, and well designed. He was always on top of the assignments, submitting ahead of time, and eager to learn more. He is also a great person and will surely be an asset to any team of any dynamic structure.`,
      name: "Mahmoud Khudairi",
      designation: "Instructor - Coding Dojo",
      delayAnimation: "",
    },
    {
      desc: `Zach has been a pleasure to have on our software development team, he is very well focused on his tasks and always delivers on time. He strives to 
      improve his code everyday, and is always thinking of better ways to improve our product development`,
      name: "AK Azaiez",
      designation: "Founder - EggMed",
      delayAnimation: "100",
    },
    {
      
      desc: `Throughout bootcamp, Zach was a great person to collaborate with. He was quick to lend a helping hand and not afraid to ask for help when needed. I admire his work ethic and can’t wait to see how far he will go in his career in tech.`,
      name: "Brandon Schumacher",
      designation: "Graudate - Coding Dojo",
      delayAnimation: "100",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
