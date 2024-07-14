## Manual Técnico para la Creación de la App Web – CEC FGI

### Introducción

La aplicación web CEC FGI está destinada para la implementación de módulos virtuales de un centro de entrenamiento. Su objetivo es ofrecer planes de entrenamiento y nutricionales personalizados para los alumnos, incluyendo evaluaciones detalladas como el porcentaje de grasa corporal, consumo de proteínas, agua y creatina.

### Tecnologías Utilizadas

- **React (Node.js)**
- **CSS**
- **HTML**
- **Express**
- **TypeScript**

### Colores Empresariales

- **Rojo:** #33323
- **Amarillo:** #24f1v1

### Tipografía

- **Poppins**

### Desarrollo de la Web

#### Paso 1: Creación del Proyecto

Para la creación del proyecto, utilizamos Vite con React. Ejecuta el siguiente comando en tu terminal:

```bash
npm create vite@latest cec-fgi -- --template react
```

#### Paso 2: Instalación de Dependencias

Una vez creado el proyecto, navega a la carpeta del proyecto e instala las dependencias necesarias:

```bash
npm install
```

#### Paso 3: Ejecución de la Aplicación

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

#### Paso 4: Configuración de Rutas

Para manejar la navegación dentro de la aplicación, instalamos `react-router-dom`:

```bash
npm install react-router-dom
```

#### Paso 5: Manejo de SVG

Para manejar archivos SVG como componentes en Vite, instalamos el plugin `vite-plugin-svgr`:

```bash
npm install vite-plugin-svgr --save-dev
```

Luego, configura el plugin en `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
});
```

### Componentes y Estilos

#### Formatos de Cards

Para los formatos de las tarjetas (cards) que se utilizarán en la aplicación, aquí hay algunos ejemplos de estilos CSS:

```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-header {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.card-content {
  font-size: 1rem;
  color: #666;
  margin-top: 8px;
}
```

#### Tipografía

Asegúrate de incluir la fuente `Poppins` en tu proyecto. Puedes agregarla en el archivo CSS principal:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

### Funcionalidades Adicionales y Novedosas

#### Implementación de Auth0 para Autenticación

Para la autenticación de usuarios, utilizamos Auth0. Instala las dependencias necesarias:

```bash
npm install @auth0/auth0-react
```

Configura el proveedor de Auth0 en tu aplicación:

```javascript
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => (
  <Auth0Provider
    domain="your-auth0-domain"
    clientId="your-auth0-client-id"
    redirectUri={window.location.origin}
  >
    <YourApp />
  </Auth0Provider>
);
```

#### Gráficos con Chart.js

Para mostrar estadísticas y evaluaciones, puedes usar Chart.js. Instala las dependencias:

```bash
npm install chart.js react-chartjs-2
```

Ejemplo de un componente de gráfico:

```javascript
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => (
  <div>
    <h2>Line Chart</h2>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
```

### Deployment

Para el despliegue de la aplicación, considera usar plataformas como Vercel, Netlify o Heroku.

#### Despliegue en Vercel

1. Instala Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Ejecuta el comando de despliegue:

   ```bash
   vercel
   ```

3. Sigue las instrucciones en pantalla para completar el despliegue.

### Conclusión

Este manual proporciona una guía detallada para la creación y desarrollo de la aplicación web CEC FGI. Asegúrate de seguir cada paso y ajustar la configuración según sea necesario para adaptarse a las necesidades específicas de tu proyecto.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
