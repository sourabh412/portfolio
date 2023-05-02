import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import gmail from '../../assets/icons/gmail.png';
import phone from '../../assets/icons/phone.png';
import { motion } from "framer-motion";
import { initial_stat, animate_stat } from "../utils/values";

function Contact() {

  const form = useRef();
  function sendMail(e) {
    e.preventDefault();

    emailjs.sendForm('service_qjir3nu', 'template_6nb4j5l', form.current, '8StSeocFa0TJF5KWG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <motion.div initial={initial_stat} animate={animate_stat}>
      <div id="contact_header">
        <h1 className='text-2xl font-semibold text-slate-300'>Grab some
          <span className='text-yellow-100'> Coffee </span>
          and <span className='text-yellow-100'> Connect </span> with me.</h1>
      </div>
      <div className='mt-8 text-lg text-slate-300'>
        Direct contact
      </div>
      <div className='my-5 flex flex-col gap-3'>
        <a className="px-6 py-4 w-4/5 bg-[var(--theme-bg-color)] flex items-center gap-3 flex-1 rounded-lg text-ellipsis" href='mailto:hiremathsourabh12@gmail.com' rel="noreferrer"><span className='h-10 w-10 inline-block flex-none'><img src={gmail} alt="imgs" /></span> hiremathsourabh12@gmail.com</a>
        <a className="px-6 py-4 w-auto bg-[var(--theme-bg-color)] flex items-center gap-3 flex-1 rounded-lg overflow-ellipsis" href='tel:+91 7204593495' rel="noreferrer"><span className='h-10 w-10 inline-block flex-none'><img src={phone} alt="imgs" /></span> +91 720493495</a>
      </div>
      <div className='mt-8 text-lg text-slate-300'>
        Leave a message
      </div>
      <div>
        <form ref={form} className="my-5" onSubmit={sendMail}>
          <div className="rounded-md">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-4/5 rounded-md px-3 py-4 my-2 placeholder-gray-500 bg-[var(--theme-bg-color)] sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <textarea
                id="email-text"
                name="email-text"
                rows="5"
                required
                className="w-full rounded-md px-3 py-4 my-2 placeholder-gray-500 bg-[var(--theme-bg-color)] sm:text-sm"
                placeholder="Your Message"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mx-auto relative flex w-1/2 max-w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact