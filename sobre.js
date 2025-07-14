document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Remover clases activas de todas las pestañas y contenidos
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
          t.setAttribute('tabindex', '-1');
        });
        contents.forEach(c => {
          c.classList.remove('active');
          c.classList.add('hidden');
        });
  
        // Agregar clases activas a la pestaña y contenido seleccionados
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
        contents[index].classList.add('active');
        contents[index].classList.remove('hidden');
      });
    });
  });

  
  

  /* para las imagenes esconder y informacion*/
  document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flip-card");
  
    flipCards.forEach(card => {
      card.addEventListener("click", function () {
        card.classList.toggle("active");
      });
    });
  });
  

 /* para images de eventos */
 
  document.addEventListener("DOMContentLoaded", () => {
    const verMasBtn = document.getElementById("verMasBtn");
    const galeria = document.getElementById("galeriaEventos");
    const cerrarBtn = document.getElementById("cerrarGaleria");

    verMasBtn.addEventListener("click", () => {
      galeria.classList.remove("hidden");
    });

    cerrarBtn.addEventListener("click", () => {
      galeria.classList.add("hidden");
    });
  });






  