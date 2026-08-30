const loader=document.getElementById("loader");setTimeout(()=>loader.classList.add("hide"),700);
const start=document.getElementById("start");start.addEventListener("click",()=>document.getElementById("begin").scrollIntoView({behavior:"smooth"}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
const bar=document.getElementById("bar");window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(scrollY/h*100)+"%"},{passive:true});
const glow=document.querySelector(".cursor-glow");window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});
const lb=document.getElementById("lightbox"),img=document.getElementById("lightboxImg"),cap=document.getElementById("lightboxCaption");document.querySelectorAll(".photo").forEach(p=>p.addEventListener("click",()=>{img.src=p.dataset.full;cap.textContent=p.querySelector("b").textContent;lb.classList.add("open")}));document.getElementById("close").onclick=()=>lb.classList.remove("open");lb.addEventListener("click",e=>{if(e.target===lb)lb.classList.remove("open")});
const musicBtn=document.getElementById("musicBtn"),bgm=document.getElementById("bgm");musicBtn.title="Музыка добавится, когда ты выберешь вашу песню";musicBtn.onclick=()=>alert("Я оставил место для вашей песни. Когда скажешь название/пришлёшь файл, вставим её сюда ❤️");

const intro=document.getElementById('cinemaIntro');
const enter=document.getElementById('enterStory');
const music=document.getElementById('bgMusic');
const musicControl=document.getElementById('musicControl');

enter?.addEventListener('click',()=>{
  intro?.classList.add('hide');
  musicControl?.classList.add('show');
  music?.play().then(()=>musicControl.classList.add('playing')).catch(()=>{});
});
musicControl?.addEventListener('click',()=>{
  if(!music) return;
  if(music.paused){music.play().then(()=>musicControl.classList.add('playing')).catch(()=>{});}
  else{music.pause();musicControl.classList.remove('playing');}
});
document.getElementById('secretTrigger')?.addEventListener('click',()=>document.getElementById('secretOverlay')?.classList.add('open'));
document.getElementById('closeSecret')?.addEventListener('click',()=>document.getElementById('secretOverlay')?.classList.remove('open'));
