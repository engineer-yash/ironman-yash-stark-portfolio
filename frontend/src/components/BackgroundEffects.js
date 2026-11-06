import React from 'react';

/** Subtle superhero-tech ambience to layer behind page content. */
export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Arc-reactor-inspired ambient glows */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-blue-400 opacity-10 blur-3xl" />
      <div
        className="absolute right-20 top-40 h-24 w-24 animate-pulse rounded-full bg-red-500 opacity-15 blur-2xl"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-32 left-1/4 h-20 w-20 animate-pulse rounded-full bg-yellow-400 opacity-10 blur-2xl"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-20 right-1/3 h-28 w-28 animate-pulse rounded-full bg-purple-500 opacity-10 blur-3xl"
        style={{ animationDelay: '3s' }}
      />

      {/* Comic-style energy sparks */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute left-1/4 top-1/4 h-2 w-2 animate-ping rounded-full bg-brand-primary"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute right-1/4 top-3/4 h-1 w-1 animate-ping rounded-full bg-iron-gold"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute left-1/6 top-1/2 h-1.5 w-1.5 animate-ping rounded-full bg-blue-400"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* Subtle hexagonal tech pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc143c' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}