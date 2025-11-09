const OrgonitasBackgroundVideo = () => (
  <div style={{ position: 'relative', width: '100vw', height: '400px', overflow: 'hidden' }}>
    <video
      src="/Backgroundvideo-Orgonitas.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.78)' }}
      poster="/images/orgonita-activismo.jpg"
    />
    <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(38,41,54,0.33)'}}></div>
  </div>
);

export default OrgonitasBackgroundVideo;
