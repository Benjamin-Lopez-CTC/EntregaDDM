# Ejemplo práctico con NativeWind y React-router en SDK 57

Este practico hace uso de las librerias de estilo de tailwind a través de NativeWind y el manejo de rutas de react-router

## Instalación

El proceso de instalación es simple

```bash
npm install
npx expo start --clear
```

`expo install` automaticamente elige las versiones nativas compatibles con el SDK 57.

`--clear` limpia el caché de expo go para crear un nuevo caché con todos los datos actualizados

## Archivos importantes

- `global.css`: importa Tailwind CSS y el tema de NativeWind.
- `postcss.config.mjs`: activa el plugin de Tailwind CSS.
- `metro.config.js`: envuelve Metro con `withNativewind`.
- `app/_layout.tsx`: importa el CSS una única vez para Expo Router.
- `app/index.tsx`: usa `className` en componentes React Native.
- `screenshots/`: contiene multiples capturas de pantalla relacionadas a las distintas vistas de la aplicación
- `data/teams.ts`: aloja todos los datos estáticos de prueba de la aplicación

## Datos adicionales

Se hizo uso de `react-linear-gradient` junto con el elemento `LinearGradient` para darle al fondo una transición de color en gradiente. 

Se utiliza SafeAreaProvider junto a SafeAreaView para asegurar que el contenido nunca se muestre por encima de la barra de estado superior ni la barra de navegación inferior

### Proyecto creado por Benjamín López

Ninguna parte de este proyecto fue generada con IA generativa