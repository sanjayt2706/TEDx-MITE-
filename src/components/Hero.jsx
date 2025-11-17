import React from 'react';
import Navbar from "./Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
       
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '20%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '10%', right: '20%' }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="z-10 text-center px-4"
      >
        <motion.div
          initial={{ rotateY: -30, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <motion.h1
            className="mb-6"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-red-600 font-bold" style={{ fontSize: '10rem' }}>TED</span>
            <span className="text-red-600" style={{ fontSize: '5rem' }}>x</span>
            <span className="text-white" style={{ fontSize: '5rem' }}> MITE</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 mb-8"
        >
          Ideas Worth Spreading
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <motion.button
            className="px-8 py-4 bg-red-600 text-white rounded-full relative overflow-hidden"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(220, 38, 38, 0.8)",
              rotateZ: 2
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ y: -2 }}
            >
              Explore Events
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-red-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
