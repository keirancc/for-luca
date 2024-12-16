import { useLanyard } from 'react-use-lanyard';
import { motion } from 'framer-motion';

const DISCORD_ID = '1230319937155760131'; // PUt your discord id here luca

export const DiscordPresence = () => {
  const { loading, status } = useLanyard({
    userId: DISCORD_ID,
    socket: true,
  });

  if (loading) {
    return (
      <div className="animate-pulse bg-white/5 rounded-lg p-4 backdrop-blur-lg">
        <div className="h-4 w-24 bg-white/10 rounded" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 rounded-lg p-4 backdrop-blur-lg"
    >
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${
          status?.discord_status === 'online' ? 'bg-green-400' :
          status?.discord_status === 'idle' ? 'bg-yellow-400' :
          status?.discord_status === 'dnd' ? 'bg-red-400' :
          'bg-gray-400'
        }`} />
        <span className="text-white/80">
          {status?.discord_status || 'offline'}
        </span>
      </div>
      {status?.activities?.[0] && (
        <div className="mt-2 text-sm text-white/60">
          {status.activities[0].name}
        </div>
      )}
    </motion.div>
  );
};