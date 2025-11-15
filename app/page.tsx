import ProductGallery from "@/components/ProductGallery";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO sección nicho */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-transparent dark:from-accent-dark/40" />
        <div className="container relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary dark:text-primary-light">
            Artesanía Orgonica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground/80">
            Energía orgónica aplicada para protección, armonización ambiental y bienestar integral. <br/>
            Productos desarrollados científicamente, hechos a mano en España y testados en campo.
          </p>
          <a
            href="#productos"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Descubre la colección
          </a>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="py-20 bg-muted dark:bg-muted-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary dark:text-primary-light">
                Nuestra Misión
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                Desde 2015 trabajamos la energía orgónica para crear herramientas funcionales, no ornamentales.<br />Especialistas en dispositivos antirradiación, armonizadores espaciales y generadores orgónicos efectivos.
              </p>
              <p className="text-lg leading-relaxed">
                Solo utilizamos metales, minerales y resinas técnicas — nada de adorno, únicamente eficiencia energética real. <br/> Inspirados en el trabajo de Wilhelm Reich, orientados a la mejora del entorno y la calidad de vida.
              </p>
            </div>
            <div className="relative h-[320px] rounded-lg overflow-hidden shadow-2xl animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS FUNCIONALES */}
      <section id="productos" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 text-primary dark:text-primary-light">
              Soluciones Orgónicas
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Dispositivos de protección contra radiación electromagnética, armonización de ambientes y asesoría personalizada. <br/>
              Cada producto incluye ficha técnica, certificado de autenticidad y garantía real.
            </p>
          </div>
          <ProductGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary dark:bg-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            ¿Quieres una solución energética de verdad?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta por WhatsApp para consulta directa con expertos. <br/> Accede además al blog profesional sobre energía orgónica, casos y ciencia aplicada.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent transition-all hover:scale-105 shadow-lg"
          >
            Contáctanos por WhatsApp
          </a>
          <div className="mt-6">
            <Link href="/blog">Ir al Blog Profesional</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
