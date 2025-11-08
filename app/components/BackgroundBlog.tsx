import Image from 'next/image';

export default function BackgroundBlog() {
  return (
    <div style={{width:'100%',height:'420px',position:'relative',overflow:'hidden'}}>
      <Image src="/Background-Blog.jpg" alt="Background Blog" layout="fill" objectFit="cover" priority />
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.23)',zIndex:1}}></div>
    </div>
  );
}
