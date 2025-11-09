import Image from 'next/image';

const CemenitesBackgroundMedia = () => {
  // Fallback para el video background de Cemenites (modificable si el mp4 se sube en el futuro)
  return (
    <div style={{ position: 'relative', width: '100vw', height: '400px', overflow: 'hidden', background: '#2d3242' }}>
      <Image src="/images/cemenites-bg-fallback.jpg" alt="Background Cemenites Fallback" layout="fill" objectFit="cover" priority />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15,18,38,0.32)' }}></div>
    </div>
  );
};

export default CemenitesBackgroundMedia;
