/* ============================================================ */
/* CALCULADORA DE BANDIDAS · v2.0                                */
/* Sistema de puntaje data-driven: cada opción define sus        */
/* puntos y su texto, y los niveles se evalúan por rangos.       */
/* ============================================================ */

(() => {
    "use strict";

    /* ========================= */
    /* CONFIGURACIÓN DEL TEST    */
    /* ========================= */

    const PREGUNTAS = [
        {
            id: "registro1",
            etiqueta: "Color de pelo",
            opciones: {
                "1": { texto: "Rubia", puntos: 120 },
                "2": { texto: "Castaña", puntos: 80 },
                "3": { texto: "Negra", puntos: 60 },
                "4": { texto: "Rojiza", puntos: 90 },
                "5": { texto: "Otro color", puntos: 30 }
            }
        },
        {
            id: "registro2",
            etiqueta: "Tipo de pelo",
            opciones: {
                "1": { texto: "Liso", puntos: 50 },
                "2": { texto: "Ondulado", puntos: 90 },
                "3": { texto: "Churco", puntos: 60 },
                "4": { texto: "CALVAAAA", puntos: 30 }
            }
        },
        {
            id: "registro3",
            etiqueta: "Color de ojos",
            opciones: {
                "1": { texto: "Negros", puntos: 50 },
                "2": { texto: "Cafés", puntos: 80 },
                "3": { texto: "Verdes", puntos: 100 },
                "4": { texto: "Azules", puntos: 100 },
                "5": { texto: "Claritos", puntos: 120 }
            }
        },
        {
            id: "registro4",
            etiqueta: "Nariz",
            opciones: {
                "1": { texto: "Cortica", puntos: 100 },
                "2": { texto: "Normalita", puntos: 70 },
                "3": { texto: "Re grande", puntos: 50 }
            }
        },
        {
            id: "registro5",
            etiqueta: "Ciudad / origen",
            opciones: {
                "1": { texto: "Bumanguesa", puntos: 160 },
                "2": { texto: "Paisa", puntos: 170 },
                "3": { texto: "Costeña", puntos: 40 },
                "4": { texto: "Boyacense", puntos: 30 },
                "5": { texto: "Rola", puntos: 20 },
                "6": { texto: "Caleña", puntos: 70 },
                "7": { texto: "Venezolana", puntos: 10 },
                "8": { texto: "Otra nacionalidad", puntos: 50 }
            }
        },
        {
            id: "registro6",
            etiqueta: "Color de piel",
            opciones: {
                "1": { texto: "Blanquita", puntos: 70 },
                "2": { texto: "Morenita", puntos: 110 },
                "3": { texto: "Afrocolombiana", puntos: 60 },
                "4": { texto: "Amarillísima", puntos: 200 }
            }
        },
        {
            id: "registro7",
            etiqueta: "Altura",
            opciones: {
                "1": { texto: "Alta", puntos: 60 },
                "2": { texto: "Igual que tú", puntos: 70 },
                "3": { texto: "Bajita", puntos: 110 }
            }
        },
        {
            id: "registro8",
            etiqueta: "Tipo de cuerpo",
            opciones: {
                "1": { texto: "Flaca", puntos: 80 },
                "2": { texto: "Normalita", puntos: 60 },
                "3": { texto: "Gordita jijiji", puntos: 50 }
            }
        },
        {
            id: "registro9",
            etiqueta: "Edad",
            opciones: {
                "1": { texto: "Mayor que tú", puntos: 70 },
                "2": { texto: "Misma edad", puntos: 60 },
                "3": { texto: "Menor que tú (ventaja de edad)", puntos: 70 }
            }
        },
        {
            id: "registro10",
            etiqueta: "¿La extrañas?",
            opciones: {
                "si":   { texto: "sí la extrañas.. awwwww", puntos: 100 },
                "no":   { texto: "no la extrañas JAJJKAKJAK", puntos: 50 },
                "nose": { texto: "no sabe si la extraña (decisión de cobardes)", puntos: 75 }
            }
        },
        {
            id: "registro11",
            etiqueta: "Seguidores",
            opciones: {
                "si":   { texto: "Muy popular en redes", puntos: 150 },
                "no":   { texto: "No la conoce ni la mamá", puntos: 20 },
                "nose": { texto: "Popularidad bajo investigación", puntos: 80 }
            }
        }
    ];

    /* ========================= */
    /* NIVELES (rangos)          */
    /* ========================= */

    const NIVELES = [
        {
            min: 1000,
            nombre: "BANDIDA DE BANDIDAS",
            clase: "badge-top",
            mensajes: [
                (c) => `Vaya ${c.nombre}... bandida de bandidas... Es una mujer extraordinariamente inteligente, pero muy infieeeel; se podría considerar una de las peligrosas en su entorno, muy enfocada en la infidelidad. Buenos gustos eh... la verdad sus rasgos físicos son INCREÍBLES. PERO, buenos, mal no estás con ella.. ¿o sí? Y ten cuidado cuando pases por las puertas, tus cachos podrían dañarse jajaja.`,
                (c) => `¡¡LA BANDIDA DE BANDIDAS!! No hay duda ${c.nombre}: este es el último rango de estas chicas, son SUPER INFIELES DIOS MIO (lo digo por experiencia :c). Es muy hermosa eh... pero no cabe duda que si estás con ella tendrás unos cachos.. o quién sabe si ya los tienes jajajajaja. Mucho cuidado bro, y si fuiste novio de ella, qué bueno que te alejaste, quién sabe con quiénes estuvo mientras estaba contigo jajajaja.`,
                (c) => `LA MISMA INALCANZABLE.. Qué mujer tan bella dios mio, es de las que las siguen mil hombres al pie, y juega con todos. La verdad tienes buenos gustos, pero.... pobre el que ande con ella... tendrá tremendos cachos ni los hp. De igual forma sola no va a estar, y si tú estás con ella... eres el mismísimo ${c.nombre}, EL SANTO CACHÓN KAKAKAKAKJ.`
            ]
        },
        {
            min: 900,
            nombre: "BANDIDA EXTRA PELIGROSA",
            clase: "badge-high",
            mensajes: [
                (c) => `Bandida EXTRA peligrosa, es de las más infieles que puede haber (${c.sujeto}). Puede jugar con quien quiera y manipularlo, pero parece que eres uno de ellos pq te hizo hacer el test con los rasgos de ella.... estás domado por ella bro, eso no es de ghaster. De igual forma sigue siendo una mujer hermosa, juguetona y sobretodo INFIEL, común de ellas.`,
                (c) => `RED FLAG, REPITO, ¡¡REDFLAG!!.... ¿CÓMO TE PUEDE GUSTAR ELLA? Noooo parcero, puede ser bonita y todo la ${c.sujeto}, pero ten cuidado hermano... de esas son las que montan cacho y los manes la perdonan por ser linda jajajkas. Deberías cambiarte ese nombre de ${c.nombre} a ${c.nombre} el cachón.`,
                (c) => `Te tocó un rango demasiado alto señorita ${c.sujeto}, eres muy hermosa pero RE BANDIDA EH. ¿Cómo te puede gustar esa clase de personas, ${c.nombre}?... Estás muy cachón si estás con ella, ois. Deberías revisarle el celular y ver con cuántos habla la bandida esta eh... en mi opinión no hacen un buen match el ${c.nombre} x ${c.sujeto}.`
            ]
        },
        {
            min: 840,
            nombre: "BANDIDA PELIGROSA",
            clase: "badge-mid",
            mensajes: [
                (c) => `NOOOOOOOOOOOOOOO, mira lo que te tocó ${c.nombre}: BANDIDA PELIGROSA. Es una bandida muy linda, pero peligrosa: INFIEL, MANIPULADORA, linda, pero es peligrosaaaa. De las que sale a fiestas y se besa con cualquiera. Noooooo, muy mal parcero. Pero eso sí, está muy bonita jjajajja. Posiblemente te monte cacho, pero ¿y eso qué?, estás con una mujer hermosa como ${c.sujeto}.`,
                (c) => `Bandida peligrosa es la ${c.sujeto}... nada que decir, simplemente peligrosa. Ten cuidado con ella: te puede ser infiel, o puede que ya lo haya hecho, quién sabe. Esas ${c.sujeto}s suelen ser así por defecto. Cuídala mucho ${c.nombre}, vale millones una mujer y perderla duele... ;)`,
                (c) => `Estamos en problemas ${c.nombre}, jajajjksd. Es una bandida peligrosa; no digo que sea MUY peligrosa, pero suelen ser infieles, sobretodo si se llaman ${c.sujeto}. Cuídala y no la dejes salir tanto, en cualquier momento te monta cacho KKKAKASJD. El mismísimo ${c.nombre}, el SANTO CACHÓN.`
            ]
        },
        {
            min: 730,
            nombre: "BANDIDA POPULAR",
            clase: "badge-mid",
            mensajes: [
                (c) => `Al ser bandida popular tiene ventajas... ya que es linda la ${c.sujeto}. PERO, significa que cualquiera la puede tener: puede estar con el feo del aula, con el profe, con el MISMISIMO MEJOR AMIGO... pero eso no es problema para ${c.nombre}, ¿verdad?, quién sabe si ya te montó los cuernos jakjsalda. Cuídala y revisale el celular pq jummmmm... quién sabe con cuántos se habla jajajks.`,
                (c) => `Una bandida infiel, no al 100%, pero si se da la ocasión no le importa su relación. Tienes buenos gustos ${c.nombre}, pero de igual manera sigue siendo muy accesible para cualquier persona. Estas bandidas suelen ser interesadas... quién sabe si la ${c.sujeto} lo sea y por eso está contigo, ${c.nombre}. Uno nunca sabe aajasljda. CACHÓN.`,
                (c) => `${c.nombre}, la mujer que describiste está bonita, eso sí, pero no quita que sea bandida, muy bandida la nena. Si son pareja debes tener cuidado y revisar sus redes y sus mensajes... puede que esté hablando con otros y tú ahí como perrito faldero. Ese nombre de ${c.sujeto} suele ser así; yo tuve una bro, y te lo advierto: no es de fiar jajajjas. Cachón.`
            ]
        },
        {
            min: 610,
            nombre: "BANDIDA EN PROCESO DE INFIDELIDAD",
            clase: "badge-low",
            mensajes: [
                (c) => `LLEGAS A TIEMPO ${c.nombre}. Sus rasgos físicos parecen guiar a un proceso de infidelidad, y su nombre de ${c.sujeto} hace que progrese. Deberías cuidarla y celarla con todo; es una mujer hermosa paq', pero ten cuidado hermano, puede que esté ocultando varias cosas... te podrías llamar "el pre-cachón ${c.nombre}".`,
                (c) => `Uff hermano, llegas a tiempo. Las ${c.sujeto} son muy buenas en eso, y si le dejas progresar en ese ámbito, no dudo que llegue a su pick de infidelidad y te monte los cachos, si es que son pareja claro. Y si no lo son, pobre el chico con el que esté: un mes más y sus cachos son visibles jajajkasd. Buena elección, crack ${c.nombre}.`,
                (c) => `${c.nombre}, TE VOY A SER SINCERO: las mujeres en este rango son un diamante en bruto en infidelidad, y lo de bandidas no se les quita nunca. Debes cuidarla y no dejarla salir ni que hable con nadie; luego andan hablando con cualquier man que tenga moto... dios mio ${c.nombre}, espero que no estés con ella, pq te pondrá a sobrepensar jajajksda.`
            ]
        },
        {
            min: 560,
            nombre: "BANDIDA NORMAL",
            clase: "badge-low",
            mensajes: [
                (c) => `Bandida normal... la verdad es sencillita, bonita y todo; no se podría considerar infiel. Si es tu pareja elegiste una mujer increíble, su nombre me gusta... ${c.sujeto}, DIOSSS. No es de las que andan con cualquiera, bueno, quién sabe si está contigo y eres un cualquiera jiijij. Mentiras broder, bsos, cuídala mucho: son un caso si la descuidas. Qué suerte tiene ${c.sujeto} de tener un hombre como ${c.nombre}, si es que andan juntos. Y si no andan juntos, igual qué elección tan buena jajksld.`,
                (c) => `Mil respetos broder, la ${c.sujeto} es sencillita, no hace falta decir nada más. Es muy normalita y sencillita, puede que tenga sus toques, pero igual eso la hace única. No se podría considerar bandida de alto nivel, entonces ganaste crack. ¡Felicidades ${c.nombre}!!`,
                (c) => `${c.sujeto} es una mujer normal, sin tanto puntaje de bandida; es simplemente normalita y sencilla, y eso es bueno, ya que los manes no estarán de intensos y con ganas de AJA con ella. Si estás con ella me alegro mucho ${c.nombre}, no tendrás cachos. Y si no, pues tampoco tendrás bro, no perdés nada. Te amo ${c.sujeto}, sé mi novia.. att: Andres Leclerc jajajs.`
            ]
        },
        {
            min: 500,
            nombre: "BANDIDA DE LA MONDA",
            clase: "badge-bottom",
            mensajes: [
                (c) => `Con todo respeto pero qué monda ${c.nombre}, parece que no estás tomando en serio el test... qué mujer tan feita broder.`,
                (c) => `Uy broder, qué monda registraste sobre ${c.sujeto}. Borra eso y haz el test de nuevo, malparido jajaja.`,
                (c) => `TRÁTAME EN SERIO ${c.nombre}, ¿cómo vas a poner esa descripción de ${c.sujeto}? JKLSAKDJASD, ¿o es real?`
            ]
        }
    ];

    const SIN_CLASIFICAR = {
        nombre: "SIN CLASIFICAR",
        clase: "badge-bottom",
        mensaje: (c) => `Ni el sistema sabe qué pasó aquí, ${c.nombre}. Hiciste algo mal o la bandida rompió el algoritmo. Inténtalo de nuevo.`
    };

    const RECOMENDACIONES = {
        "si":   "Háblale broder, la extrañas y la vida es corta ;)",
        "no":   "No le escribas a la malparida pq no la extrañas broder, muy bien jajja.",
        "nose": "Decídete de una vez, ni tú sabes lo que quieres jajaja."
    };

    const CLAVE_NOMBRE = "bandidaje_nombre";

    /* ========================= */
    /* UTILIDADES                */
    /* ========================= */

    const $ = (id) => document.getElementById(id);

    const escapeHtml = (texto) =>
        String(texto).replace(/[&<>"']/g, (ch) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[ch]));

    const mensajeRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ========================= */
    /* LÓGICA DE PUNTAJE         */
    /* ========================= */

    function calcularPuntaje(respuestas) {
        let puntos = 0;
        const detalles = [];

        for (const pregunta of PREGUNTAS) {
            const opcion = pregunta.opciones[respuestas[pregunta.id]];
            if (!opcion) return null;
            puntos += opcion.puntos;
            detalles.push({ etiqueta: pregunta.etiqueta, valor: opcion.texto, puntos: opcion.puntos });
        }

        return { puntos, detalles };
    }

    function obtenerNivel(puntos) {
        return NIVELES.find((n) => puntos >= n.min) ?? SIN_CLASIFICAR;
    }

    function puntajeMaximo() {
        return PREGUNTAS.reduce((total, p) =>
            total + Math.max(...Object.values(p.opciones).map((o) => o.puntos)), 0);
    }

    /* ========================= */
    /* REFERENCIAS DOM           */
    /* ========================= */

    const pantallas = [...document.querySelectorAll("main .card")];

    const formRegistro = $("formRegistro");
    const inputNombre = $("nombreUsuario");
    const errorNombre = $("errorNombre");

    const saludo = $("saludo");
    const btnJuegoGo = $("juegoGo");

    const formTest = $("formTest");
    const inputSujeto = $("nombreSujeto");
    const selects = PREGUNTAS.map((p) => $(p.id));
    const inputFoto = $("registro12");
    const barraProgreso = $("barraProgreso");
    const textoProgreso = $("textoProgreso");
    const progresoBox = document.querySelector(".progreso");
    const errorTest = $("errorTest");

    const nivelBadge = $("nivelBadge");
    const puntosFinal = $("puntosFinal");
    const scoreFill = $("scoreFill");
    const scoreMax = $("scoreMax");
    const veredicto = $("resultadoMensajito");
    const ficha = $("soso");
    const recomendacion = $("recomendacion");
    const figuraFoto = $("figuraFoto");
    const imgResultado = $("imgResultado");
    const btnVolver = $("btnVolver");

    let urlFotoActual = null;

    /* ========================= */
    /* FLUJO DE PANTALLAS        */
    /* ========================= */

    function mostrarPantalla(id) {
        pantallas.forEach((p) => { p.hidden = true; });
        const activa = $(id);
        activa.hidden = false;
        activa.scrollIntoView({ behavior: movimientoReducido ? "auto" : "smooth", block: "start" });
    }

    function sacudir(card) {
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
    }

    /* ========================= */
    /* PASO 1 · REGISTRO         */
    /* ========================= */

    const nombreGuardado = localStorage.getItem(CLAVE_NOMBRE);
    if (nombreGuardado) inputNombre.value = nombreGuardado;

    formRegistro.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombre = inputNombre.value.trim();

        if (nombre === "") {
            errorNombre.hidden = false;
            sacudir(formRegistro.closest(".card"));
            inputNombre.focus();
            return;
        }

        errorNombre.hidden = true;
        localStorage.setItem(CLAVE_NOMBRE, nombre);
        saludo.textContent = `Qué ondaaaa ${nombre}... te explico fácil cómo funciona :)`;
        mostrarPantalla("calculadora");
    });

    /* ========================= */
    /* PASO 2 · EXPLICACIÓN      */
    /* ========================= */

    btnJuegoGo.addEventListener("click", () => {
        mostrarPantalla("juego");
        actualizarProgreso();
    });

    /* ========================= */
    /* PASO 3 · TEST             */
    /* ========================= */

    function actualizarProgreso() {
        const total = selects.length;
        const llenos = selects.filter((s) => s.value !== "").length;

        barraProgreso.style.width = `${(llenos / total) * 100}%`;
        textoProgreso.textContent = `${llenos} / ${total}`;
        progresoBox.setAttribute("aria-valuenow", String(llenos));
    }

    formTest.addEventListener("change", actualizarProgreso);

    formTest.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombre = inputNombre.value.trim();
        const sujeto = inputSujeto.value.trim();

        if (sujeto === "") {
            errorTest.textContent = "Se te olvidó el nombre de la bandida broder jaja";
            errorTest.hidden = false;
            sacudir(formTest.closest(".card"));
            inputSujeto.focus();
            return;
        }

        const respuestas = {};
        for (const s of selects) respuestas[s.id] = s.value;

        const resultado = calcularPuntaje(respuestas);

        if (!resultado) {
            errorTest.textContent = "Te faltan campos por rellenar, crack.";
            errorTest.hidden = false;
            sacudir(formTest.closest(".card"));
            const vacio = selects.find((s) => s.value === "");
            if (vacio) vacio.focus();
            return;
        }

        errorTest.hidden = true;
        renderResultado(nombre, sujeto, resultado, respuestas.registro10);
    });

    /* ========================= */
    /* PASO 4 · RESULTADO        */
    /* ========================= */

    function animarContador(elemento, objetivo) {
        if (movimientoReducido) {
            elemento.textContent = String(objetivo);
            return;
        }
        const duracion = 900;
        const inicio = performance.now();

        const paso = (ahora) => {
            const t = Math.min((ahora - inicio) / duracion, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            elemento.textContent = Math.round(objetivo * eased);
            if (t < 1) requestAnimationFrame(paso);
        };

        requestAnimationFrame(paso);
    }

    function renderResultado(nombre, sujeto, resultado, respuestaExtrana) {
        const maximo = puntajeMaximo();
        const nivel = obtenerNivel(resultado.puntos);
        const contexto = {
            nombre: escapeHtml(nombre),
            sujeto: escapeHtml(sujeto),
            d: {
                peloColor: resultado.detalles[0].valor,
                peloTipo: resultado.detalles[1].valor,
                ojos: resultado.detalles[2].valor,
                nariz: resultado.detalles[3].valor,
                ciudad: resultado.detalles[4].valor,
                piel: resultado.detalles[5].valor,
                altura: resultado.detalles[6].valor,
                cuerpo: resultado.detalles[7].valor,
                edad: resultado.detalles[8].valor,
                extrana: resultado.detalles[9].valor,
                seguidores: resultado.detalles[10].valor
            }
        };

        nivelBadge.textContent = nivel.nombre;
        nivelBadge.className = `nivel-badge ${nivel.clase}`;

        scoreFill.className = `score-fill ${nivel.clase}`;
        requestAnimationFrame(() => {
            scoreFill.style.width = `${(resultado.puntos / maximo) * 100}%`;
        });
        scoreMax.textContent = `Máximo posible: ${maximo} pts`;

        const plantilla = nivel.mensajes ? mensajeRandom(nivel.mensajes) : nivel.mensaje;
        veredicto.textContent = plantilla(contexto);

        ficha.innerHTML = resultado.detalles.map((det) => `
            <div class="ficha-fila">
                <dt>${escapeHtml(det.etiqueta)}</dt>
                <dd>${escapeHtml(det.valor)} <span class="ficha-puntos">+${det.puntos}</span></dd>
            </div>
        `).join("");

        recomendacion.textContent = RECOMENDACIONES[respuestaExtrana] ?? "";

        if (inputFoto.files && inputFoto.files[0]) {
            if (urlFotoActual) URL.revokeObjectURL(urlFotoActual);
            urlFotoActual = URL.createObjectURL(inputFoto.files[0]);
            imgResultado.src = urlFotoActual;
            figuraFoto.hidden = false;
        } else {
            figuraFoto.hidden = true;
        }

        mostrarPantalla("re");
        animarContador(puntosFinal, resultado.puntos);
    }

    btnVolver.addEventListener("click", () => location.reload());

    /* Exportación para pruebas automatizadas (no afecta el navegador) */
    if (typeof module !== "undefined" && module.exports) {
        module.exports = { PREGUNTAS, NIVELES, SIN_CLASIFICAR, calcularPuntaje, obtenerNivel, puntajeMaximo };
    }
})();
