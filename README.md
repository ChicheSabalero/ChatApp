# Chat App

Este proyecto consiste en una aplicación de chat en tiempo real desarrollada con tecnologías web, incluyendo Node.js, React, y Socket.io. Permite a los usuarios conectarse y enviar mensajes instantáneos.

## Estructura del Proyecto

### Servidor

En la carpeta del servidor, se encuentra el archivo `index.js` que contiene el código del servidor Node.js. Utiliza la biblioteca Socket.io para gestionar las conexiones en tiempo real. Además, se incluye el archivo `package.json` con las dependencias necesarias.

#### Iniciar el Servidor

```bash
npm install # Instala las dependencias
npm start   # Inicia el servidor
```

### Interfaz de Usuario (Cliente)

La interfaz de usuario está construida con React y utiliza Socket.io-client para establecer la conexión con el servidor en tiempo real. El código React se encuentra en los archivos App.js, index.js, y App.css. También se incluye el archivo package.json con las dependencias necesarias.

#### Iniciar la Aplicación

```bash
npm install # Instala las dependencias
npm start   # Inicia la aplicación React
```

### Uso

Inicia el servidor ejecutando el comando npm start en la carpeta del servidor.
Inicia la aplicación React ejecutando el comando npm start en la carpeta del cliente.
Abre tu navegador y visita http://localhost:3000 para acceder a la aplicación.

### Funcionalidades

Los usuarios pueden enviar mensajes en tiempo real.
La aplicación muestra el estado de la conexión.
Los mensajes se muestran en una lista en la interfaz de usuario.
¡Disfruta chateando en tiempo real con esta aplicación!
