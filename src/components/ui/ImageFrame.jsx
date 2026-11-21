import { useState } from 'react';

export default function ImageFrame({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  className = '',
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-sand-200/50 ${aspect} ${className}`}>
      {/* Error state */}
      {error ? (
        <div className="absolute inset-0 bg-sand-100 flex items-center justify-center">
          <span className="text-xs text-sand-400 tracking-wider uppercase">Photo</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`
            absolute inset-0 w-full h-full object-cover transform-gpu
            transition-all duration-500 ease-out hover:scale-[1.02]
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
      )}

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950/15 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
