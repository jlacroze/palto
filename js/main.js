// ANIMATION
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".fade-in").forEach(el=>{
  observer.observe(el);
});

// BURGER
const burger=document.getElementById("burger");
const nav=document.getElementById("nav");

burger.addEventListener("click",()=>{
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// NAV SCROLL
document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",(e)=>{
    e.preventDefault();

    const target=document.querySelector(link.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior:"smooth"
    });

    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// ACTIVE LINK
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
  let current="";

  sections.forEach(section=>{
    if(scrollY>=section.offsetTop-100){
      current=section.id;
    }
  });

  links.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")==="#"+current){
      link.classList.add("active");
    }
  });
});

// PROGRESS BAR
const bar=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{
  const total=document.body.scrollHeight-window.innerHeight;
  const progress=(window.scrollY/total)*100;
  bar.style.width=progress+"%";
});