
export const AtmosphereBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-b from-slate-900 to-blue-950">
      {/* Orb 1 - Top Left (Blue) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 bg-blue-600 animate-float animate-pulse transition-all duration-1000 ease-in-out"
        style={{ animationDelay: '0s', animation: 'float 20s infinite ease-in-out' }}
      ></div>

      {/* Orb 2 - Top Right (Indigo) */}
      <div 
        className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 bg-indigo-600 animate-float animate-pulse transition-all duration-1000 ease-in-out"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Orb 3 - Middle Left (Teal) */}
      <div 
        className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 bg-teal-500 animate-float animate-pulse transition-all duration-1000 ease-in-out"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Orb 4 - Middle Right (Blue) */}
      <div 
        className="absolute top-[50%] right-[-10%] w-[550px] h-[550px] rounded-full blur-[100px] opacity-40 bg-blue-600 animate-float animate-pulse transition-all duration-1000 ease-in-out"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Orb 5 - Bottom Left (Indigo) */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 bg-indigo-600 animate-float animate-pulse transition-all duration-1000 ease-in-out"
        style={{ animationDelay: '3s' }}
      ></div>

      {/* Orb 6 - Bottom Right (Teal) */}
      <div 
        className="absolute bottom-[5%] right-[20%] w-[450px] h-[450px] rounded-full blur-[100px] opacity-30 bg-teal-500 animate-float animate-pulse transition-all duration-1000 ease-in-out"
        style={{ animationDelay: '5s' }}
      ></div>
    </div>
  );
};
