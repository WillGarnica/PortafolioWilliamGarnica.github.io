import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { stylesContainer, stylesBotones, stylesLabels } from '../styles/Styles';
import * as ConstantesApp from '../ConstantesApp';
import { Sala } from '../model/Model';

const GestionarSalasUI = (props: any) => {

    const [lstSucursales, setLstSucursales] = useState([]);
    const [yaSeCargoLaInfo, setYaSeCargoLaInfo] = useState(false);

    consultarSalas();
    async function consultarSalas() {
        if (yaSeCargoLaInfo) {
            return;
        }
        try {
            setLstSucursales(await (await fetch(ConstantesApp.urlBackPruebaIngeneo + "/sala/")).json());
            console.log("Sucursales: ",lstSucursales )
        } catch (error) {
            console.error(error);
        } finally {
            setYaSeCargoLaInfo(true);
        }
    }

    function listarSalas(sala: Sala) {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                {<Text style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1 }}>{sala.sucursal.ciudad.nomCiudad}</Text>}
                {<Text style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1 }}>{sala.sucursal.nombre}</Text>}
                {<Text style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1 }}>Sala {sala.ideSala}</Text>}
                {<Text style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1 }}>Formato {sala.formatoPelicula.nomFormatoPelicula}</Text>}
            </View>
        );
    }

    return (
        <ScrollView style={stylesContainer.container}>
            {!yaSeCargoLaInfo ?
                <View style={stylesContainer.containerMovil}>Cargando ... </View>
                :
                <View style={stylesBotones.viewBotonStandar}>

                    <Text style={stylesLabels.titulo1}>Gestion de salas</Text>
                    <Text> </Text>{/* espacio entre elementos */}
                    <Text> </Text>{/* espacio entre elementos */}
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text >Lista de salas</Text>
                    <Text> </Text>{/* espacio entre elementos */}
                    {
                        lstSucursales.map((sucursal) => { // This will render a row for each data element.
                            return listarSalas(sucursal);
                        })
                    }

                    <Text> </Text>{/* espacio entre elementos */}
                    <Text> </Text>{/* espacio entre elementos */}
                    <Button title="Crear sala" onPress={() => props.navigation.navigate('CrearSalaUI')} />
                </View>
            }
        </ScrollView>
    )
}


export default GestionarSalasUI;