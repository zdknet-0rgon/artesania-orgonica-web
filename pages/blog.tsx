import BlogHeroVideo from '../components/BlogHeroVideo';
import React from 'react';

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4">
      <BlogHeroVideo />
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6">Energía Orgónica, Orgonitas y Activismo Ambiental</h2>
        <article className="text-lg space-y-5">
          <p>
            La <b>energía orgónica</b>, descubierta por el doctor Wilhelm Reich, representa una fuerza vital presente en la naturaleza y en todos los seres vivos. Reich, figura pionera de la psicoterapia y la investigación bioenergética, defendió que el <b>orgón</b> podía actuar como mecanismo equilibrador y protector.</p>
          <img src="/orgonite1.jpg" alt="Orgonita clásica artesanal" className="rounded-lg shadow mb-6 max-w-md" />
          <p>
            Desde 2015 nuestro proyecto ha trabajado la <b>creación artesanal de orgonitas</b> y la promoción del activismo medioambiental llamado <b>gifting</b>, que consiste en la colocación estratégica de dispositivos orgónicos con fines ecológicos, sociales y de elevación vibracional.</p>
          <img src="/wilhelm-reich.jpg" alt="Wilhelm Reich, referencia histórica" className="rounded-lg shadow mb-4 max-w-md" />
          <p>
            Las orgonitas, compuestas de resinas, metales y cristales, transforman y armonizan la energía del entorno. Son utilizadas globalmente en proyectos de <b>concienciación ambiental</b> y protección de espacios naturales.</p>
          <img src="/activismo-orgon.jpg" alt="Activismo orgónico y gifting ambiental" className="rounded-lg shadow mb-4 max-w-md" />
          <p>
            La importancia del <b>activismo orgónico</b> reside en la concienciación colectiva, el compromiso ecológico y el valor de la acción manual y solidaria. Nuestra comunidad impulsa talleres, acciones de gifting y divulgación profesional para fortalecer esta conciencia.</p>
          <img src="/grupo-artesania.jpg" alt="Grupo de artesanos y gifting" className="rounded-lg shadow mb-4 max-w-md" />
          <p>
            <b>Wilhelm Reich</b> revolucionó la ciencia y el pensamiento alternativo sobre la energía vital, siendo hoy inspiración para miles de personas y colectivos que buscan mejorar la calidad ambiental y espiritual del planeta.</p>
        </article>
      </section>
    </main>
  );
}
