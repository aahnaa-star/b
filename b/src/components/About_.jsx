import React from "react";
import { motion } from "framer-motion";

// Alternating left/right scroll-in animation
const slideInVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About_ = () => {
  const paragraphs = [
    `Hi, I’m Azaan Suhail, a Computer Science graduate from State Government Engineering College, Mainpuri, Uttar Pradesh, India.`,
    `I have a strong passion for solving real-world problems using code. With over 1000+ DSA problems solved across platforms like LeetCode, CodeChef, Codeforces, GFG, InterviewBit, Coding Ninjas, and SPOJ, I’ve built a solid foundation in Data Structures and Algorithms.`,
    `Alongside problem-solving, I’m skilled in Full Stack Web Development, especially in Frontend. I enjoy building responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and connecting them to powerful backends with Node.js, Express, and MongoDB. I'm also experienced with Git, GitHub, Figma, and both SQL and NoSQL databases.`,
    `I’ve built real-world projects like AI Interview Assistants, Real-time Chat Apps, and GitHub-like Repository Managers. These helped me understand scalable, production-ready systems.`,
    `Beyond tech, I contribute to the developer community through my LinkedIn network of 5000+ followers, where I share valuable insights, tips, and learning resources to help others grow.`,
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-20 px-4 md:px-10 mt-5 ml-0 mr-0 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1747619715083-3db63905a75a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8')",
      }}
    >
      <div className="backdrop-blur-lg bg-white/80 rounded-3xl max-w-5xl mx-auto p-10 shadow-2xl border border-gray-200">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10 underline decoration-teal-300"
          whileHover={{ scale: 1.05 }}
        >
          A Bit About Me
        </motion.h1>

        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            custom={index}
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} // 👈 triggers every time it enters view
            className="mb-6 text-lg md:text-xl leading-relaxed text-gray-800"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default About_;
