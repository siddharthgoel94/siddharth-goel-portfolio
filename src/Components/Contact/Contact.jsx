import React  , { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id4zm7b', 'template_6zcmbew', form.current, 'GrTdXjkIconMJHF32')
      .then((result) => {
          // console.log(result.text);
          e.target.reset();
          alert("Message Sent Successfully")
      }, (error) => {
          // console.log(error.text);
          alert("Error while sending message!!!! Try Resending")
      });
  };
  return (
    <section id="contact">
        <h2 className="contactHeading">Contact Me</h2>
        <span className="contactContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id! Illo sit, consectetur velit ab ducimus rem nemo inventore, porro, dolorem quisquam modi dolore alias laudantium blanditiis sunt qui quod.</span>
        <div className="contactFormContainer">
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                
                <input type="text" placeholder="Enter your name" className="nameField" name='from_name'></input>
                <input type="email" name="from_email" placeholder='Enter your email' className='email'></input>
                <textarea className='message' name="message" placeholder='Enter Your message' rows="10"></textarea>
                
                <button type="submit" className="submit"> Submit </button>
                
                
            </form>
        </div>
        <div className="contactLinks">
        
  

        </div>
    </section>
  )
}

export default Contact
