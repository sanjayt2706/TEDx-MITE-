import React from 'react';
import { motion } from 'motion/react';
import { Mic, Lightbulb, Users, Sparkles } from 'lucide-react';

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
    <section id="speakers" className="min-h-screen py-20 px-4 relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-red-600 text-center mb-16 font-bold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Speaker Tracks
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {[
            { 
              img: "https://images.unsplash.com/flagged/photo-1564401398070-9a0ec00bd38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNjMzNDE0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
              name: "Dr. Sarah Johnson",
              about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            },
            { 
              img: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzMxMjc1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
              name: "Prof. Michael Chen",
              about: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
            },
            { 
              img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NjMzMjgzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              name: "Emma Rodriguez",
              about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
            },
            { 
              img: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzNTU5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
              name: "James Anderson",
              about: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            },
            { 
              img: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzM3MzczOXww&ixlib=rb-4.1.0&q=80&w=1080",
              name: "Priya Patel",
              about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            },
            { 
              img: "https://images.unsplash.com/photo-1687575635557-a3f3ed535b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzNzM3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
              name: "David Kim",
              about: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
            },
            { 
              img: "https://images.unsplash.com/photo-1585066039196-e30d097340be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzNzM3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
              name: "Lisa Thompson",
              about: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit."
            },
            { 
              img: "https://images.unsplash.com/photo-1760037028485-d00dd2b8f6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMzczNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
              name: "Alex Martinez",
              about: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            },
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