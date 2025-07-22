# Actividad guiada: Dale vida a tu página
## 🎯 Objetivo:
- ✅ Practicar acceso al DOM.
- ✅ Escuchar eventos en botones.
- ✅ Modificar texto y estilos.
- ✅ Usar prompt() para obtener datos del usuario.

## 🚀 Consigna:
Cada equipo creará una página sencilla que tenga
1. Un título
2. Un párrafo con texto inicial.
3. Tres botones:
     - **Botón 1:** Cambia el texto del párrafo.
     - **Botón 2:** Cambia el color del párrafo.
     - **Botón 3:** Abre un prompt pidiendo el nombre del usuario y muestra un saludo en el párrafo. 

## Pasos para realizar la actividad:

### ✏️ Paso 1: Estructura HTML
Crear la estructura HTML con los elementos solicitados. Deben identificar cada elemento con un identificador único (ID). ***Recuerden enlazar el documento JavaScript al HTML***
```
<script src="nombreDocumento.js"></script>
```

### ⚡ Paso 2: Archivo JavaScript

1. **Acceder a los elementos del HTML.** Deben crear una variable por cada elemento. Ejemplo:

```
let nombreVariable = document.getElementById("idElemento");
```

2. **Agregar los eventos.** Agregar los eventos a cada botón. Ejemplo: 

```
variableElemento.addEventListener("click", function(){
  // acción a realizar
});
```

### 📌 Opcional
- Pueden agregar estilo el HTML con un documento externo CSS
- Pueden experimentar agregando más botones u otros elementos

### 💡 Para poder completar la actividad, necesitarán averiguar cómo:
- Seleccionar elementos del HTML desde JavaScrip (Pista: hay métodos como uno que empieza con getElement...)
- Escuchar un evento en un botón. (Pista: existe un método llamado addEventListener que les permite decir “cuando pase X, hacé Y”)
- Modificar el contenido y el estilo de un elemento desde JavaScript. (Pista: busquen propiedades como textContent o algo relacionado a style)
- Pedir información al usuario mediante una ventana emergente. (Pista: hay una función llamada prompt())



## 📚 Material de ayuda para la actividad:

- **¿Qué es prompt?:** [W3 School prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp)

- **¿Qué son los eventos JavaScript?:** [W3 School Eventos JavaScript](https://www.w3schools.com/js/js_events.asp)

- **Cambiar estilos desde JavaScript:** [W3 School Cambiar estilos usando eventos](https://www.w3schools.com/js/js_htmldom_css.asp)

