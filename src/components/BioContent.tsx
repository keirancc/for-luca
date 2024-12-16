import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export const BioContent = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center space-y-4"
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
      >
        Keiran
      </motion.h1>
      <div className="text-lg md:text-xl text-gray-300 h-20">
        <Typewriter
          options={{
            strings: [
              'Full Stack Developer',
              'Python enthusiast',
              'Professional dumbass',
              'Open Source Contributor'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>
      <motion.p 
        className="text-gray-400 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I like writing software I find useful
      </motion.p>
    </motion.div>
  );
};