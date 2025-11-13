export default function Footer() {
  return (
    <footer style={{textAlign:'center',padding:'32px 12px',background:'#222',color:'#eee',borderTop:'1px solid #222',marginTop:'30px'}}>
      <div>© Artesanía Orgonica {new Date().getFullYear()} &bull; Todos los derechos reservados</div>
      <div style={{marginTop:8}}>
        <a href="/privacy" style={{color:'#73f',marginRight:18}}>Privacidad</a>
        <a href="/legal" style={{color:'#73f',marginLeft:18}}>Legal</a>
      </div>
    </footer>
  );
}
