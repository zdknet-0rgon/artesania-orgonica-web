'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { postId: string } }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<{ title: string; content: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulación fetch
    setTimeout(() => {
      if (params.postId === "demo") {
        setPost({ title: "Ejemplo de post dinámico", content: "Este es el contenido generado automáticamente. ¡Modifica este archivo para tener posts reales!" });
        setError(null);
      } else {
        setError("Este post no existe o está en construcción.");
        setPost(null);
      }
      setLoading(false);
    }, 900);
  }, [params.postId]);

  if (loading) return <div style={{ padding:100, textAlign:'center', color:'#294' }}>Cargando post...</div>;
  if (error) return <div style={{ padding:60, textAlign:'center', color:'#c11', fontWeight:'bold' }}>{error} <br/><button style={{marginTop:20}} onClick={()=>router.push('/blog')}>Volver al blog</button></div>;
  if (!post) return null;

  return (
    <section style={{ padding: 28, maxWidth: 740, margin: '80px auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 24px #1111' }}>
      <h2 style={{ fontSize:30, fontWeight:'bold', color:'#294'}}>{post.title}</h2>
      <article style={{ fontSize:18, marginTop: 20 }}>{post.content}</article>
      <button style={{marginTop:40}} onClick={()=>router.push('/blog')}>← Volver al blog</button>
    </section>
  );
}
