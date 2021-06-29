import { StyleSheet } from 'react-native';

export const stylesContainer = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
    },
    containerMovil: {
        flex: 1,
        padding: 0,
        maxWidth: 700,
        alignContent: 'center',
        alignSelf: 'center',
        margin: 0,
    },
});

export const stylesBotones = StyleSheet.create({
    viewBotonStandar: {
        maxWidth: 500,
        minWidth: 500,
        alignContent: 'center',
        alignSelf: 'center',
        margin: 12,
    },
    botonDentroTable: {
        fontSize:8,

    }
});

export const stylesInputs = StyleSheet.create({
    inputGenerico: {
        borderWidth: 1,
    },
});


export const stylesLabels = StyleSheet.create({
    titulo1: {
        fontSize: 18,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    tituloTabla1: {
        fontSize: 15,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
        borderWidth: 1
    },
});

