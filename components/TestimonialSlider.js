// testimonial data
const testimonialData = [
  {
    image: '/mancal2.png',
    name: 'נריה מלחי',
    position: 'מנכ"ל החברה',
    message:
      'כמנכ"ל חברת מפתחים בהייטק, מטרתנו היא יצירת פתרונות טכנולוגיים מתקדמים ויעילים. בעזרת צוות מוכשר וידע מעמיק, אנו מספקים ללקוחותינו יתרונות מובהקים בעולם הטכנולוגיה. אמינות ואתיקה הן ערכים מרכזיים שמכירים ופועלים בפתיחות ובשקיפות.',
  },
  {
    image: '/nikita-devops.png',
    name: ' ניקיטה אושקלוב ',
    position: 'ראש צוות Devops ',
    message:
      'בתפקידי כראש פיתוח DevOps בחברת הייטק, מנהיג את הצוות להטמעת תהליכי CI/CD מתקדמים. אני מקדם אוטומציה, תשתית כקוד ושימוש יעיל בעננים. בכנות ואדיבות, אני פועל כדי לשפר את זרימות העבודה ולמקסם את הפרודוקטיביות, מספק שירות טכני מהיר ויציב לצוותי הפיתוח.',
  },
  {
    image: '/shoam-frontend.png',
    name: 'שוהם מלאכאס',
    position: 'ראש צוות Frontend',
    message:
      'כראש פיתוח Frontend בעולם ההייטק, מטרתי היא ליצור חוויות משתמש מדהימות ומשפרות עבור הלקוחות. בעזרת צוות מוכשר וידע עמוק בטכנולוגיות הצד הקדמי, אנו מפתחים ממשקים שפשוטים לשימוש, אך מתקדמים מבחינה טכנולוגית. אני מאמין בעבודה צמודה לצוותי פיתוח ולקוחות כדי להבין את הצרכים ולספק פתרונות מותאמים אישית שמספקים ערך מוסף אמיתי.',
  },
  {
    image: '/gal-backend.png',
    name: 'גל כהן',
    position: 'ראש צוות Backend',
    message:
      'כראש פיתוח backend בחברת הייטק, אני מוקדש ליצירת מערכות טכנולוגיות מתקדמות. בהתבסס על ידע עמוק וניסיון רב, אני מוביל צוות של מתכנתים ליצירת פתרונות מתוחזקים ואמינים. אני מאמין בפיתוח פתרונות שמספקים ערך מוסף אמיתי ללקוחות ומסייעים לארגונים לצמוח ולהצליח.',
  },
];
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from "swiper";
import Image from 'next/image';
import { motion } from 'framer-motion'
// icons
import { FaQuoteLeft } from 'react-icons/fa'
const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]  "
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index} >
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 overflow-x-auto' >

              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0 ' >
                <div className='flex flex-col justify-center text-center' >
                  <div className='mb-2 max-auto  rounded-full   bg-white/10    ' >
                    <Image
                      src={person.image}
                      width={150}
                      height={100}
                      className='rounded-full aspect-square '
                      alt='AVATAR IMAGE'
                    />
                  </div>
                  <div className='text-lg' >{person.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest '>{person.position}</div>
                </div>
              </div>
              {/* quate & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20  ' >
                {/* quote icon */}
                <div className='mb-4' >
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-right'
                >{person.message}</div>

              </div>



            </div>
          </SwiperSlide>

        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;


