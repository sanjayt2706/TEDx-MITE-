import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Floating elements */}
      <motion.div
        className="absolute w-64 h-64 border-2 border-red-600 rounded-full opacity-10"
        style={{ x, top: '20%', right: '10%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl"
      >
        <motion.h2
          className="text-red-600 mb-8 text-center"
          initial={{ rotateX: -45, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: 1000 }}
        >
          About TEDx MITE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 bg-[rgb(0,0,0)]">
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
            initial={{ x: -100, opacity: 0, rotateY: -20 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h3
              className="text-red-500 mb-4"
              whileHover={{ x: 10 }}
            >
              Our Mission
            </motion.h3>
            <p className="text-gray-300">
              TEDx MITE is an independently organized TED event bringing together bright minds to give talks that are idea-focused, and on a wide range of subjects to foster learning, inspiration and wonder.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
            initial={{ x: 100, opacity: 0, rotateY: 20 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h3
              className="text-red-500 mb-4"
              whileHover={{ x: 10 }}
            >
              Our Vision
            </motion.h3>
            <p className="text-gray-300">
              We envision a community where innovative ideas spark conversations, inspire action, and create lasting impact. Through TEDx MITE, we celebrate creativity, diversity, and the power of ideas.
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}