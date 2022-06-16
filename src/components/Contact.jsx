import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n9nc0mc', 'template_x1np6y9', form.current, 'tK1c7F3Y4wTrkkdZ-')
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset()
  };


  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit} ref={form}>
        <div className="first_row">
          <input
            type="text"
            placeholder="Name *"
            name="from_name"
            required
          />
        </div>
        {/* End .first_row */}

        <div className="second">
          <input
            type="email"
            placeholder="Email *"
            name="from_email"
            required
          />
        </div>
        {/* End .second */}

        <div className="third">
        <textarea
            placeholder="Message *"
            name="message"
            required
          ></textarea>
        </div>
        {/* End .third */}
        <div className="edina_tm_button">
          <button type="submit" className="color">
            Submit
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
