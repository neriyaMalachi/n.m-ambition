// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'מיתוג',
    description: 'מקנים לעסק תדמית טובה בהתאם לצריכיו.',
  },
  {
    icon: <RxPencil2 />,
    title: 'עיצוב',
    description: 'מעצבים יחד עיצוב ראשוני ומתחילים לקדם עד סוף התהליך.',
  },
  {
    icon: <RxDesktop />,
    title: 'התפתחות',
    description: 'התפתחות הדברים מהסבר של הלקוח עד למוצר מוגמר.',
  },
  {
    icon: <RxReader />,
    title: 'הבנה',
    description: 'מנסים לפצח ולהבין מה בדיוק הלקוח רוצה .',
  },
  {
    icon: <RxRocket />,
    title: 'חיפוש',
    description: 'מחפשים איתך ביחד את מה שהלקוח לא מוצא.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
    }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]  "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)]  h-[250px] rounded-lg px-6 py-8 flex  
                sm:flex-col gap-x-6  sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300" >
              {/* icon */}
              <div className="text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8" >
                <div className="mb-2 text-lg ">{item.title} </div>
                <p className="max-w-[350px] leading-normal " >{item.description}</p>
              </div>
              {/* arrow */}
              <div className=" text-3xl ">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
