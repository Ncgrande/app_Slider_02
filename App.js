import React from "react";
import { View } from "react-native";

import Conteudo from "./src/components/Conteudo";
import { estilos } from "./src/styleSheet/estilos";

export default function App() {

  return (

    <View style={estilos.container}>

      <Conteudo />

    </View>
  );
}