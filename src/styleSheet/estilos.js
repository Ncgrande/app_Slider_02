import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    conteudo: {
        flex: 1,
        backgroundColor: '#d1bb70',
        margin: 10,
        padding: 20,
    },

    titulo: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#17b372',
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    label: {
        fontSize: 16,
        marginBottom: 10,
    },

    picker: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#17b372',
        marginBottom: 20,
    },

    imagem: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
    },

    slider: {
        width: '100%',
        marginBottom: 20,
    },

    inputComentario: {
        backgroundColor: '#e7dc3b',
        borderWidth: 1,
        borderColor: '#17b372',
        borderRadius: 5,
        height: 80,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    },

    botao: {
        backgroundColor: '#17b372',
        width: 110,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },

    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },

    resultado: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 30,
    },

});