import { motion } from 'framer-motion';
import { Avatar } from './components/Avatar';
import { BioContent } from './components/BioContent';
import { SocialLinks } from './components/SocialLinks';
import { DiscordPresence } from './components/DiscordPresence';
import { ParticleBackground } from './components/ParticleBackground';
import { MouseTrail } from './components/MouseTrail';

function App() {
  return (
    <>
      <ParticleBackground />
      <MouseTrail />
      <motion.div 
        className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar />
        <BioContent />
        <SocialLinks />
        <DiscordPresence />
      </motion.div>
    </>
  );
}

export default App;