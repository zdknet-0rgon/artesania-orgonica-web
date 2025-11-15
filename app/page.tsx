import OrgonitasBackgroundVideo from "@/components/OrgonitasBackgroundVideo";
import CemenitesBackgroundMedia from "@/components/CemenitesBackgroundMedia";
import ProductGallery from "@/components/ProductGallery";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#222046] to-[#0f0c29] dark:from-[#0f0c29] dark:to-[#222046]">
      {/* HERO Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-24">
        {/* Aquí puedes alternar fondo dark/light con lógica de theme o directamente si prefieres */}
        {/* <BackgroundHeroDark /> o <BackgroundHeroLight /> */}
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-t from-indigo-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow mb-6">
          Energía Orgónica Handmade
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 mb-6">
          Dispositivos de orgonita científicos y artesanales. Transforma tu entorno con protección, armonía y bienestar real.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="#productos" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg shadow text-lg font-bold transition-all hover:scale-105">Explorar Productos</Link>
        </div>
        <div className="flex flex-row gap-8 mt-8 justify-center items-center">
          <div className="text-center bg-black/40 p-4 rounded-2xl"> <div className="text-3xl font-bold text-white">100%</div> <div className="text-white text-xs">Handmade Artesanal</div> </div>
          <div className="text-center bg-black/40 p-4 rounded-2xl"> <div className="text-3xl font-bold text-white">9+ </div> <div className="text-white text-xs">Años de experiencia</div> </div>
          <div className="text-center bg-black/40 p-4 rounded-2xl"> <div className="text-3xl font-bold text-white">∞</div> <div className="text-white text-xs">Garantía premium</div> </div>
        </div>
      </section>

      {/* PRODUCTOS: solo 2 categorías principales con fondo específico */}
      <section id="productos" className="py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Orgonitas Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <OrgonitasBackgroundVideo/>
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-3">Orgonitas</h2>
              <p className="text-white/80 max-w-sm mb-4">Orgonitas científicas 100% funcionales, para ambientes armonizados y máxima protección EMF.</p>
              <Link href="/products?category=orgonitas" className="inline-block mt-2 px-6 py-2 bg-indigo-600/90 hover:bg-blue-700 text-white rounded-xl font-semibold">Ver Orgonitas</Link>
            </div>
          </div>
          {/* Cemenites Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <CemenitesBackgroundMedia/>
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-3">Cemenites</h2>
              <p className="text-white/80 max-w-sm mb-4">Cemenites únicas para armonización avanzada y tecnología orgónica aplicada en arquitecturas y sistemas.</p>
              <Link href="/products?category=cemenites" className="inline-block mt-2 px-6 py-2 bg-pink-600/90 hover:bg-pink-700 text-white rounded-xl font-semibold">Ver Cemenites</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
