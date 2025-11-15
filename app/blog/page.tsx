"use client";
import React from 'react';
import Head from 'next/head';

const BlogHeroAnimated = () => (
  <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center bg-black">
    {/* Aquí podríamos montar Planck.js/Canvas/Partículas si el usuario pasa archivo, de momento video fallback */}
    <video
      src="/Backgroundvideo-Blog.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      poster="/images/reich-bg-fallback.jpg"
      style={{filter:'brightness(0.5)'}}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
    <h1 className="relative z-10 font-extrabold text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-400 to-indigo-400 drop-shadow-2xl text-center px-2">
      Blog · Energía Orgónica
    </h1>
  </div>
);

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog · Energía Orgónica | Activismo & Historia</title>
        <meta name="description" content="Blog sobre energía orgónica, orgonitas y activismo ambiental. Historia, arte y consciencia desde 2015." />
      </Head>
      <BlogHeroAnimated />
      <main className="max-w-3xl mx-auto py-8 px-6 md:px-12 rounded-2xl bg-white/90 dark:bg-black/60 shadow-xl mt-[-5vh] z-10 relative">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900 dark:text-sky-300">Crónicas de la Orgonita Moderna</h2>
        {/* Aquí renderización profesional de posts/blog... */}
        <article className="mb-10">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-fuchsia-200 mb-2">¿Qué es la energía orgónica?</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">La energía orgónica es una forma natural de energía vital capaz de transformar y armonizar ambientes. Descubre su historia, aplicaciones y experimentos reales en nuestro blog.</p>
        </article>
        {/* Extiende aquí la lógica de los artículos/posts */}
      </main>
    </>
  );
}
