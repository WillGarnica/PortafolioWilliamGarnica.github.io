import React, { useState } from 'react';
import { stylesContainer, stylesLabels } from '../styles/Styles';
import { Button, View, Text, ScrollView } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import * as ConstantesApp from '../ConstantesApp';
import { Ciudad, FormatoPelicula, Sala, Sucursal } from '../model/Model';

const CrearSalaUI = (props: any) => {

    const [verDispocisionSillas, setVerDispocisionSillas] = useState(false);
    const [yaSeCargoLaInfo, setYaSeCargoLaInfo] = useState(false);
    const [itemsCiudades, setItemsCiudades]: any[] = useState([]);
    const [lstSucursales, setlstSucursales]: any[] = useState([]);
    const [itemsSucursalesPorCiudad, setItemsSucursalesPorCiudad]: any[] = useState([]);
    const [itemsTiposDeSala, setItemsTiposDeSala]: any[] = useState([]);
    const [ideCiudadSeleccionada, setIdeCiudadSeleccionada] = useState();
    const [idSucursalSeleccionada, setIdSucursalSeleccionada] = useState();
    const [idTipoSalaSeleccionada, setIdTipoSalaSeleccionada] = useState();
    const [numFilas, setNumFilas] = useState(3);
    const [numSillasPorFila, setNumSillasPorFila] = useState(3);

    async function crearSala() {

        let validado = true;
        let msjError = '';
        if (!ideCiudadSeleccionada) {
            msjError = 'Error, debe seleccionar una ciudad';
            validado = false;
        }
        if (!idSucursalSeleccionada) {
            msjError = msjError + ', Error, debe seleccionar una sucursal';
            validado = false;
        }
        if (!idTipoSalaSeleccionada) {
            msjError = msjError + ', Error, debe seleccionar un tipo de sala.';
            validado = false;
        }
        if (!validado) {
            alert(msjError);
            return;
        }

        let salaACrear: Sala = new Sala;
        salaACrear.ideSala = null;
        salaACrear.numFilas = numFilas;
        salaACrear.numMaxSillasPorFila = numSillasPorFila;
        salaACrear.sucursal = new Sucursal;
        salaACrear.sucursal.idSucursal = idSucursalSeleccionada;
        salaACrear.formatoPelicula = new FormatoPelicula;
        salaACrear.formatoPelicula.ideFormatoPelicula = idTipoSalaSeleccionada;

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(salaACrear)
            };
            salaACrear = await (await fetch(ConstantesApp.urlBackPruebaIngeneo + "/sala/", requestOptions)).json();

            alert("Sala creada de forma exitosa");

            // de esta forma el navigation recarga la pagina destino y muestra el listado completo de los registros
            props.navigation.push('GestionarSalasUI')
        } catch (error) {
            alert(error)
        }
    }

    async function consultarCiudadesSucursalesTiposDeSala() {
        if (yaSeCargoLaInfo) {
            return;
        }
        try {
            let itemCiudadestemp: Item[] = [];
            let lstCiudad: Ciudad[] = await (await fetch(ConstantesApp.urlBackPruebaIngeneo + "/ciudad/")).json();
            lstCiudad.forEach(ciudad => {
                itemCiudadestemp.push({ label: ciudad.nomCiudad, value: ciudad.ideCiudad })
            });
            setItemsCiudades(itemCiudadestemp);

            setlstSucursales(await (await fetch(ConstantesApp.urlBackPruebaIngeneo + "/sucursal/")).json());

            let itemTiposSalatemp: Item[] = [];
            let lstTipoSala: FormatoPelicula[] = await (await fetch(ConstantesApp.urlBackPruebaIngeneo + "/formatoPelicula/")).json();
            lstTipoSala.forEach(tipoSala => {
                itemTiposSalatemp.push({ label: tipoSala.nomFormatoPelicula, value: tipoSala.ideFormatoPelicula })
            });
            setItemsTiposDeSala(itemTiposSalatemp);

            console.log("Ciudades: ", itemsCiudades);
            console.log("Tipos de sala: ", itemsTiposDeSala);

        } catch (error) {
            console.error("Error en los fechts: ", error);
        } finally {
            setYaSeCargoLaInfo(true);
        }
    }

    consultarCiudadesSucursalesTiposDeSala();

    const itemsNumFilas = () => { return itemsNumeros(3, 27) };
    const itemsNumSillasPorFila = () => { return itemsNumeros(3, 10) }

    const itemsNumeros: any = (numInicio: number, numFinal: number) => {
        let itemsNumeros = [];
        for (let i = numInicio; i <= numFinal; i++) {
            itemsNumeros.push({ label: i, value: i });
        }
        return itemsNumeros;
    }

    const eventoSelecionCiudad = (idCiudadSeleccionada: string) => {
        let itemSucursalesPorCiudadTemp: any = [];
        lstSucursales.forEach(sucursal => {
            if (sucursal.ciudad.ideCiudad == idCiudadSeleccionada) {
                itemSucursalesPorCiudadTemp.push({ label: sucursal.nombre, value: sucursal.idSucursal })
            }
        });
        setItemsSucursalesPorCiudad(itemSucursalesPorCiudadTemp);
        setIdeCiudadSeleccionada(idCiudadSeleccionada);
    }

    function armarDispocisionSillas() {
        let arrayFilasPorLetra = [];
        for (let index = 1; index <= numFilas; index++) {
            if (index == 1) arrayFilasPorLetra.push('A');
            else if (index == 2) arrayFilasPorLetra.push('B');
            else if (index == 3) arrayFilasPorLetra.push('C');
            else if (index == 4) arrayFilasPorLetra.push('D');
            else if (index == 5) arrayFilasPorLetra.push('E');
            else if (index == 6) arrayFilasPorLetra.push('F');
            else if (index == 7) arrayFilasPorLetra.push('G');
            else if (index == 8) arrayFilasPorLetra.push('H');
            else if (index == 9) arrayFilasPorLetra.push('I');
            else if (index == 10) arrayFilasPorLetra.push('J');
            else if (index == 11) arrayFilasPorLetra.push('K');
            else if (index == 12) arrayFilasPorLetra.push('L');
            else if (index == 13) arrayFilasPorLetra.push('M');
            else if (index == 14) arrayFilasPorLetra.push('N');
            else if (index == 15) arrayFilasPorLetra.push('Ñ');
            else if (index == 16) arrayFilasPorLetra.push('O');
            else if (index == 17) arrayFilasPorLetra.push('P');
            else if (index == 18) arrayFilasPorLetra.push('Q');
            else if (index == 19) arrayFilasPorLetra.push('R');
            else if (index == 20) arrayFilasPorLetra.push('S');
            else if (index == 21) arrayFilasPorLetra.push('T');
            else if (index == 22) arrayFilasPorLetra.push('U');
            else if (index == 23) arrayFilasPorLetra.push('V');
            else if (index == 24) arrayFilasPorLetra.push('W');
            else if (index == 25) arrayFilasPorLetra.push('X');
            else if (index == 12) arrayFilasPorLetra.push('Y');
            else if (index == 27) arrayFilasPorLetra.push('Z');
        }

        return (

            <View style={{ borderWidth: 1, alignContent: 'center', alignSelf: 'center', }} >
                <Text>Dispocicion de sillas</Text>
                <Text> </Text>{/* espacio entre elementos */}

                {arrayFilasPorLetra.map(filaLetra => {
                    return armarfila(filaLetra);
                })}

                <Text> </Text>{/* espacio entre elementos */}
                {<Button title="Cerrar" onPress={() => { setVerDispocisionSillas(false) }} />}

            </View>
        );
    }

    function armarfila(letra: string) {
        let textoPorFila = '';
        for (let index = 1; index <= numSillasPorFila; index++) {
            textoPorFila = textoPorFila + " " + letra + index + " ";
        }
        return (
            <View>
                <Text style={{ fontFamily: 'Courier New', }}>{textoPorFila}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={stylesContainer.container}>

            {!yaSeCargoLaInfo ?
                <View style={stylesContainer.containerMovil}>Cargando ... </View>
                :
                <View style={stylesContainer.containerMovil}>

                    <Text style={stylesLabels.titulo1}>Crear Sala</Text>
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text>Ciudad</Text>
                    <RNPickerSelect onValueChange={(value) => eventoSelecionCiudad(value)} items={itemsCiudades} />
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text>Sucursal</Text>
                    <RNPickerSelect onValueChange={(value) => { setIdSucursalSeleccionada(value) }} items={itemsSucursalesPorCiudad} />
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text>Tipo de sala</Text>
                    <RNPickerSelect onValueChange={(value) => { setIdTipoSalaSeleccionada(value) }} items={itemsTiposDeSala} />
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text>Número de filas</Text>
                    <RNPickerSelect onValueChange={(value) => { setNumFilas(value) }} items={itemsNumFilas()} placeholder={{}} />
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text>Número de sillas por fila</Text>
                    <RNPickerSelect onValueChange={(value) => { setNumSillasPorFila(value) }} items={itemsNumSillasPorFila()} placeholder={{}} />
                    <Text> </Text>{/* espacio entre elementos */}

                    <Text> </Text> {/* espacio entre elementos */}
                    {!verDispocisionSillas ?
                        <Button title="Ver disposición sillas" onPress={() => { setVerDispocisionSillas(true) }} />
                        :
                        armarDispocisionSillas()
                    }

                    <Text> </Text> {/* espacio entre elementos */}
                    <Button title="Crear sala" onPress={() => { crearSala() }} />

                </View>
            }

        </ScrollView>
    )
}

export default CrearSalaUI;