'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" 
        style={{ animationDuration: '8s' }} 
      />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px] animate-pulse" 
        style={{ animationDuration: '10s', animationDelay: '2s' }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" 
        style={{ animationDuration: '12s', animationDelay: '4s' }} 
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scan line effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(6, 182, 212, 0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  )
}
