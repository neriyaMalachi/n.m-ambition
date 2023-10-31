// components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <div>
      <div className='h-full bg-primary/30 py-36 flex items-center  '>
        <Circles />
        <div className='container mx-auto '>
          <div className='flex flex-col xl:flex-row gap-x-8 xl:mt-32' >
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ' >
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-8  '>
                השרותים שלנו <span className='text-accent' > .</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-right ' >
                 כשלקוח יודע מה הוא רוצה בדיוק איך האתר\תוכנה תראה ומה יהיה בא קל יותר למפתחים שלנו וקל יותר ללקוח שלנו לקבל בדיוק מה שהוא רוצה ואז השירות יהיה יותר טוב והלקוח יהיה יותר מרוצה .
              </motion.p>

            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="w-full xl:max-w-[65%]"
            >

              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>);
};

export default Services;
