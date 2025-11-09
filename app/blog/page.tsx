"use client";
import React from 'react';
import Head from 'next/head';
import BackgroundBlog from "@/components/BackgroundBlog";

const BlogBackgroundVideo = () => (
  <div style={{ position: 'relative', width: '100vw', height: '60vh', overflow: 'hidden' }}>
    <video
      src="/Backgroundvideo-Blog.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
      poster="/images/reich-bg-fallback.jpg"
    />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(40,40,50,0.55)'
    }} />
  </div>
);

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog · Energía Orgónica | Activismo & Historia</title>
        <meta name="description" content="Blog sobre energía orgónica, orgonitas y activismo ambiental. Historia, arte y consciencia desde 2015." />
      </Head>
      <BackgroundBlog />
      <BlogBackgroundVideo />
      <main style={{ padding: '3vw', maxWidth: 900, margin: 'auto', background: 'rgba(255,255,255,0.92)', borderRadius: 18 }}>
        <h1 style={{fontWeight:'bold',fontSize:36,color:'#294'}}>Blog Artesanía Orgónica</h1>
        {/* ...resto del blog como antes... */}
      </main>
    </>
  );
}
