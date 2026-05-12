import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Slider from "@react-native-community/slider";

import { estilos } from "../styleSheet/estilos";

function Conteudo() {

    const [nome, setNome] = useState('');
    const [filme, setFilme] = useState('Veloses e Furiosos');
    const [nota, setNota] = useState(8);
    const [comentario, setComentario] = useState('');
    const [resultado, setResultado] = useState('');

    function avaliarFilme() {

        setResultado(
            `Nome: ${nome}\n` +
            `Filme: ${filme}\n` +
            `Nota: ${nota.toFixed(1)}\n` +
            `Comentário: ${comentario}`
        );
    }

    return (

        <View style={estilos.conteudo}>

            <Text style={estilos.titulo}>
                Avaliação de Filmes
            </Text>

            <TextInput
                placeholder="Digite seu nome"
                style={estilos.input}
                value={nome}
                onChangeText={setNome}
            />

            <Text style={estilos.label}>
                Escolha o filme:
            </Text>

            <Picker
                selectedValue={filme}
                style={estilos.picker}
                onValueChange={(itemValue) =>
                    setFilme(itemValue)
                }
            >
                <Picker.Item label="Veloses e Furiosos" value="Veloses e Furiosos" />
                <Picker.Item label="60Segundos" value="60Segundos" />
                <Picker.Item label="Need For Speed" value="Need For Speed" />
            </Picker>

            <Image
                source={require('../img/logo.jpg')}
                style={estilos.imagem}
            />

            <Text style={estilos.label}>
                Nota: {nota.toFixed(1)}
            </Text>

            <Slider
                style={estilos.slider}
                minimumValue={0}
                maximumValue={10}
                step={1}
                value={nota}
                minimumTrackTintColor="#17b372"
                maximumTrackTintColor="#888"
                thumbTintColor="#17b372"
                onValueChange={(valor) => setNota(valor)}
            />

            <TextInput
                placeholder="Comentário"
                style={estilos.inputComentario}
                multiline={true}
                value={comentario}
                onChangeText={setComentario}
            />

            <TouchableHighlight
                style={estilos.botao}
                underlayColor="#cc4400"
                onPress={avaliarFilme}
            >
                <Text style={estilos.textoBotao}>
                    Avaliar
                </Text>
            </TouchableHighlight>

            <Text style={estilos.resultado}>
                {resultado}
            </Text>

        </View>
    );
}

export default Conteudo;