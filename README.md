# Calculadora de Bandidas

Módulo del proyecto **Bandidaje** que analiza a cualquier sospechosa y le asigna
un nivel de bandidaje con puntaje, rango y veredicto.

- Sitio desplegado: <https://dvskked.github.io/bandida.github.io/>
- Hub del proyecto: <https://dvskked.github.io/bandidaje.github.io/>

## Estructura

```
bandida.github.io/
├── index.html          # Test completo (4 pasos)
└── assets/
    ├── css/style.css   # Tema neón rosa
    ├── js/script.js    # Lógica de puntaje data-driven
    └── img/            # Logos y favicon
```

## Cómo funciona

1. **Registro**: el usuario ingresa su nombre (se guarda en `localStorage`).
2. **Explicación**: resumen de las reglas del test.
3. **Test**: 11 rasgos de la bandida + foto opcional, con barra de progreso en vivo.
4. **Resultado**: puntaje animado, nivel con insignia, veredicto aleatorio,
   ficha técnica con el puntaje por rasgo y recomendación final.

### Sistema de puntaje

Cada opción de cada pregunta tiene un valor definido en el arreglo `PREGUNTAS`
de `assets/js/script.js`. El máximo posible es **1310 pts**.

| Rango            | Nivel                              |
|------------------|------------------------------------|
| ≥ 1000           | BANDIDA DE BANDIDAS                |
| 900 – 999        | BANDIDA EXTRA PELIGROSA            |
| 840 – 899        | BANDIDA PELIGROSA                  |
| 730 – 839        | BANDIDA POPULAR                    |
| 610 – 729        | BANDIDA EN PROCESO DE INFIDELIDAD  |
| 560 – 609        | BANDIDA NORMAL                     |
| 500 – 559        | BANDIDA DE LA MONDA                |
| < 500            | SIN CLASIFICAR                     |

Cada nivel tiene varios mensajes posibles que se eligen al azar e insertan los
datos del análisis.

## Características técnicas

- JavaScript refactorizado: configuración declarativa (`PREGUNTAS`, `NIVELES`),
  función pura `calcularPuntaje()` y render separado de la lógica.
- Corrige el error de la versión anterior (`v12` no definido) que rompía la
  pantalla de resultados.
- Entradas de usuario escapadas antes de inyectarse en el DOM (anti-XSS).
- Validación en línea con animación de error (sin `alert()`).
- HTML semántico y accesible: un solo `h1`, jerarquía `h2`/`h3`, etiquetas
  `<label>`, `aria-valuenow` en la barra de progreso y foco visible.
- SEO: meta description, Open Graph, Twitter Card, canonical y JSON-LD.
- Responsive + soporte de `prefers-reduced-motion`.

## Uso local

Abre `index.html` en el navegador o sirve la carpeta:

```bash
npx serve .
```

## Autor

Proyecto **Bandidaje** creado por **Andrés Forero**
([@4ndres018](https://www.instagram.com/4ndres018/)) — v2.0 "Edición Neón".
