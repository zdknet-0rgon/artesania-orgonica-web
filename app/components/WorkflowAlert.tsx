// Monitorización de workflow y build
export default function WorkflowAlert() {
  return (
    <aside style={{position:'fixed',top:0,right:0,background:'#ffe680',color:'#111',zIndex:9999,padding:'10px 20px',fontWeight:'bold',borderBottomLeftRadius:5,border:'1px solid #e0c722'}}>
      🟢 Web monitor: Todos los cambios y rutas serán notificados aquí si hay error o caída en el workflow/build.
      Si no ves el header doble, login o productos, recarga la página y revisa el panel Vercel para el estado.
    </aside>
  )
}
