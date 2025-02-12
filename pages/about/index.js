import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div className="overflow-auto bg-primary/30 py-36 px-6 text-center   h-screen">
      {/* Header Section */}
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="text-xl font-bold mb-4 text-blue-600/60 md:text-center md:text-3xl "
      >
        אנחנו בית תוכנה שמתמחה בפיתוח אתרים ומערכות בהתאמה אישית לעסקים קטנים
        ויזמים.
      </motion.h1>

      {/* Main Content: About and Skills */}
      <div className="grid  gap-12 items-center justify-center">
        <div className="text-center md:text-center">
          <h2 className="text-2xl font-semibold mb-4">מי אנחנו?</h2>
          <p className="leading-relaxed mb-4">
            אנחנו צוות של מפתחים מנוסים, המתמחה בפיתוח אתרים, מערכות ניהול
            ואפליקציות, ומספקים פתרונות דיגיטליים חדשניים המותאמים בדיוק לצרכים
            של כל לקוח.
          </p>

          <h2 className="text-2xl font-semibold mb-4">מה אנחנו עושים?</h2>
          <ul className="list-disc list-inside mt-4 text-lg mx-auto max-w-2xl">
            <li>
              <span className="font-semibold">פיתוח אתרים בהתאמה אישית</span> -
              אתרי תדמית, חנויות אונליין ועוד.
            </li>
            <li>
              <span className="font-semibold">בניית מערכות ניהול (CRM)</span> -
              לניהול לקוחות, מלאי ועובדים.
            </li>
            <li>
              <span className="font-semibold">אוטומציה לעסקים</span> - חיבור
              מערכות ושיפור תהליכים.
            </li>
            <li>
              <span className="font-semibold">פיתוח אפליקציות ווב</span> -
              מערכות פנימיות ופאנלים לניהול.
            </li>
            <li>
              <span className="font-semibold">שירותי תחזוקה ותמיכה</span> -
              עדכוני אבטחה ושיפורי ביצועים.
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-6 md:mt-0 md:hidden">
          <Image
            src="/logo.png"
            width={400}
            height={300}
            alt="Developer Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Skills, Experience, and Services */}
      <div className="mt-12 md:flex md:flex-col md:items-center md:justify-center">
        <h2 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          <div className="p-4 md:w-96 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-blue-500">
              פתרונות בהתאמה אישית
            </h3>
            <p>אנחנו מתאימים את הפיתוח לצרכים המדויקים של הלקוחות שלנו.</p>
          </div>
          <div className="p-4 md:w-96 border rounded-lg shadow-md item">
            <h3 className="text-lg font-bold text-blue-500">
              טכנולוגיות מתקדמות
            </h3>
            <p>
              אנחנו עובדים עם הכלים והשפות החדשות ביותר לפיתוח פתרונות איכותיים.
            </p>
          </div>
          <div className="p-4 md:w-96 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-blue-500">
              ליווי מקצועי ואישי
            </h3>
            <p>אנו מעניקים תמיכה מלאה לאורך כל התהליך, בכל שלב.</p>
          </div>
          <div className="p-4 md:w-96 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-blue-500">מיקוד בתוצאות</h3>
            <p>
              אנחנו מפתחים אתרים מהירים, מאובטחים ומותאמים ל-SEO, עם דגש על
              תוצאות איכותיות.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">בתי תוכנה משותפים</h2>
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2  md:max-w-full">
          <Link
            href="https://www.nm-ambition.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 border rounded-lg shadow-md transition-all w-full max-w-xs mx-auto flex flex-col items-center">
              <Image
                src="/logo.png"
                width={350}
                height={300}
                alt="בית תוכנה nm-ambition"
                className="rounded-lg mb-4 "
              />

              <div className="w-full text-center text-xl font-semibold py-2 mt-10 rounded-lg transition-colors">
                בית תוכנה המתמחה בפיתוח אתרים מותאמים אישית ופתרונות דיגיטליים
                מתקדמים.
              </div>
            </div>
          </Link>
          <Link
            href="https://www.stealthcode.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 border rounded-lg shadow-md transition-all w-full max-w-xs mx-auto flex flex-col items-center">
              <Image
                src="/stealthCode_Logo.webp"
                width={200}
                height={150}
                alt="בית תוכנה stealthCode"
                className="rounded-lg mb-4"
              />

              <div className="w-full text-center text-lg font-semibold py-2 mt-4 rounded-lg transition-colors">
                stealthCode בית תוכנה המתמחה בעבודה עם סטארטאפים בשלבים מוקדמים.
                שירותים: איפיון, ארכיטקטורה, עיצוב UI/UX, פיתוח fullstack,
                שירותי ענן ו DevOp
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Contact Link */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          רוצים אתר או מערכת בהתאמה אישית?
        </h2>
        <p className="text-lg">
          צרו קשר איתנו ונבנה פתרון דיגיטלי שיקדם את העסק שלכם!
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-blue-600/60 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          צור קשר
        </Link>
      </div>
    </div>
  );
};

export default About;
