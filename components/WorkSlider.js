// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'התחברות',
          path: '/avia1.png',
        },
        {
          title: 'דף הבית',
          path: '/avia2.png',
        },
        {
          title: 'דף אדמין',
          path: '/avia3.png',
        },
        {
          title: 'איפס סיסמה',
          path: '/avia4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'דף הבית',
          path: '/nargilaStore1.png',
        },
        {
          title: 'מוצר',
          path: '/nargilaStore2.png',
        },
        {
          title: 'התחברות',
          path: '/nargilaStore3.png',
        },
        {
          title: 'הרשם',
          path: '/nargilaStore4.png',
        },

      ],
    },
    {
      images: [
        {
          title: 'צור קשר',
          path: '/sosClean1.png',
        },
        {
          title: 'דף בית',
          path: '/sosClean2.png',
        },
        {
          title: 'מחירון',
          path: '/sosClean3.png',
        },
        {
          title: 'N.M AMBITION',
          path: '/logo.png',
        },

      ],
    },
  ],
};
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from "swiper";
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="  h-[280px] sm:h-[480px]  "
    >
     
            {workSlides.slides.map((slide, unique) => {
              return (
                <SwiperSlide key={unique.toString()} >
                  <div className=' grid grid-cols-2 grid-rows-2 cursor-pointer '>
                    {slide.images.map((image, i) => {
                      return (
                        <div key={i.toString()} className='  m-4 relative rounded-lg overflow-hidden flex items-start justify-center group  '>
                          <div className='flex items-center justify-center relative  group' >
                            <Image
                              src={image.path}
                              width={'2500'}
                              height={'1050'}
                              alt={'IMAGE'}
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                            group-hover:opacity-80 transition-all duration-700 ' > </div> */}
                            {/* title */}

                            <div className='absolute bottom-0 translate-y-full
                            grouo-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300'>
                              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]  '>
                                {/* title part 1 */}
                                <div className='delay-100 m-1'>{image.title}</div>

                                {/* icon */}
                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 translate-all duration-300 deplay-200' ><BsArrowRight /></div>
                              </div>
                            </div>



                          </div>
                        </div>
                      )
                    })}
                  </div>
                 </SwiperSlide>
              )
            })}



         
    </Swiper>
  );
};

export default WorkSlider;


