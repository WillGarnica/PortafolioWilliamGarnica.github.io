# 

aplicacion en react native para front end de prueba de ingeneo

desarrollo
- para ejecutar la aplicacion en desarollo: expo start

- para build web: expo build:web
    necesario instalar expo- cli (npm install --global expo-cli)
    esta instruccion crea la carpeta 'web-build', y esta carpeta es la que toma firebase para hacer el despliegue

produccion
- para desplegar en firebase: firebase deploy --only hosting:prueba-ingeneo-frontend
    necesario instalar firebase, en este caso esta logeado a firebaase con la cuenta de elwillan@gmail.com
