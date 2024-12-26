import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div>
      <div className="h-full bg-primary/30 py-36 flex items-center mt-5">
        <Circles />
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              השירותים שלנו <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[500px] mx-auto lg:mx-0 text-right"
            >
              אנו מציעים מגוון פתרונות טכנולוגיים מותאמים אישית, שמתאימים לכל
              לקוח לפי הצרכים והדרישות שלו. כל פרויקט מתחיל בהבנת המטרות של הלקוח,
              וכולל תהליך שיטתי וממוקד, כדי להבטיח תוצאה מדויקת ומרשימה. בין אם אתם
              מחפשים אתר תדמית בסיסי או פתרון תוכנה מותאם אישית, אנחנו כאן בשבילכם.
            </motion.p>
          </div>

          {/* כרטיסים תואמים */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-16 "
          >
            <div className="flex flex-col sm:flex-row overflow-y-auto gap-8 h-[35vh] sm:h-[auto]">
              {/* כרטיס 1 - מסלול בסיסי */}
              <div className="service-card   w-full p-6 border-2 border-gray-200 rounded-lg shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">מסלול בסיסי</h3>
                <p className="text-lg mb-4">
                  פיתוח אתר תדמית או פתרון טכנולוגי בסיסי, המתמקד בהצגת מידע בצורה
                  מקצועית.
                </p>
                <div className="mb-4 text-lg">
                  <span className="font-semibold">טווח מחירים:</span> ₪5,000 - ₪8,000
                </div>
                <div className="text-lg">
                  <span className="font-semibold">רמת עבודה:</span> בסיסי
                </div>
              </div>

              {/* כרטיס 2 - מסלול מתקדם */}
              <div className="service-card  w-full  p-6 border-2 border-gray-200 rounded-lg shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">מסלול מתקדם</h3>
                <p className="text-lg mb-4">
                  פיתוח אתר או תוכנה בסיסית עם פונקציות אינטראקטיביות כגון טפסים,
                  חיפושים, או תוספות עיצוביות מותאמות אישית.
                </p>
                <div className="mb-4 text-lg">
                  <span className="font-semibold">טווח מחירים:</span> ₪8,000 - ₪15,000
                </div>
                <div className="text-lg">
                  <span className="font-semibold">רמת עבודה:</span> מתקדם
                </div>
              </div>

              {/* כרטיס 3 - מסלול פרימיום */}
              <div className="service-card w-full  p-6 border-2 border-gray-200 rounded-lg shadow-xl transition-all duration-300 ">
                <h3 className="text-2xl font-bold mb-4">מסלול פרימיום</h3>
                <p className="text-lg mb-4">
                  פיתוח פתרון תוכנה שלם ומורכב, הכולל אינטגרציות עם מערכות חיצוניות,
                  ממשקי משתמש מותאמים אישית, ניהול נתונים, ופונקציות מתקדמות .
                </p>
                <div className="mb-4 text-lg">
                  <span className="font-semibold">טווח מחירים:</span> ₪15,000 ומעלה
                </div>
                <div className="text-lg">
                  <span className="font-semibold">רמת עבודה:</span> גבוהה
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
