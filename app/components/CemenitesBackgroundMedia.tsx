import Image from 'next/image';

const CemenitesBackgroundMedia = () => {
  // Si el navegador puede reproducir mp4, muestra el video, si no el fallback como imagen
  return (
    <div style={{ position: 'relative', width: '100vw', height: '400px', overflow: 'hidden', background: '#2d3242' }}>
      <video
        src="/Backgroundvideo-Cemenites.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.78)', display: 'block' }}
        poster="/images/cemenites-bg-fallback.jpg"
        onError={e => {
          e.target.style.display = 'none';
          const fallback = document.getElementById('cemenites-fallback-image');
          if (fallback) fallback.style.display = 'block';
        }}
      />
      <Image
        id="cemenites-fallback-image"
        src="/images/cemenites-bg-fallback.jpg"
        alt="Background Cemenites Fallback"
        layout="fill"
        objectFit="cover"
        priority
        style={{display:'none',zIndex:0}}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15,18,38,0.32)' }}></div>
    </div>
  );
};

export default CemenitesBackgroundMedia;
