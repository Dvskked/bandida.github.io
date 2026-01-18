document.addEventListener("DOMContentLoaded", () => {

    let puntos = 0;

    const boton = document.getElementById("btnIniciar");
    const input = document.getElementById("nombreUsuario");
    const saludo = document.getElementById("saludo");


    const calculadora = document.getElementById("calculadora");
    const registro = document.getElementById("registro");

    const juegoGo = document.getElementById("juegoGo");
    const juego = document.getElementById("juego");

    const resultadoBtn = document.getElementById("resultado");
    const resultadoMensaje = document.getElementById("resultadoMensajito");
    const re = document.getElementById("re");


    boton.addEventListener("click", () => {
        const nombree = input.value.trim();

        if (nombree !== "") {
            registro.style.display = "none";
            calculadora.style.display = "block";
            saludo.textContent = `Que ondaaaaa ${nombree}... te explico facil como funciona :)`;
        } else {
            alert("Por favor ingresa tu nombre");
            input.focus();
        }
    });


    juegoGo.addEventListener("click", () => {
        calculadora.style.display = "none";
        juego.style.display = "block";
    });

    resultadoBtn.addEventListener("click", () => {

        const nombre = input.value.trim();
        const mujer = document.getElementById("mujer").value.trim();


        if (mujer === "") {
            alert("Se te olvido el nombre de la bandida broder jaja");
            return;
        }

        

        puntos = 0; 
        let dato1 = "";
        let dato2 = "";
        let dato3 = "";
        let dato4 = "";
        let dato5 = "";
        let dato6 = "";
        let dato7 = "";
        let dato8 = "";
        let dato9 = "";
        let dato10 = "";
        let dato11 = "";

        const v1 = document.getElementById("registro1").value.trim();
        const v2 = document.getElementById("registro2").value.trim();
        const v3 = document.getElementById("registro3").value.trim();
        const v4 = document.getElementById("registro4").value.trim();
        const v5 = document.getElementById("registro5").value.trim();
        const v6 = document.getElementById("registro6").value.trim();
        const v7 = document.getElementById("registro7").value.trim();
        const v8 = document.getElementById("registro8").value.trim();
        const v9 = document.getElementById("registro9").value.trim();
        const v10 = document.getElementById("registro10").value.trim().toLowerCase();
        const v11 = document.getElementById("registro11").value.trim().toLowerCase();
        const inputImagen = document.getElementById("registro12");
        const imgResultado = document.getElementById("imgResultado");

        if (
            v1 === "" || v2 === "" || v3 === "" || v4 === "" || v5 === "" ||
            v6 === "" || v7 === "" || v8 === "" || v9 === "" || v10 === "" || v11 === ""
        ) {
            alert("Te faltan campos por rellenar crack");
            return;
        }


        if (inputImagen.files && inputImagen.files[0]) {
            const file = inputImagen.files[0];
            const imageURL = URL.createObjectURL(file);
            imgResultado.src = imageURL;
            imgResultado.style.display = "block";
        } else {
            imgResultado.src = "";
            imgResultado.style.display = "none";
        }


        juego.style.display = "none";
        re.style.display = "block";

        if (v1 == 1) {
            puntos += 120;
            dato1 = "Rubia";
        } else if (v1 == 2) {
            puntos += 80;
            dato1 = "Castaño";
        } else if (v1 == 3) {
            puntos += 60;
            dato1 = "Negro";
        } else if (v1 == 4) {
            puntos += 90;
            dato1 = "Rojizo";
        } else if (v1 == 5) {
            puntos += 30;
            dato1 = "Otro color";
        } else{
            puntos +=10;
            dato1 = "Sin dato";
        }


        
        if (v2 == 1) {
            puntos += 50;
            dato2 = "Liso";
        } else if (v2 == 2) {
            puntos += 90;
            dato2 = "Ondulado";
        } else if (v2 == 3) {
            puntos += 60;
            dato2 = "Churco";
        } else if (v2 == 4) {
            puntos += 30;
            dato2 = "CALVAAAA";
        } else{
            puntos +=10;
            dato2 = "Sin dato";
        }

        

        if (v3 == 1) {
            puntos += 50;;
            dato3 = "Negros";
        } else if (v3 == 2) {
            puntos += 80;
            dato3 = "Cafes";
        } else if (v3 == 3) {
            puntos += 100;;
            dato3 = "Verdes";
        } else if (v3 == 4) {
            puntos += 100;
            dato3 = "Azules";
        } else if (v3 == 5) {
            puntos += 120;
            dato3 = "Verdes";
        } else{
            puntos +=10;
            dato3 = "Sin dato";
        }

        
        
        if (v4 == 1) {
            puntos += 100;;
            dato4 = "Cortica";
        } else if (v4 == 2) {
            puntos += 70;;
            dato4 = "Normalita";
        } else if (v4 == 3) {
            puntos += 50;
            dato4 = "Re grande";
        }  else{
            puntos +=10;
            dato4 = "Sin dato";
        }



        if (v5 == 1) {
            puntos += 160;
            dato5 = "Bumanguesa";
        } else if (v5 == 2) {
            puntos += 170;
            dato5 = "Paisa";
        } else if (v5 == 3) {
            puntos += 40;
            dato5 = "Costeña";
        } else if (v5 == 4) {
            puntos += 30;
            dato5 = "Boyacense";
        } else if (v5 == 5) {
            puntos += 20;
            dato5 = "Rola";
        } else if (v5 == 6) {
            puntos += 70;
            dato5 = "Caleña";
        } else if (v5 == 7) {
            puntos += 10;
            dato5 = "Venezolana";
        } else if (v5 == 8) {
            puntos += 50;
            dato5 = "Otra nacionalidad";
        } else{
            puntos +=10;
            dato5 = "Sin dato";
        }



        if (v6 == 1) {
            puntos += 70;
            dato6 = "Blanquita";
        } else if (v6 == 2) {
            puntos += 110;
            dato6 = "Morenita";
        } else if (v6 == 3) {
            puntos += 60;
            dato6 = "Afrocolombiana";
        } else if (v6 == 4) {
            puntos += 200;
            dato6 = "Amarillisima";
        } else{
            puntos +=10;
            dato6 = "Sin dato";
        }



        if (v7 == 1) {
            puntos += 60;
            dato7 = "Alta";
        } else if (v7 == 2) {
            puntos += 70;
            dato7 = "Igual";
        } else if (v7 == 3) {
            puntos += 110;
            dato7 = "Bajita";
        } else{
            puntos +=10;
            dato7 = "Sin dato";
        }


        if (v8 == 1) {
            puntos += 80;
            dato8 = "Flaca";
        } else if (v8 == 2) {
            dato8 = "Normalita";
            puntos += 60;
        } else if (v8 == 3) {
            dato8 = "Gordita jijiji";
            puntos += 50;
        } else{
            puntos +=10;
            dato8 = "Sin dato";
        }

        
        if (v9 == 1) {
            puntos += 70;
            dato9 = "Mayor que tu";
        } else if (v9 == 2) {
            dato9 = "Misma edad";
            puntos += 60;
        } else if (v9 == 3) {
            dato9 = "Menor q tu (Pedofilo)";
            puntos += 70;
        } else{
            puntos +=10;
            dato9 = "Sin dato";
        }


        if (v10 === "si") {
            puntos += 100;
            dato10 = "si la extrañas.. awwwww";
        } else if (v10 === "no" || v10 === "nose") {
            puntos += 50;
            dato10 = "No la extrañas JAJJKAKJAKJSAKJSALKJSALKJDSALKJSALKJ";
        } else{
            puntos +=10;
            dato10 = "Sin dato";
        }


        if (v11 === "si") {
            puntos += 150;
            dato11 = "Muy popular en redes";
        } else if (v11 === "no" || v11 === "nose") {
            puntos += 20;
            dato11 = "No la conoce ni la mama";
        } else{
            puntos +=10;
            dato11 = "Sin dato";
        }


        // ------ sistema de niveles

        let nivel = "";
        const niveles = {
            nivel1: [
                `Vaya ${nombre}... bandida de bandidas... Es una mujer extraordinariamente inteligente, pero muy infieeeel, se podria considerar una de las peligrosas en su entorno, muy enfocada en la infidelidad, buenos gustos eh... la verdad sus rasgos fisicos son INCREIBLES, PERO, buenos mal no estas con ella.. ¿o si?, y ten cuidado cuando pases por las puertas, tus cachos podrian dañarse jajaja`,
                `¡¡LA BANDIDA DE BANDIDAS!!, no hay duda ${nombre} que este es el ultimo rango de estas chicas, son SUPER INFIELES DIOS MIO (lo digo por experiencia :c), es muy hermosa eh... pero no cabe duda que si estas con ella tendras unos cachos.. o quien sabe si ya los tienes jajajajaja, mucho cuidado bro, y si fuiste novia de ella, que bueno que te alejaste, quien sabe con quienes estubo mientras estaba con ella jajajaja`,
                `LA MISMA INALCANZABLE.. Que mujer tan bella dios mio, es de las que la siguen mil hombres al pie, y juega con todos, la verdad tienes buenos gustos, pero.... pobre el que ande con ella... tendra tremendos cachos ni los hp, de igual forma sola no va a estar, y si tu estas con ella... eres el mismisimo ${nombre} EL SANTO CACHON KAKAKAKAKJ`
            ],
            nivel2: [
                `Bandida EXTRA peligrosa, es de las mas infieles que puede haber (${mujer}), puede jugar con el que quiera y manipularlo, pero parece que eres uno de ellos pq te hizo hacer el test con los rasgos de ella.... estas domado por ella bro, eso no es de ghaster, de igual forma sigue siendo una mujer hermosa, juguetona y sobretodo INFIEL, comun de ellas`,
                `RED FLAG, REPITO, ¡¡REDFLAG!!.... COMO TE PUEDE GUSTAR ELLA, noooo parcero, puede ser bonita y todo la ${mujer}, pero ten cuidad hermano... de esas son las que montan cacho y los manes la perdonan por ser linda jajajkas, deberias cambiarte ese nombre de ${nombre} a ${nombre} el cachon`,
                `Te toco un rango demasiado alto señorita ${mujer}, eres muy hermosa pero RE BANDIDA EH, como te puede gustar esa clase de personas ${nombre}... Eres muy cachn si estas con ella ois, deberias revisarle el celular y ver con cuantos habla la bandida esta eh... en mi opinion no hacen un buen match el ${nombre} x ${mujer}`
            ],
            nivel3: [
                `NOOOOOOOOOOOOOOO, mira lo que te toc ${nombre}, BANDIDA PELIGROSA, es una bandida muy linda, pero peligrosa, INFIEL, MANIPULADORA, linda, pero es peligrosaaaa, de las que sale a fiestas y se besa con cualquiera, noooooo, muy ,mal parcero, pero eso si, esta muy bonita jjajajja, posiblemente de monto cacho pero y eso que?, estas con una mujer hermosa como ${mujer}`,
                `bandida peligrosa es la ${mujer}... nada que decir, simplemente peligrosa, ten cuidado con ella, te puede ser infiel, o puede ser lo hizoo ya, quien sabe, esas ${mujer}s suelen ser asi por defecto, cuidala mucho ${nombre}, vale millones una mujer y perderla duele... ;)`,
                `estamos en problemas ${nombre}, jajajjksd, es una bandida peligrosa, no digo que sea MUY peligrosa, pero suelen ser infieles, sobretodo si se llaman ${mujer}, cuidala y no la dejes salir tanto, en cualquier momento te monta cacho KKKAKASJD, el mismisimo ${nombre} el SANTO CACHON`
            ],
            nivel4: [
                `Al ser badida popular tiene ventajas... ya que es linda la ${mujer} PERO, significa que cualquiera la puede tener, puede estar con el feo del aula, con el profe, con el MISMISIMO MEJOR AMIGO... pero eso no es problema para ${nombre}, verda?, quien sabe si ya te monto los cuernos jakjsalda, cuidala y revisale el celular pq jummmmm... quien sabe con cuantos se habla jajajks`,
                `Una bandida infiel, no al 100%, pero si se da la ocasion no le importa su relacion, tienes buenos gustos ${nombre}, pero de igual manera sigue siendo muy accesible para cualquier persona, estas bandidas suelen ser interesadas... quien sabe si la ${mujer} lo sea y por eso esta contigo ${nombre} uno nunca sabe aajasljda, CACHON`,
                `${nombre} su mujer que describio esta bonita, eso si, pero no quita que sea bandida, muy bandida la nena, si son pareja debes tener cuidado y revisar sus redes y sus mensajes... puede que esta hablando con otros y tu hay como perrito faldero, ese nombre de ${mujer} suelen ser asi, yo tuve una bro, y te lo advierto, no es de fiar jajajjas, cachon`
            ],
            nivel5: [
                `LLEGAS A TIEMPO ${nombre}, sus rasgos fisicos parecen guiar a un proceso de infidelidad, y su nombre de ${mujer}, hacen que progrese, deber cuidarla y celarla con todo, es una mujer hermosa paq', pero ten cuidado hermano, puede que este ocultando varias cosas... te podrias llamar 'el pre-cachon ${nombre}'`,
                `uff hermano, llegas a tiempo, las ${mujer} son muy buenas en eso, y si le dejas progresar en ese ambito, no dudo que llegue a su pick de infidelidad y te monte los cachos, si es q son pareja claro, y si no lo son pobre el chico con el q este, un mes mas y sus cachos son visibles jajajkasd, buena eleccion crack ${nombre}`,
                `${mujer} TE QUE SER, las mujeres en este rango son un diamante en bruto en infidelidad, y lo de bandidas no se les quita nunca, debes cuidarla y no dejarla salir ni que hable con nadie, luego andan hablando con cualquier man que tenga moto... dios mio ${nombre} espero q no estes con ella, pq te pondra a sobrepensar jajajksda`
            ],
            nivel6: [
                `Bandida normal... la verdad es sencillita, bonita y todo, no se podria considerar infiel, si es tu pareja elejiste una mujer increible, su nombre me gusta... ${mujer}, DIOSSS, no es de las que andan con cualquiera, bueno, quien sabe si esta contigo y eres un cualquiera jiijij, mentiras broder, bsos, cuidala mucho, son un caso si la descuidas, q suerte tiene ${mujer} de tener un hombre como ${nombre}, si es q andan juntos, si no andan juntos, igual q eleccion tan buena jajksld`,
                `Mil respetos broder, la ${mujer} es sencillita, no hace falta decir nada mas, es muy normalita y sencillita, puede q tenfa sus toques, pero igual es la hace unico, no se podria considerar bandida de alto nivel, entonces ganaste crack, felicidades ${nombre}!!`,
                `${mujer} es una mujer normal, sin tanto puntaje de bandida, es simplemente normalita y sencilla, y eso es bueno, ya que los manes no estarian de intensos y con ganas de AJA, con ella, si estas con ella me alegro mucho ${nombre} no tendras cachos, y si no, pues tampoco tendras bro, no perdes nada, te amo ${mujer} se mi novia.. att: Andres leclerc jajajs`
            ],
            nivel7: [
                `Con todo respeto pero q monda ${nombre}, parece q no estas tomando enserio el test... q mujer tan feita broder`,
                `uy broder, que monda registraste sobre ${mujer}, metete un tiro malparido`,
                `TRATEME SERIO ${nombre}, como vas a poner esa descripcion de ${mujer} JKLSAKDJASD, o es real?`
            ]
        };


     














        function mensajeRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        
        }

        let mensajeFinal = "";

        if (puntos >= 1000) {
            nivel = "BANDIDA DE BANDIDAS";
            mensajeFinal = mensajeRandom(niveles.nivel1);
        } else if (puntos >= 900) {
            nivel = "BANDIDA EXTRA PELIGROSA";
            mensajeFinal = mensajeRandom(niveles.nivel2);
        }else if (puntos >= 840) {
            nivel = "BANDIDA PELIGROSA";
            mensajeFinal = mensajeRandom(niveles.nivel3);
        } else if (puntos >= 730) {
            nivel = "BANDIDA POPULAR";
            mensajeFinal = mensajeRandom(niveles.nivel4);
        }else if (puntos >= 610) {
            nivel = "BANDIDA EN PROCESO DE INFIDELIDAD";
            mensajeFinal = mensajeRandom(niveles.nivel5);
        }else if (puntos >= 560) {
            nivel = "BANDIDA NORMAL";
            mensajeFinal = mensajeRandom(niveles.nivel6);
        }else if (puntos >=500) {
            nivel = "BANDIDA DE LA MONDA";
            mensajeFinal = mensajeRandom(niveles.nivel7);
        }else {
            nivel = "SIN CLASISIFCAR";
            mensajeFinal = "No hay nada aqui, hisite algo mal";
        }


        
        resultadoMensajito.innerHTML = `
            <strong>${nombre}...</strong><br><br>
            El puntaje de ${mujer} es <strong>${puntos}</strong><br>
            Nivel: <strong>${nivel}</strong><br><br><br>
            ${mensajeFinal}
        `;

        let dato10rec = "";

        if (dato10 == "si la extrañas.. awwwww") {
            dato10rec = "Hablale broder, porque la extrañas, no pierdes nada jajaja ;)"
        } else if (dato10 == "No la extrañas JAJJKAKJAKJSAKJSALKJSALKJDSALKJSALKJ") {
            dato10rec = "No le escribas a malparida pq no la extrañas broder, muy bien jajja"
        }


        const soso = document.getElementById("soso");

        soso.innerHTML = `
            La bandida ${mujer}, la cual es ${dato5}, y sobretodo ${dato9}... realizó el test hecho por Andres Leclerc jajksad, 
            tiene el pelo ${dato2} y es ${dato1}, color de ojos ${dato3}, su nariz ${dato4}, y su piel ${dato6}, 
            su altura ${dato7} y ${dato8}... una mujer bella, porque todas son hermosas divinas y BANDIDAS VE, jajajkas, 
            sé que ${dato10}, y su influencia: ${dato11}...
            <br><br>
            ${dato10rec}
            <br><br>
        `;




        const imgContainer = document.getElementById("imagenResultado");

        if (v12 !== "") {
            imgContainer.innerHTML = `
                <img src="${v12}" alt="imagen bandida" style="max-width:200px; border-radius:10px;">
            `;
        } else {
            imgContainer.innerHTML = "";
        }

        

    });

});

function volver() {
    location.reload();
}





// 1140
// 510
