# Proyecto Testimonios de freeCodeCamp (React + Vite)

Este proyecto es una clonación de la sección de testimonios de **freeCodeCamp**, desarrollado como un taller práctico para aprender los conceptos iniciales de **React**, el uso de **Componentes** reutilizables y el paso de información mediante **Props**.

## 🚀 Descripción del Proyecto

La aplicación muestra una lista de testimonios de estudiantes que cambiaron sus carreras gracias a freeCodeCamp (Shawn Wang, Sarah Chima y Emma Bostian). 

### Conceptos aplicados:
- **Componentes React**: Creación de un componente funcional reutilizable (`Testimonial`).
- **Props**: Paso de propiedades (`name`, `country`, `jobTitle`, `jobCompany`, `image`, `text`) al componente.
- **Renderizado de listas**: Uso del método `.map()` para iterar sobre un arreglo de objetos de testimonios.
- **Clean Code**: Estructura de carpetas ordenada (`components/`, `styles/`, `assets/`).

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
- **Vercel Deployment**: Enlace a la aplicación en Vercel (ej. `https://clone-card-project.vercel.app`)
