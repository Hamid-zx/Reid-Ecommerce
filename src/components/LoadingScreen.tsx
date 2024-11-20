import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center animate-fade-up">
        <div className="relative mb-4">
          <ShoppingBag className="w-16 h-16 text-white animate-pulse" />
          <div className="absolute -inset-4 border-4 border-white rounded-full animate-[spin_3s_linear_infinite]" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">
          <span className="text-white">R</span>
          <span className="text-gray-400">eid</span>
        </h1>
        <p className="text-gray-400">Fashion Store</p>
      </div>
    </div>
  );
}