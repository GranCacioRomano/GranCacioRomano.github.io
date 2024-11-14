// Seleziona l'elemento <nav> e il pulsante di scorrimento
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Funzione che si attiva quando si scorre la pagina
window.onscroll = function () {
  // Controlla se l'utente ha scrollato più di 20px dalla cima
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky"); // Aggiunge la classe "sticky" alla barra di navigazione
    scrollBtn.style.display = "block"; // Mostra il pulsante di scorrimento
  } else {
    nav.classList.remove("sticky"); // Rimuove la classe "sticky" dalla barra di navigazione
    scrollBtn.style.display = "none"; // Nasconde il pulsante di scorrimento
  }
};
// Seleziona il corpo della pagina, la barra di navigazione, il pulsante del menu e il pulsante di chiusura del menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Funzione che si attiva al clic sul pulsante del menu
menuBtn.onclick = function () {
  navBar.classList.add("active"); // Aggiunge la classe "active" per mostrare il menu
  menuBtn.style.opacity = "0"; // Imposta l'opacità del pulsante a 0 (nascosto)
  menuBtn.style.pointerEvents = "none"; // Disabilita l'interazione con il pulsante
  body.style.overflow = "hidden"; // Disabilita lo scorrimento della pagina
  scrollBtn.style.pointerEvents = "none"; // Disabilita l'interazione con il pulsante di scorrimento
};
// Funzione per nascondere il menu di navigazione
const hideNavMenu = () => {
  navBar.classList.remove("active"); // Rimuove la classe "active" per nascondere il menu
  menuBtn.style.opacity = "1"; // Rende il pulsante del menu visibile
  menuBtn.style.pointerEvents = "auto"; // Riabilita l'interazione con il pulsante
  body.style.overflow = "auto"; // Riabilita lo scorrimento della pagina
  scrollBtn.style.pointerEvents = "auto"; // Riabilita l'interazione con il pulsante di scorrimento
};
// Assegna la funzione di chiusura del menu al pulsante di cancellazione
cancelBtn.onclick = hideNavMenu;
// Seleziona tutti i link nel menu di navigazione
let navLinks = document.querySelectorAll(".menu li a");

// Aggiunge un listener per ogni link del menu
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu); // Nasconde il menu al clic su qualsiasi link
});
// Facciaml