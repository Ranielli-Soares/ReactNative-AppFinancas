import React from "react";
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from "./src/contexts/auth";

import Routes from "./src/routes";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#f0f4ff' barStyle='dark-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
