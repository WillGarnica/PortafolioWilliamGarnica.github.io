import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConsideracionesDelSistemaUI from './src/pantallas/ConsideracionesDelSistemaUI';
import CrearSalaUI from './src/pantallas/CrearSalaUI';
import GestionarSalasUI from './src/pantallas/GestionarSalasUI';
import IndexUI from './src/pantallas/IndexUI';

const Stack = createStackNavigator();

function MiNavegacion() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IndexUI" component={IndexUI} options={{ title: 'Prueb55555a Ingeneo William Garnica', }} />
      <Stack.Screen name="ConsideracionesDelSistemaUI" component={ConsideracionesDelSistemaUI} options={{ title: 'Prueba Ingeneo William Garnica.' }} />
      <Stack.Screen name="GestionarSalasUI" component={GestionarSalasUI} options={{ title: 'Prueba Ingeneo William Garnica.' }} />
      <Stack.Screen name="CrearSalaUI" component={CrearSalaUI} options={{ title: 'Prueba Ingeneo William Garnica.' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MiNavegacion />
    </NavigationContainer>
  );
}


