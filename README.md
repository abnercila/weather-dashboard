## Weather Dashboard


Una aplicación de clima moderna, construida con React
Este proyecto es una aplicación de una sola página (SPA) que permite a los usuarios buscar el clima actual y el pronóstico de cualquier ciudad del mundo. La aplicación consume datos de una API externa y los presenta en una interfaz de usuario limpia y elegante, inspirada en el diseño de iOS.

Tecnologías Utilizadas
Frontend: React, Vite

Gestión de Estado: React Hooks (useState, useEffect)

Peticiones a API: Axios

Estilos: CSS3

Funcionalidades Clave
Búsqueda de Ciudades: Permite a los usuarios buscar el clima de cualquier ciudad global.

Consumo de API Externa: Obtiene datos del clima en tiempo real de la API de OpenWeatherMap.

Manejo de Errores: Muestra mensajes de error claros si la ciudad no es encontrada o si la API no responde.

Diseño Moderno: Interfaz de usuario minimalista con efecto de "glassmorphism" para una apariencia pulida.

Instalación y Uso
Para correr esta aplicación en tu máquina local, sigue estos pasos:

Clona el repositorio:

Bash

git clone https://github.com/abnercila/weather-dashboard.git
cd weather-dashboard
Instala las dependencias:

Bash

npm install
Configura tu clave de API:

Regístrate en OpenWeatherMap para obtener una clave de API gratuita.

Abre el archivo src/App.jsx y reemplaza el placeholder TU_CLAVE_DE_API con tu clave real.

Inicia el servidor de desarrollo:

Bash

npm run dev
La aplicación se abrirá en tu navegador en http://localhost:5173.
