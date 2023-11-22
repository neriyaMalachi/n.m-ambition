import Circles from '/components/Circles'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { sendContactForm } from '../../lib/api'
import { data } from 'autoprefixer'
import React from "react";
import { Alert } from "reactstrap";
// import { ToastContainer, toast } from 'react-toastify'
import { Toaster, toast } from 'react-hot-toast'


const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      await sendContactForm(data)
      toast.success(' ההודעה נשלחה בהצלחה',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message,
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
  }


  return (
    <div className='h-full bg-primary/30 overflow-x-auto '>
      <div className='container mx-auto py-32 text-center xl:text-left flex
    items-center justify-center h-full ' >
        <div className='flex flex-col w-full  max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center ' >
            צור קשר
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto' >
            <div className='flex gap-x-6 w-full ' >
              <input name='name' type='text' placeholder='שם' className='input p-2' />
              <input name='email' type='email' placeholder='אימיל' className='input p-2' />
            </div>
            <textarea name='message' type="text" placeholder='הודעה' className='textarea' />
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px]
           px-8 transition-all duration-300 flex items-center justify-center
           overflow-hidden hover:border-accent group' >
              <span className=' group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 '>
                בא נדבר
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]
              ' />
            </button>
          </motion.form>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
          />
        </div>
      </div>


    </div>

  );
};

export default Contact;
