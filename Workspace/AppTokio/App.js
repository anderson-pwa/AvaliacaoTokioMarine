import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Desabilita os alertas.
console.disableYellowBox = true;

import Home from './src/Views/Home';
import FOperacao from './src/Views/FOperacao';
import Listar from './src/Views/Listar';


const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    FOperacao,
    Listar
  })
);

export default function App() {
  return <Routes/>
}
