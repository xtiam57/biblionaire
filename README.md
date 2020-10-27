# Biblionaire

El juego que pone a prueba todos tus conocimientos bíblicos. **Biblionaire** es un juego al estilo de "Quién quiere ser millonario" usando conceptos bíblicos.

![Preview](./src/assets/images/preview.jpg)

[▶ Jugar ahora](https://biblionaire.vercel.app/)

## Preguntas

Si deseas agregar más preguntas puedes hacer un **PR** al archivo `PREGUNTAS.txt` ubicado en la raíz del proyecto. El formato de las preguntas es el siguiente:

```
TEXTO_PREGUNTA
OPCIÓN 1 (opción correcta), OPCIÓN 2, OPCIÓN 3, OPCIÓN 4
DIFICULTAD
[REFERENCIA]
---
```

- **Línea 1**: el texto de la pregunta (ej. ¿Cuál fue la ciudad principal de los israelitas?)
- **Línea 2**: opciones separadas por `,` en donde la primera opcón es la correcta (ej. Jersusalén, Roma, Babilonia, Vaticano)
- **Línea 3**: la dificultad de la pregunta:
  - **EASY**: preguntas de difultad fácil. Serán las que se muestran en las 3 primeras preguntas de una partida.
  - **MEDIUM_EASY**: preguntas de difultad media-fácil. Serán las preguntas 4, 5 y 6 de una partida.
  - **MEDIUM**: preguntas de difultad media. Serán las preguntas 7, 8 y 9 de una partida.
  - **HARD**: preguntas de difultad difícil. Serán las preguntas 10, 11 y 12 de una partida.
  - **VERY_HARD**: preguntas de difultad **muy** difícil. Serán las últimas 3 preguntas de una partida.
- **Línea 4**: Cita o referencia bíblica. Si no hay dejar la línea vacía. (ej. Génesis 46:30)
- **Línea 5**: Separador de pregunta `---`

Ejecuta el comando `yarn generate` para generar el archivo ***typescript*** con las preguntas procesadas.

## Desarrollo

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

Ejecuta el comando `yarn start` para levantar un servidor de desarrollo. Ve a `http://localhost:4200/`.

## Producción

Ejecuta el comando `yarn build` para generar la distribución del proyecto. Los artefactos generados estarán en el directorio `dist/`.

## Ejecutable

Ejecuta el comando `yarn packager` para generar la distribución del proyecto como ejecutable de **Windows**. Los artefactos generados estarán en el directorio `biblionaire-win32-x64/`.
