'use strict'

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});


const seccion = document.querySelector(".cuerpo");

let efectoScroll = (section) => {
  window.addEventListener("scroll", () => {
    let pixel = window.scrollY;
    let alturaV = window.innerHeight;
    let dist = seccion.offsetTop;

    if (pixel >= dist - (alturaV/2) ) {
      seccion.classList.add("activo");
    }
    
  });
};
efectoScroll();

const about = document.querySelector(".cincuenta.uno");
const foto = document.querySelector(".cincuenta.dos");

window.addEventListener("scroll", () => {
  let pixel = window.scrollY;
  let altoV = window.innerHeight;
  let dist = about.offsetTop;

  let calculo = dist - altoV / 1.5;

  // if (pixel >= calculo) {
  //   about.classList.add("activo");
  // }
  if (pixel >= dist - altoV) {
    about.classList.add("activo");
  }
});
window.addEventListener("scroll", () => {
  let pixel = window.scrollY;
  let altoV = window.innerHeight;
  let dist = foto.offsetTop;

  let calculo = dist - altoV / 1.5;

  if (pixel >= calculo) {
    foto.classList.add("activo");
  }
});

const boton = document.querySelector('.boton')
const linea1 = document.querySelector('.linea1')
const linea2 = document.querySelector('.linea2')
const linea3 = document.querySelector('.linea3')
const cortinilla = document.querySelector('.cortinilla')
const menucortina = document.querySelector('.menucortina')
const li1 = document.querySelector('.li.uno')
const li2 = document.querySelector('.li.dos')

boton.addEventListener('click',()=>{
    linea1.classList.toggle('activo')
    linea2.classList.toggle('activo')
    linea3.classList.toggle('activo')
    cortinilla.classList.toggle('activo')
    menucortina.classList.toggle('activo')
})
li1.addEventListener('click', ()=>{
  cortinilla.classList.remove('activo')
  menucortina.classList.remove('activo')
  linea1.classList.toggle('activo')
  linea2.classList.toggle('activo')
  linea3.classList.toggle('activo')
})
li2.addEventListener('click', ()=>{
  cortinilla.classList.remove('activo')
  menucortina.classList.remove('activo')
  linea1.classList.toggle('activo')
  linea2.classList.toggle('activo')
  linea3.classList.toggle('activo')
})

const img       = document.querySelectorAll('.grid.uno .img')
const lightbox  = document.querySelector('.lightbox.uno')
const button    = document.querySelector('.lightbox.uno .button')
const imgLightbox = document.querySelector('.lightbox.uno .img')

img.forEach((v,i)=>{
    img[i].addEventListener('click',()=>{
        imgLightbox.src = img[i].src
        lightbox.classList.add('activo')
    })
})
button.addEventListener('click',()=>{
    lightbox.classList.remove('activo')
})
const img2       = document.querySelectorAll('.grid.dos .img')
const lightbox2  = document.querySelector('.lightbox.dos')
const button2    = document.querySelector('.lightbox.dos .button')
const imgLightbox2 = document.querySelector('.lightbox.dos .img')

img2.forEach((v,j)=>{
    img2[j].addEventListener('click',()=>{
        imgLightbox2.src = img2[j].src
        lightbox2.classList.add('activo')
    })
})
button2.addEventListener('click',()=>{
    lightbox2.classList.remove('activo')
})
const img3       = document.querySelectorAll('.grid.tres .img')
const lightbox3  = document.querySelector('.lightbox.tres')
const button3    = document.querySelector('.lightbox.tres .button')
const imgLightbox3 = document.querySelector('.lightbox.tres .img')

img3.forEach((v,i)=>{
    img3[i].addEventListener('click',()=>{
        imgLightbox3.src = img3[i].src
        lightbox3.classList.add('activo')
    })
})
button3.addEventListener('click',()=>{
    lightbox3.classList.remove('activo')
})

const tarjetauno = document.querySelector('.tarjeta.uno')
const grid1 = document.querySelector('.desplegado.uno')
const tarjetados = document.querySelector('.tarjeta.dos')
const grid2 = document.querySelector('.desplegado.dos')
const tarjetatres = document.querySelector('.tarjeta.tres')
const grid3 = document.querySelector('.desplegado.tres')
const works = document.querySelector('.works')
const btnvolver1 = document.querySelector('.botonvolver.uno')
const btnvolver2 = document.querySelector('.botonvolver.dos')
const btnvolver3 = document.querySelector('.botonvolver.tres')

tarjetauno.addEventListener('click', ()=>{
    grid1.classList.toggle('activo')
})
tarjetados.addEventListener('click', ()=>{
  grid2.classList.toggle('activo')
})
tarjetatres.addEventListener('click', ()=>{
  grid3.classList.toggle('activo')
})
btnvolver1.addEventListener('click', ()=>{
    grid1.classList.toggle('activo')
})
btnvolver2.addEventListener('click', ()=>{
  grid2.classList.toggle('activo')
})
btnvolver3.addEventListener('click', ()=>{
  grid3.classList.toggle('activo')
})

