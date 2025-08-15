// src/App.tsx
import { useState } from 'react';
// Update the import path to the correct location of Loader, for example:
import { Loader } from './components/Loader';
import { Button } from './components/ui/button';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onLoaded={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-black text-white min-h-screen font-mono flex flex-col">
      <header className="flex justify-between items-center p-5 md:px-12 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-fuchsia-500">Eden Online</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-fuchsia-500 transition-colors">Home</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">The G.A.M.E</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">E.V.M.</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">Eden Mart</a>
          <a href="#" className="hover:text-fuchsia-500 transition-colors">Learn</a>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-fuchsia-500 mb-4">
          Join the Dedsec Rebellion!
        </h2>
        <p className="max-w-xl mb-8 text-gray-300">
          Jump into the console. Beat the system... and earn the Fck Eden reward!
        </p>
        <Button size="lg" className="bg-fuchsia-500 text-black hover:bg-white font-bold text-lg px-8 py-6">
          Hack
        </Button>
      </main>
      <footer className="text-center p-5 border-t border-gray-800 text-xs text-gray-500">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:text-white">UBISOFT.COM</a>
          <a href="#" className="hover:text-white">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
        </div>
        <p>CaptainLaserhawk TM & © Ubisoft Entertainment. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;