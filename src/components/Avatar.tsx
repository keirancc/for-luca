import { motion } from 'framer-motion';

export const Avatar = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:bg-white/30 transition-all duration-300" />
      <motion.img
        src="https://keiran.live/profile.gif"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};