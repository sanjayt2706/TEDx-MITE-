import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "radial-gradient(circle, #dc2626 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-red-600 text-center mb-16"
          initial={{ y: -50, opacity: 0, rotateX: -45 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: 1000 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6 text-red-500" />
              </motion.div>
              <div>
                <h3 className="text-red-500 mb-2">Email</h3>
                <p className="text-gray-400">tedx@mite.ac.in</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6 text-red-500" />
              </motion.div>
              <div>
                <h3 className="text-red-500 mb-2">Phone</h3>
                <p className="text-gray-400">+91 1234567890</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 text-red-500" />
              </motion.div>
              <div>
                <h3 className="text-red-500 mb-2">Location</h3>
                <p className="text-gray-400">MITE Campus, Moodabidri, Karnataka</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-red-500 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-4 bg-gradient-to-br from-gray-900 to-black rounded-full border border-gray-800"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      whileHover={{
                        scale: 1.2,
                        rotateZ: 360,
                        backgroundColor: "#dc2626",
                        borderColor: "#dc2626",
                        boxShadow: "0 0 25px rgba(220, 38, 38, 0.5)"
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.form
              className="space-y-6 p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800"
              whileHover={{
                boxShadow: "0 25px 50px rgba(220, 38, 38, 0.2)"
              }}
            >
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-gray-400 mb-2">Name</label>
                <motion.input
                  type="text"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                  whileFocus={{
                    borderColor: "#dc2626",
                    boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
                  }}
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-gray-400 mb-2">Email</label>
                <motion.input
                  type="email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                  whileFocus={{
                    borderColor: "#dc2626",
                    boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
                  }}
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-gray-400 mb-2">Message</label>
                <motion.textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                  whileFocus={{
                    borderColor: "#dc2626",
                    boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-red-600 text-white rounded-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(220, 38, 38, 0.8)",
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-10 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-gray-400"
            whileHover={{ scale: 1.05, color: "#fff" }}
          >
            © 2025 TEDx MITE. This independent TEDx event is operated under license from TED.
          </motion.p>
        </motion.div>

        {/* MITE Moodabidre Location Map */}
        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-red-600 text-center mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Find Us Here
          </motion.h3>
          
          {/* Google Maps Embed for MITE Moodabidre */}
          <motion.div
            className="w-full h-96 rounded-2xl overflow-hidden border border-gray-800"
            whileHover={{
              boxShadow: "0 25px 50px rgba(220, 38, 38, 0.3)",
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2625456789!2d74.99234631482193!3d12.956234090874842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827e287f5c1f764!2sMangalore%20Institute%20of%20Technology%20%26%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MITE Moodabidre Location"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}