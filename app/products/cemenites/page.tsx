import CemenitesBackgroundMedia from '@/components/CemenitesBackgroundMedia';

export default function CemenitesPage() {
  return (
    <>
      <CemenitesBackgroundMedia />
      <div style={{position:'relative',zIndex:2,padding:'3vw',maxWidth:900,margin:'auto'}}>
        Cemenites Productos Page
        {/* Aquí irán los detalles y productos Cemenites */}
      </div>
    </>
  );
}
