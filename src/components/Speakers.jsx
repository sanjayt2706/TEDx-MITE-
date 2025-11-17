import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, Lightbulb, Users, Sparkles } from 'lucide-react';
import Arjun from "../assets/Arjun-Gowda.jpg";
import Bijay from "../assets/Bijay-Nair.png";
import Nishith from "../assets/Nishith-Pareekh.png";
import Partha from "../assets/N-S-Parathasarthy.jpg";
import Prajakta from "../assets/Prajakta-Desai.jpg";
import Sanjeev from "../assets/Sanjeev-Kumar.png";
import Simran from "../assets/Simran-Singh.png";

export default function Speakers() {
  const speakers = [
    {
      name: "Innovation Track",
      description: "Breakthrough ideas in technology and science",
      icon: Lightbulb,
      color: "from-red-600 to-orange-500"
    },
    {
      name: "Leadership Track",
      description: "Stories of transformation and change",
      icon: Users,
      color: "from-red-600 to-pink-500"
    },
    {
      name: "Creative Track",
      description: "Art, design, and creative expression",
      icon: Sparkles,
      color: "from-red-600 to-purple-500"
    },
    {
      name: "Performance Track",
      description: "Live performances and demonstrations",
      icon: Mic,
      color: "from-red-600 to-yellow-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-red-600 text-center mb-16 font-bold " style={{ fontSize: '5rem' , perspective: 1000 }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Speakers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {[
            { 
              img: Arjun,
              name: "Arjun Goeda",
              about: "Arjun Gowda is a Kannada Actor who adopted the role of an ambulance driver during the COVID-19. He started 'Project Smile Trust', to ferry Covid-19 patients to hosptial amid a surge in numbers. He als helped in carrying out the final rites of those who have lost their lives due to the virus"
            },
            { 
              img: Bijay,
              name: "LT CDR Bijay Nair",
              about: "He is a retired Indian Navy Officer who was a part of Operation Talwar and Operation Vijay. He has been awarded Vijay star and Vijay medal. He is the author of the best seller 'They Inspire'."
            },
            { 
              img: Nishith,
              name: "Nishith Parikh",
              about: "Nishith Parikh is the co-founder and CEO of Hornback E-mobility, which designed the world's first diamond frame folding electric bicycle. Nishith along with Rajkumar Kewat featured on Shark Tank where the company managed to secure a deal with Amit Jain for their venture."
            },
            { 
              img: Partha,
              name: "N S Parthasarthy",
              about:"N S Parthasarthy is an experienced technolody and leadership expert, with over 35 years experince in the Indian IT Sector. He is the co-founder of Mindtree Ltd. He has also experience in mentoring start-ups in areas like technology strategy, positining startegy- selling to enterprises, setting up the right organization structure and culture for growth in making the right people choices."
            },
            { 
              img: Prajakta,
              name: "Major Prjakta Desai",
              about: "Maj. Prjakta Desai is the first woman office of the Indian Army to become an Unmanned Aerial Vehicle Observer Pilot. She is also an avid adventure sports enthusiast. Her countless rescues stand as a testament to her deep love and compassion for animals. She was a participant of Mrs. India Inc. Season 4 where she was awarded the title of Mrs. Beyond Feminism, Mrs. Appealing and was among the top 25 finalist. She is also a finalist at the Queen of the World India 2023 beauty pageant held at Delhi."
            },
            { 
              img: Sanjeev,
              name: "Sanjeev Kumar",
              about: "Sanjeev Kumar Gupta is the Chief Executive Officer at Karnataka Digital Economy Mission (KDEM). Mr Gupta brings in 28 years of experience as an administrator, business leader, entrepreneur, mentor, and Indian IT growth facilitator."
            },
            { 
              img: Simran,
              name: "Simran Sharma",
              about: "Simran Sharma is a para-athlete who won back-to-back silver medals in the 100m and 200m dash at the Para Asian Games 2023 in Hangzhou, China. Back in 2021, she became the first Indian woman para-athlete to qualify for the 100-metre track event in Tokyo Paralympics."
            },
            // { 
            //   img: "https://images.unsplash.com/photo-1760037028485-d00dd2b8f6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMzczNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            //   name: "Alex Martinez",
            //   about: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            // },
          ].map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: -45 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -20,
                rotateY: 10,
                scale: 1.05,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
                {/* Image container with aspect ratio */}
                <motion.div
                  className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-gray-800"
                  whileHover={{ boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
                >
                  <img 
                    src={speaker.img} 
                    alt={`Speaker ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Space for speaker info */}
                <div className="space-y-3">
                  {/* This space is reserved for speaker name and details */}
                  <h3 className="text-red-500 text-lg">{speaker.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {speaker.about}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}