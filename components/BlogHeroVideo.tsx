import React from 'react';

export default function BlogHeroVideo() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden mb-10">
      <video autoPlay loop muted playsInline poster="/blogposter.jpg" className="absolute w-full h-full object-cover">
        <source src="/Backgroundvideo-Blog.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center z-10 text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg mb-2">Blog Artesanía Orgónica</h1>
        <h2 className="text-xl font-semibold drop-shadow">Orgón, Conciencia & Activismo</h2>
      </div>
    </div>
  );
}
