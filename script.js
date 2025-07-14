


/*scroll animacion */
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // También se ejecuta al cargar la página


/* Menú móvil: apertura/cierre con clic*/

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    this.classList.toggle('open'); // Cambia icono si se desea
});

/* Cerrar el menú móvil al hacer clic en un enlace*/

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.classList.remove('open');
    });
});

// ============================================
// 4. Validación del formulario de contacto
// ============================================
const contactForm = document.getElementById('contact-form');
const submitText = document.getElementById('submit-text');
const loadingSpinner = document.getElementById('loading-spinner');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpiar errores previos
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.classList.add('hidden'));

    // Ocultar mensajes previos
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // Validaciones de campos
    let isValid = true;

    const nameInput = document.getElementById('name');
    if (!nameInput.value.trim()) {
        showError(nameInput, 'Este campo es obligatorio');
        isValid = false;
    }

    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Este campo es obligatorio');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Por favor, ingrese un correo electrónico válido');
        isValid = false;
    }

    const subjectInput = document.getElementById('subject');
    if (!subjectInput.value.trim()) {
        showError(subjectInput, 'Este campo es obligatorio');
        isValid = false;
    }

    const messageInput = document.getElementById('message');
    if (!messageInput.value.trim()) {
        showError(messageInput, 'Este campo es obligatorio');
        isValid = false;
    }

    // Si todo está correcto, simula el envío del formulario
    if (isValid) {
        submitText.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');

        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Simula una solicitud de red (API)
        setTimeout(function() {
            submitText.classList.remove('hidden');
            loadingSpinner.classList.add('hidden');

            if (Math.random() < 0.9) {
                successMessage.classList.remove('hidden');
                contactForm.reset();
                localStorage.removeItem('contactFormData');
            } else {
                errorMessage.classList.remove('hidden');
            }

            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1500);
    }
});

// Función para mostrar mensaje de error debajo de un campo
function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// ============================================
// 5. Recuperar datos guardados en localStorage al recargar
// ============================================
window.addEventListener('load', function() {
    const savedFormData = localStorage.getItem('contactFormData');
    if (savedFormData) {
        try {
            const formData = JSON.parse(savedFormData);
            document.getElementById('name').value = formData.name || '';
            document.getElementById('email').value = formData.email || '';
            document.getElementById('subject').value = formData.subject || '';
            document.getElementById('message').value = formData.message || '';
        } catch (error) {
            console.error('Error al analizar los datos guardados:', error);
            localStorage.removeItem('contactFormData');
        }
    }
});

// ============================================
// 6. Desplazamiento suave al hacer clic en enlaces internos
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste por header fijo
                behavior: 'smooth'
            });
        }
    });
});


/* Este fragmento usualmente va en el archivo tailwind.config.js */
module.exports = {

    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',
                accent: '#F59E0B',
                dark: '#1F2937'
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            }
        }
    },
    plugins: [],
    
}


// 8. Otra función reveal (alternativa)

let lastScrollTop = 0;

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });

    // Controlar visibilidad de la imagen izquierda

    let lastScrollTop = 0;
  const imagen = document.getElementById('imagen-izquierda');

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll hacia abajo → ocultar
      imagen.classList.add('translate-x-[-100%]', 'opacity-0');
      imagen.classList.remove('translate-x-0', 'opacity-100');
    } else {
      // Scroll hacia arriba → mostrar
      imagen.classList.remove('translate-x-[-100%]', 'opacity-0');
      imagen.classList.add('translate-x-0', 'opacity-100');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);


  
}



  



