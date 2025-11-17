document.addEventListener('DOMContentLoaded', () => {
    const libroPistas = document.querySelector('.libro-pistas');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const form = document.querySelector('.contact-form');
    
    // Contará automáticamente el número de pares de páginas (debería ser 3)
    const paresPaginas = document.querySelectorAll('.pagina-par'); 
    let indiceActual = 0; 
    const totalPares = paresPaginas.length; 

    // ------------------------------------------------------------------
    // FUNCIÓN DE NAVEGACIÓN (Slide con Fade/Jump)
    // ------------------------------------------------------------------
    function actualizarVista() {
        // Desactivamos la transición para el movimiento
        libroPistas.style.transition = 'none'; 
        
        // Calculamos el nuevo desplazamiento
        const desplazamiento = -indiceActual * 100; 
        libroPistas.style.transform = `translateX(${desplazamiento}%)`;

        // Forzamos el navegador a aplicar el cambio instantáneo
        void libroPistas.offsetWidth; 

        // Reactivamos la transición de opacidad para el efecto de "Fade In"
        libroPistas.style.transition = 'opacity 0.4s ease-in-out';
        libroPistas.style.opacity = '1';

        actualizarBotones();
    }

    // Evento para el botón "Siguiente"
    nextBtn.addEventListener('click', () => {
        if (indiceActual < totalPares - 1) {
            // 1. Oculta el par actual con un desvanecimiento
            libroPistas.style.opacity = '0';
            
            // 2. Espera a que el desvanecimiento termine (400ms)
            setTimeout(() => {
                indiceActual++;
                actualizarVista();
            }, 400); 
        }
    });

    // Evento para el botón "Anterior"
    prevBtn.addEventListener('click', () => {
        if (indiceActual > 0) {
             // 1. Oculta el par actual con un desvanecimiento
            libroPistas.style.opacity = '0';
            
            // 2. Espera a que el desvanecimiento termine (400ms)
            setTimeout(() => {
                indiceActual--;
                actualizarVista();
            }, 400); 
        }
    });

    function actualizarBotones() {
        prevBtn.disabled = indiceActual === 0;
        nextBtn.disabled = indiceActual === totalPares - 1;
    }

    // ------------------------------------------------------------------
    // FUNCIÓN DE FORMULARIO (Si usas Formspree)
    // ------------------------------------------------------------------
    const statusMessage = document.createElement('p');
    statusMessage.style.cssText = 'color: var(--color-azul-acento); margin-top: 15px; font-weight: bold;';
    
    // Si el formulario de contacto existe en el HTML:
    if (form) { 
        form.parentNode.insertBefore(statusMessage, form.nextSibling);

        form.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            const data = new FormData(e.target);
            statusMessage.textContent = "Enviando mensaje...";

            try {
                const response = await fetch(e.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusMessage.textContent = "¡Mensaje enviado con éxito! Te contactaré pronto.";
                    form.reset(); 
                } else {
                    statusMessage.textContent = "Hubo un error al enviar el mensaje.";
                }
            } catch (error) {
                statusMessage.textContent = "Error de conexión. Inténtalo de nuevo.";
            }
        });
    }

    // Inicialización al cargar la página
    actualizarVista();
});