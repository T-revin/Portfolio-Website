
export const AtmosphereBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Orb 1 - Top Left */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-70 bg-blue-300/30 dark:bg-blue-900/20 animate-float"
        style={{ animationDelay: '0s' }}
      ></div>

      {/* Orb 2 - Top Right */}
      <div 
        className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-70 bg-purple-300/20 dark:bg-indigo-900/20 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Orb 3 - Middle Left */}
      <div 
        className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-60 bg-sky-200/40 dark:bg-slate-900/20 animate-float"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Orb 4 - Middle Right */}
      <div 
        className="absolute top-[50%] right-[-10%] w-[550px] h-[550px] rounded-full blur-[100px] opacity-60 bg-blue-300/30 dark:bg-blue-900/20 animate-float"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Orb 5 - Bottom Left */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-70 bg-purple-300/20 dark:bg-indigo-900/20 animate-float"
        style={{ animationDelay: '3s' }}
      ></div>

      {/* Orb 6 - Bottom Right */}
      <div 
        className="absolute bottom-[5%] right-[20%] w-[450px] h-[450px] rounded-full blur-[100px] opacity-60 bg-sky-200/40 dark:bg-slate-900/20 animate-float"
        style={{ animationDelay: '5s' }}
      ></div>
    </div>
  );
};
