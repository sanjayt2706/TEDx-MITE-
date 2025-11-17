import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const events = [
    {
      title: "Main Event 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "MITE Campus Auditorium"
    },
    {
      title: "Workshop Series",
      date: "February 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab"
    },
    {
      title: "Networking Mixer",
      date: "April 5, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "MITE Convention Center"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 border-2 border-red-600/30 rounded-lg"
        style={{ y }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 border-2 border-red-600/30 rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-red-600 text-center mb-16"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Upcoming Events
        </motion.h2>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0, rotateY: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 3 : -3,
                boxShadow: "0 25px 50px rgba(220, 38, 38, 0.3)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <motion.h3
                    className="text-red-500 mb-4"
                    whileHover={{ x: 10, color: "#ef4444" }}
                  >
                    {event.title}
                  </motion.h3>

                  <div className="space-y-2">
                    <motion.div
                      className="flex items-center gap-3 text-gray-400"
                      whileHover={{ x: 5, color: "#fff" }}
                    >
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 text-gray-400"
                      whileHover={{ x: 5, color: "#fff" }}
                    >
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 text-gray-400"
                      whileHover={{ x: 5, color: "#fff" }}
                    >
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </motion.div>
                  </div>
                </div>

                <motion.button
                  className="px-6 py-3 bg-red-600 text-white rounded-full self-start md:self-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(220, 38, 38, 0.8)",
                    rotateZ: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
