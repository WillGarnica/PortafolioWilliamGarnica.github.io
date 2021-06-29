import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { stylesContainer, stylesBotones } from '../styles/Styles';
import * as ConstantesApp from '../ConstantesApp';

const IndexUI = (props: any) => {
    const [yaSeHizoFechtAlBack, setYaSeHizoFechtAlBack] = useState(false);

    /**
     * Este metodo se hace solo para hacer un llamado al backend immediatamente se carga el frontend, y el motivo es que el backend, 
     * al ser un plan gratuito de heroku, se domora alrededor de 10 segundos en prender cuando esta suspendido, 
     * de esta forma se agiliza un poco el inicio del servidor backend
     * @returns 
     */
    async function fechtBackendHome() {
        if (yaSeHizoFechtAlBack) {
            return;
        }
        try {
            let infoHome= await (await fetch(ConstantesApp.urlBackPruebaIngeneo)).json();
            console.log("infoHome: ", infoHome);
        } catch (error) {
            console.error("Error en los fechts: ", error);
        } finally {
            setYaSeHizoFechtAlBack(true);
        }
    }

    fechtBackendHome();

    return (
        <ScrollView style={stylesContainer.container}>
            <View style={stylesBotones.viewBotonStandar}>
                <Button title="Consideraciones del sistema" onPress={() => props.navigation.navigate('ConsideracionesDelSistemaUI')} />
                <Text> </Text> {/* espacio entre los botones */}
                <Button title="Gestionar salas" onPress={() => props.navigation.navigate('GestionarSalasUI')} />
            </View>
        </ScrollView>
    )
}


export default IndexUI;