import React from 'react';
import Head from 'next/head';

// Video background (auto-reproducible con overlay y fallback imagen)
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
        <meta name="description" content="Historia, fundamentos y actualidad del orgón, energía orgónica y orgonitas. Descubre el activismo medioambiental y la artesanía orgónica manual desde 2015." />
      </Head>
      <BlogBackgroundVideo />
      <main style={{ padding: '3vw', maxWidth: 900, margin: 'auto', background: 'rgba(255,255,255,0.88)', borderRadius: 20 }}>
        <h1 style={{fontWeight:'bold',fontSize:36,color:'#294'}}>Blog Artesanía Orgónica</h1>
        <section>
          <h2>¿Qué es la energía orgónica y el orgón?</h2>
          <p>
            La <b>energía orgónica</b> fue descrita por <b>Wilhelm Reich</b>, científico y psicoanalista, como una fuerza vital fundamental presente en la naturaleza y el organismo humano. El "orgón" es el nombre dado a esta energía sutil, relacionada con salud, equilibrio y procesos naturales como el clima y las emociones humanas [2][7][13][19][21]. Reich fundó sus estudios en base a observaciones clínicas, experimentos con acumuladores y protocolos que impactaron en la psicoterapia y la biología moderna. <br/>
            En el siglo XXI, la energía orgónica ha vuelto a cobrar relevancia por su potencial ecológico, aplicaciones prácticas y por el movimiento de <b>concienciación ambiental</b> nacido en Europa y extendido por todo el mundo [8][11][14][17][20].
          </p>
        </section>
        <section>
          <h2>Orgonitas, artesanía y activismo ambiental</h2>
          <p>
            Las <b>orgonitas</b> son artefactos hechos a mano, compuestos de resina, metales y cuarzos, desarrollados desde la década del 2000 para <b>armonizar espacios</b>, mejorar el bienestar energético y apoyar la salud ambiental. Desde nuestro <b>taller artesanal</b> en España hemos impulsado el activismo orgónico y los "gifting" de orgonitas desde 2015, colaborando con redes de ecología, bioconstrucción y colectivos medioambientales.
            <br/>El proceso artesanal respeta la energía, los símbolos y los recursos del entorno, generando piezas únicas y eco-responsables que contribuyen a la protección contra la contaminación electromagnética y el estrés ambiental.
          </p>
          <img src="/images/orgonita-activismo.jpg" alt="Activismo y gifting orgonitas" style={{ width: '100%', marginTop:20, borderRadius:12, boxShadow:'0 4px 20px #48f4' }} />
        </section>
        <section>
          <h2>Wilhelm Reich: legado y actualidad</h2>
          <p>
            <b>Wilhelm Reich</b> fue pionero en comprender el vínculo entre energía vital y salud mental, denunciando la desinformación y promoviendo la autorregulación, el respeto por la naturaleza y la integración mente-cuerpo. Su obra inspira a generaciones de activistas, terapeutas y artesanos orgónicos que continúan investigando y luchando contra la contaminación y el olvido de la energía vital [2][10][13][16][19][21].
            <br/>Hoy, el <b>activismo orgónico</b> implica compartir conocimiento, regalar orgonitas en entornos naturales y educar sobre el poder regenerador de la energía orgónica, arte y sostenibilidad.
          </p>
          <img src="/images/wilhelm-reich.jpg" alt="Wilhelm Reich - Científico del Orgón" style={{ width:'80%', margin:'30px 10%', borderRadius:30 }} />
        </section>
        <section>
          <h2>Nuestro trabajo artesanal & gifting desde 2015</h2>
          <p>
            Desde <b>2015</b>, Artesanía Orgónica ha impulsado el activismo orgónico manual en España y otros países, fabricando miles de orgonitas, colaborando con iniciativas ambientales y generando comunidades de conciencia ecológica.<br/>
            El <b>gifting</b> orgónico –regalos de orgonitas en lugares estratégicos– forma parte de nuestro compromiso con la regeneración energética de la tierra, la protección de entornos públicos y la educación ambiental profesional.<br/>
            Te invitamos a descubrir más, participar y compartir experiencias en nuestro blog donde ciencia, arte y activismo se unen desde la pasión y el respeto por la naturaleza.
          </p>
          <img src="/images/gifting-orgonitas.jpg" alt="Gifting orgonitas manual" style={{ width:'100%', marginTop:32, borderRadius:16 }} />
        </section>
        <section>
          <h2>Referencias y enlaces de interés</h2>
          <ul>
            <li><a href="https://es.wikipedia.org/wiki/Org%C3%B3n" target="_blank">Wikipedia: Orgón</a></li>
            <li><a href="https://psicotepal.org/wilhelm-reich" target="_blank">Wilhelm Reich y la energía vital</a></li>
            <li><a href="https://mundoorgon.com" target="_blank">Mundo Orgón</a></li>
            <li><a href="https://shamtam.com/piramide-orgonica" target="_blank">Guía de pirámides orgónicas</a></li>
            <li><a href="https://ecologistasenaccion.org/" target="_blank">Ecologistas en Acción</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
