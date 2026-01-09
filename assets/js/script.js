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
        const nombre = input.value.trim();

        if (nombre !== "") {
            registro.style.display = "none";
            calculadora.style.display = "block";
            saludo.textContent = `Que ondaaaaa ${nombre}... te explico facil como funciona :)`;
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

        puntos = 0; 

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


        if (v1 == 1) puntos += 80;
        else if (v1 == 2) puntos += 70;
        else if (v1 == 3) puntos += 50;
        else if (v1 == 4) puntos += 70;
        else if (v1 == 5) puntos += 30;

        if (v2 == 1) puntos += 100;
        else if (v2 == 2) puntos += 80;
        else if (v2 == 3) puntos += 60;
        else if (v2 == 4) puntos += 10;

        if (v3 == 1) puntos += 60;
        else if (v3 == 2) puntos += 70;
        else if (v3 == 3) puntos += 90;
        else if (v3 == 4) puntos += 100;
        else if (v3 == 5) puntos += 20;

        if (v4 == 1) puntos += 90;
        else if (v4 == 2) puntos += 70;
        else if (v4 == 3) puntos += 50;

        if (v5 == 1) puntos += 90;
        else if (v5 == 2) puntos += 50;

        if (v6 == 1) puntos += 100;
        else if (v6 == 2) puntos += 80;
        else if (v6 == 3) puntos += 60;
        else if (v6 == 4) puntos += 70;

        if (v7 == 1) puntos += 60;
        else if (v7 == 2) puntos += 70;
        else if (v7 == 3) puntos += 90;

        if (v8 == 1) puntos += 80;
        else if (v8 == 2) puntos += 70;
        else if (v8 == 3) puntos += 50;

        if (v9 == 1) puntos += 100;
        else if (v9 == 2) puntos += 50;
        else if (v9 == 3) puntos += 40;

        if (v10 === "si") puntos += 100;
        else if (v10 === "no" || v10 === "nose") puntos += 50;


        let nivel = "";
        if (puntos >= 900) nivel = "BANDIDA DE BANDIDAS -> Es una bandida lider de bandidas que por sus rasgs fisicos.. ay dios mio, cualquier hombre quisiera tener algo con ella, aun asi tu te enamoraste de ella verdad?.... jajajajaja, lo importante es que este señorita es una diosa.. pero en ciudado, porq puede ser un cosa de locos  con la infidelidad jajajaj";
        else if (puntos >= 800) nivel = "BANDIDA INTERESANTE -> Es una bandida linda, pero aun no llega a su pick, puede considerarse una cosa terrible... peroo de igual forma sigue siendo alerta roja por sus rasgos fisicos, no te lo voy a negar, a ti te gustan bandidas ufff";
        else if (puntos >= 700) nivel = "BANDIDA REBELDE -> Es todo un cas esta bandida, puede que sea rebelde, tiene todos los aspectos de serlo, quisiera conocerla a fondo jajajaja, pero de igual forma, es divina, no se podria considerar TOP, pero tiene sus cosas";
        else if (puntos >= 600) nivel = "BANDIDA NORMAL -> No hay nada que decir, es una bandida completamente normal, no puede considerarse peligrosa, ni nada por el estilo, pero igual sigue siendo bandida... hay q tener cuidado con esta juventud de mujeres, pq en cualquier momento suben su rango y su infidelidad";
        else if (puntos >= 500) nivel = "BANDIDA REGULAR -> bandida sencilla, no es tan llamativa, puede tener una vida normal, no es caprichosa, de hecho, es una buena eleccion para tener una relacion, desde que tengan amor y respeto, serian una pareja maravillosa, FIEL 100%";
        else if (puntos >= 400) nivel = "BANDIDA MEEEH -> Bandida mehh.. sin ofender eh.. pero que gustos mamita, la verdad estoy decepsionado, y aun asi la extrañas?... aunq digas que no, siento q hay una chispa, pero igualmente es una bandida sencilla, si es q se le puede llamar 'bandida'";
        else nivel = " BANDIDA DE LA VERGA -> uy pa q gustos de mierda KLAJSDKA";


        juego.style.display = "none";
        re.style.display = "block";

        const nombre = input.value.trim();
        resultadoMensajito.innerHTML = `
            <strong>${nombre}...</strong><br><br>
            Tu puntaje es <strong>${puntos}</strong><br>
            Nivel: <strong>${nivel}</strong>
        `;
    });

});

function volver() {
    location.reload();
}



// 930
// 420