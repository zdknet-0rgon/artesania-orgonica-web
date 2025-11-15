import OrgonitasBackgroundVideo from "@/components/OrgonitasBackgroundVideo";
import CemenitesBackgroundMedia from "@/components/CemenitesBackgroundMedia";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#222046] to-[#0f0c29] dark:from-[#0f0c29] dark:to-[#222046]">
      {/* HERO PRO: textos premium, fusión visual Planck + clásico */}
      <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-t from-indigo-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow mb-6">
          Artesanía Orgonica
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 mb-6">
          Energía orgónica aplicada para protección, armonización ambiental y bienestar integral.<br/>
          Productos desarrollados científicamente, hechos a mano en España y testados en campo.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="#productos" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg shadow text-lg font-bold transition-all hover:scale-105">Descubre la colección</Link>
        </div>
      </section>

      {/* MISIÓN / FILOSOFÍA */}
      <section className="py-20 dark:bg-muted-dark">
        <div className="container max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Nuestra Misión</h2>
          <p className="text-lg md:text-xl text-white/90 mb-3 text-center">Desde 2015 trabajamos la energía orgónica para crear herramientas funcionales, no ornamentales.</p>
          <p className="text-lg md:text-xl text-white/90 mb-3 text-center">Especialistas en dispositivos antirradiación, armonizadores espaciales y generadores orgónicos efectivos.</p>
          <p className="text-lg md:text-xl text-white/90 mb-3 text-center">Solo utilizamos metales, minerales y resinas técnicas — nada de adorno, únicamente eficiencia energética real.<br/>Inspirados en el trabajo de Wilhelm Reich, orientados a la mejora del entorno y la calidad de vida.</p>
        </div>
      </section>

      {/* PRODUCTOS: 2 categorías premium con fondo específico y textos finales top */}
      <section id="productos" className="py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Orgonitas Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <OrgonitasBackgroundVideo/>
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-3">Orgonitas</h2>
              <p className="text-white/90 max-w-sm mb-4">Dispositivos de protección contra radiación electromagnética, armonización de ambientes y asesoría personalizada. Cada producto incluye ficha técnica, certificado de autenticidad y garantía real.</p>
              <Link href="/products?category=orgonitas" className="inline-block mt-2 px-6 py-2 bg-indigo-600/90 hover:bg-blue-700 text-white rounded-xl font-semibold">Ver Orgonitas</Link>
            </div>
          </div>
          {/* Cemenites Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <CemenitesBackgroundMedia/>
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-3">Cemenites</h2>
              <p className="text-white/90 max-w-sm mb-4">Cemenites únicas para armonización avanzada y tecnología orgónica aplicada en arquitecturas y sistemas. Producto testado, ficha técnica y acompañamiento experto.</p>
              <Link href="/products?category=cemenites" className="inline-block mt-2 px-6 py-2 bg-pink-600/90 hover:bg-pink-700 text-white rounded-xl font-semibold">Ver Cemenites</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PROFESIONAL */}
      <section className="py-20 bg-primary dark:bg-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">¿Quieres una solución energética de verdad?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contacta por WhatsApp para consulta directa con expertos.<br/>Accede además al blog profesional sobre energía orgónica, casos y ciencia aplicada.</p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent transition-all hover:scale-105 shadow-lg"
          >
            Contáctanos por WhatsApp
          </a>
          <div className="mt-6">
            <Link href="/blog" className="underline">Ir al Blog Profesional</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
