import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  const workSlides = {
    slides: [
      {
        images: [
          { title: "התחברות", path: "/avia1.png", link: "/login" },
          { title: "דף הבית", path: "/avia2.png", link: "/home" },
          { title: "דף אדמין", path: "/avia3.png", link: "/admin" },
          { title: "איפס סיסמה", path: "/avia4.png", link: "/reset-password" },
        ],
      },
      {
        images: [
          { title: "דף הבית", path: "/nargilaStore1.png", link: "/store-home" },
          { title: "מוצר", path: "/nargilaStore2.png", link: "/product" },
          { title: "התחברות", path: "/nargilaStore3.png", link: "/login" },
          { title: "הרשם", path: "/nargilaStore4.png", link: "/register" },
        ],
      },
      {
        images: [
          { title: "צור קשר", path: "/sosClean1.png", link: "/contact" },
          { title: "דף בית", path: "/sosClean2.png", link: "/home" },
          { title: "מחירון", path: "/sosClean3.png", link: "/pricing" },
          { title: "N.M AMBITION", path: "/logo.png", link: "/about" },
        ],
      },
      {
        images: [
          { title: "צור קשר", path: "/mabuza1.png", link: "/contact" },
          { title: "דף בית", path: "/mabuza2.png", link: "/home" },
          { title: "מחירון", path: "/mabuza3.png", link: "/pricing" },
          { title: "N.M AMBITION", path: "/mabuza4.png", link: "/about" },
        ],
      },
      {
        images: [
          { title: "ניהול מערכת", path: "/rsvps1.png", link: "/#" },
          { title: "ניהול משתמשים", path: "/rsvps2.png", link: "/#" },
          { title: "תוכן", path: "/rsvps3.png", link: "/#" },
          { title: "תוכן", path: "/rsvps4.png", link: "/#" },
        ],
      },
    ],
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, unique) => (
        <SwiperSlide key={unique.toString()}>
          <div className="grid grid-cols-2 grid-rows-2 cursor-pointer gap-4">
            {slide.images.map((image, i) => (
              <Link href={"#"} key={i.toString()} passHref>
                <div className="w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="w-full h-full aspect-w-16 aspect-h-9 relative">
                    <Image
                      src={image.path}
                      layout="responcisve"
                      alt={image.title}
                      className="object-cover w-full h-full rounded-md"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div
                    className="absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-300
                               bg-black bg-opacity-60 w-full text-white text-center py-2"
                  >
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span>{image.title}</span>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
