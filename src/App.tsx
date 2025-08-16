import { useState } from 'react';
import { Loader } from './components/Loader';
import { Button } from './components/ui/button';
import { useScramble } from './hooks/useScramble'; 
import { motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const headlineText = useScramble("Join the Dedsec Rebellion!");


  if (isLoading) {
    return <Loader onLoaded={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-black text-white min-h-screen font-mono flex flex-col">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-between items-center p-5 md:px-12 border-b border-gray-800"
      >
        <h1 className="text-2xl font-bold text-fuchsia-500">Eden Online</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-fuchsia-500 transition-colors">Home</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">The G.A.M.E</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">E.V.M.</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">Eden Mart</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">Learn</a>
        </nav>
       </motion.header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-fuchsia-500 mb-4 h-20 md:h-24"
        >
          {headlineText}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl mb-8 text-gray-300"
        >
          Jump into the console. Beat the system... and earn the Fck Eden reward!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.05, textShadow: "0 0 8px #ff00ff" }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-fuchsia-500 text-black hover:bg-white font-bold text-lg px-8 py-6">
            Hack
          </Button>
        </motion.div>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.4 }}
        className="text-center p-5 border-t border-gray-800 text-xs text-gray-500"
      >
        <div className="flex justify-center gap-4 mb-2">
          <a href="/" className="hover:text-white">UBISOFT.COM</a>
          <a href="/" className="hover:text-white">PRIVACY POLICY</a>
          <a href="/" className="hover:text-white">TERMS OF SERVICE</a>
        </div>
        <p>CaptainLaserhawk TM & © Ubisoft Entertainment. All Rights Reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;