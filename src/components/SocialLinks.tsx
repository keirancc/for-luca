import { motion } from 'framer-motion';
import { FaDiscord } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center space-x-6"
    >
      <motion.a
        href="https://discord.com/users/1230319937155760131"
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <FaDiscord className="w-8 h-8 text-white hover:text-blue-400 transition-colors duration-300" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Discord
        </span>
      </motion.a>
    </motion.div>
  );
};