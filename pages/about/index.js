import React, { useState } from 'react'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'כישורים',
    info: [
      {
        title: 'מפתחים בשפות שונות -',
        icons: [
          {
            id: 1,
            icon: <FaHtml5 />
          },
          {
            id: 2,
            icon: <FaCss3 />,
          }, {
            id: 3,
            icon: <FaJs />,
          }, {
            id: 4,
            icon: <FaReact />,
          }, {
            id: 5,
            icon: <SiNextdotjs />,
          }, {
            id: 6,
            icon: <SiTailwindcss />,
          },


        ],
      },
      {
        title: 'מעצבי UI/UX -',
        icons: [
          {
            id: 1,
            icon: <FaFigma />,
          },


        ],
      },
    ],
  }, {
    title: 'ניסיון',
    info: [
      {
        title: ' עבודה עם מערכות מורכבות במקומות בטחוניות -',
        stage: '2019 - 2024',
      },
      {
        title: 'התחלת עבודה עם בעלי עסקים ומפתחים מבחוץ -',
        stage: '2020 - 2024',
      },
      {
        title: 'תמיכת לקוחות תכנית -',
        stage: '2020 - 2024',

      },
      {
        title: 'תפקידי ניהול פרויקטים -',
        stage: '2020 - 2024',

      },
    ],
  },
  {
    title: 'תמיכה ושירותים ',
    info: [
      {
        title: `החברה נותנת תמיכה ושרותים של העלאת הפרוייקט גם אחרי סיום העבודה בדיקות התוכנה אחריות על deploy תקין ועבודה טובה ומהירה של התוכנה זמינה לפניות של הלקוחות בכל שעות היום .`,

      },
      {
        title: " השירות נעשה עם עובדים בעלת  סבלנות רבה ואפשריות להנגיש ללקוחות שלא מבינים בכלל בתוכנה את העבודה ועל מה הם משלמים ולחוות את הבניה איתנו יחד ולתת את הדגשים שהלקוח יותר חשוב לו."
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='overflow-x-auto flex h-full bg-primary/30 py-32 text-center xl:text-left ' >
      <Circles />

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-x-auto '>
        {/* text */}
        <div className='flex-1 flex flex-col text-center'>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2  xl:text-right text-center'
          >
           המקום שבו<span className='text-accent'> רעיונות</span> נפגשים עם מעשה
          </motion.h2>
          
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 ' >
            <div className='flex flex-1 xl:gap-x-6' >
              {/* experience */}
              <div className='relative flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ' >
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ' >  שנות ניסיון מעל </div>
                <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ' >
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ' >לקוחות </div>
                <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ' >
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ' >סיום פרויקטים</div>
                <div className=' text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]  '>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 '
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='  py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x2 text-right items-center text-white/60 '
                >
                  <div className='font-light mb-2 md:mb-0 '> {item.title}</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className='text-2xl text-white' >{icon.icon}</div>
                    })}
                  </div>
                </div>)
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
