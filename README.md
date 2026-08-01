# 🎓 Proyecto Testimonios de freeCodeCamp (React + Vite)

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)

---

## 📸 Captura de Pantalla

![Vista previa del proyecto Testimonios de freeCodeCamp](src/assets/img/cardProjectFullscreenshot.png)

---

## 📑 Tabla de Contenidos

- [🚀 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Instalación y Ejecución Local](#️-instalación-y-ejecución-local)
- [📦 Script de Construcción (Build)](#-script-de-construcción-build)
- [🌐 Despliegue](#-despliegue)
- [📄 Licencia](#-licencia)

---

## 🚀 Descripción del Proyecto

Este proyecto es una clonación de la sección de testimonios de **freeCodeCamp**, desarrollado como un taller práctico para aprender los conceptos iniciales de **React**, el uso de **Componentes** reutilizables y el paso de información mediante **Props**.

La aplicación muestra una lista de testimonios de estudiantes que cambiaron sus carreras gracias a freeCodeCamp (Shawn Wang, Sarah Chima y Emma Bostian).

### Conceptos aplicados:
- **Componentes React**: Creación de un componente funcional reutilizable (`Testimonial`).
- **Props**: Paso de propiedades (`name`, `country`, `jobTitle`, `jobCompany`, `image`, `text`) al componente.
- **Renderizado de listas**: Uso del método `.map()` para iterar sobre un arreglo de objetos de testimonios.
- **Clean Code**: Estructura de carpetas ordenada (`components/`, `styles/`, `assets/`).

---

## ✨ Funcionalidades

- ✅ Visualización de testimonios de estudiantes de freeCodeCamp.
- ✅ Componente `Testimonial` reutilizable y configurable mediante props.
- ✅ Renderizado dinámico de la lista de testimonios con `.map()`.
- ✅ Diseño responsive y limpio inspirado en freeCodeCamp.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| ⚛️ **React** | Biblioteca de JavaScript para construir interfaces de usuario. |
| ⚡ **Vite** | Herramienta de desarrollo rápida y moderna para proyectos frontend. |
| 🟨 **JavaScript (ES6+)** | Lenguaje de programación principal del proyecto. |
| 🎨 **CSS** | Estilos y diseño de la interfaz. |

---

## 📂 Estructura del Proyecto

```
cloneCardProject/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── cardProjectFullscreenshot.png
│   │   │   ├── EmmaPhoto.png
│   │   │   ├── SarahPhoto.png
│   │   │   └── ShawnPhoto.png
│   │   ├── hero.png
│   │   └── vite.svg
│   ├── components/
│   │   └── Testimonial.jsx
│   ├── styles/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Instalación y Ejecución Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/kvadrakola/cloneCardProject.git
cd cloneCardProject
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el servidor de desarrollo
```bash
npm run dev
```

Abre la URL indicada en la consola (usualmente `http://localhost:5173`) en tu navegador.

---

## 📦 Script de Construcción (Build)

Para generar la versión de producción:
```bash
npm run build
```

---

## 🌐 Despliegue

- **GitHub Repository**: [https://github.com/kvadrakola/cloneCardProject](https://github.com/kvadrakola/cloneCardProject)
- **Vercel Deployment**: [https://clone-card-project.vercel.app](https://clone-card-project.vercel.app)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ y ☕ para aprender React.