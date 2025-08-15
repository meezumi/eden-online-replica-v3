// src/components/Loader.tsx
import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

interface LoaderProps {
  onLoaded: () => void;
}

export function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer: number = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onLoaded();
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="text-center font-mono text-white">
        <p className="mb-4">Connecting to Eden Server ...</p>
        <Progress value={progress} className="w-[300px] bg-gray-800 border border-gray-600 [&>div]:bg-fuchsia-500" />
        <p className="mt-2 text-lg">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}