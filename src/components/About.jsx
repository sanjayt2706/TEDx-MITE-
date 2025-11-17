import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

// Tab content text blocks
const TED = `“In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).`;

const TEDx = `TEDx MITE – Illuminate fueled by its tagline – ‘Reflections Empowering Ingenuity’ is an interesting and engaging event that strives to inspire people of different ages, occupations, and educational levels. The event’s tagline emphasizes the need of pondering on our experiences and ideas in order to fuel innovation and creativity. The event is divided into two sessions, each having speeches and performances by a variety of speakers. The speakers come from diverse areas and experiences, each with their own distinct viewpoint and ideas to share on stage. The event seeks to generate meaningful conversations and promote good change in our community by displaying various, unique and thought-provoking ideas.`;

const TEDxMITE = `TEDx MITE aims to stir up our community’s curiosity and urge them to embrace new ideas and perspective. Another significant goal of TEDx MITE is to motivate and inspire our varied audience. The event’s goal is to inspire people to pursue their hobbies and make a positive effect on the world by showcasing strong and inspiring speakers. TEDx MITE speakers will provide fresh perspectives on themes ranging from technology and science to art and culture.`;

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);

  const [active, setActive] = useState('TEDxMITE');
  const tabs = [
    { key: 'TED', label: 'TED', content: TED },
    { key: 'TEDx', label: 'TEDx', content: TEDx },
    { key: 'TEDxMITE', label: 'TEDxMITE', content: TEDxMITE }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-start md:items-center justify-center py-16 px-6 bg-[#07040a] text-white relative">
      <motion.div style={{ x }} className="absolute inset-0 pointer-events-none" aria-hidden />

      <div className="w-full max-w-6xl">
        <motion.h1
          initial={{ y: -20, opacity: 0, rotateX: -6 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-red-600 font-extrabold mb-8"
          style={{ fontSize: '4rem', lineHeight: 1 }}
        >
          ABOUT
        </motion.h1>

        {/* Tabs row - left aligned */}
        <div className="flex items-start gap-6 mb-6">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative z-10 px-6 py-3 font-semibold transition-all focus:outline-none ${isActive ? 'text-white' : 'text-gray-300'}`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <span className="absolute -top-3 left-0 right-0 mx-auto w-36 h-9 border-2 border-red-600 bg-black rounded-t-sm pointer-events-none" />
                )}
                {t.label}
              </button>
            );
          })}
        </div>

        {/* framed content box */}
        <div className="p-2 border-4 border-red-600 rounded-md">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#0c0c0d] p-8 rounded-sm"
            style={{ opacity }}
          >
            <div className="text-white leading-relaxed text-base md:text-lg max-h-[56vh] overflow-y-auto pr-4" style={{ textAlign: 'justify' }}>
              {tabs.find((t) => t.key === active)?.content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
