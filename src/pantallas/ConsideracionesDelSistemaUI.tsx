import React from 'react';
import { View, Text, ScrollView, } from 'react-native';
import { stylesContainer, stylesBotones, stylesLabels } from '../styles/Styles';

const ConsideracionesDelSistemaUI = () => {
    return (
        <ScrollView style={stylesContainer.container}>
            <View style={stylesBotones.viewBotonStandar}>
                <Text style={stylesLabels.titulo1}>Consideraciones del sistema</Text>
                <Text> </Text>{/* espacio entre elementos */}

                Aplicación desarrollada para prueba Ingeneo.
                <Text> </Text>{/* espacio entre elementos */}

                <Text style={stylesLabels.titulo1}>Respecto a FrontEnd</Text>

                Se realizó la aplicación fronEnd con React Native.<br></br>
                Se desplegó en Firebase el cual tiene servicio de hosting de planes gratuitos.<br></br>
                <a target="_blank" href="https://prueba-ingeneo-frontend.web.app/">Ruta despliegue frontEnd</a>
                <a target="_blank" href="https://github.com/elwillan/prueba-ingeneo-frontend">Ruta repositorio frontEnd</a> <br></br>

                El frontEnd fue desarrollado para ser visualizado en computador, no es dispositivos móviles (aplicación no responsive), para una mejor experiencia en la visualización por favor utilice computador.<br></br>
                La aplicación consiste en la creación de Salas según el documento proporcionado. <br></br>
                Para crear salas ingresar por :<br></br><br></br>

                - Gestionar salas<br></br>
                -	Crear sala.<br></br>
                <br></br>
                En la pantalla de creación de salas se deben diligenciar todos los campos. <br></br>
                Se puede visualizar la disposición de las sillas según el documento proporcionado.<br></br>
                La pantalla de “Gestionar Salas” es adicional ya que me pareció útil ver las salas creadas.<br></br>
                La aplicación frontEnd es básica, no pretende ser una aplicación compleja, se desarrollo solo lo necesario para cumplir con el objetivo de la prueba.

                <br></br>
                <br></br>
                <Text style={stylesLabels.titulo1}>Respecto a BackEnd</Text>

                Se realizó aplicación backEnd en Java Spring Boot.<br></br>
                Se desplego el backEnd en Heroku, el cual ofrece servicio hosting con planes gratuitos.<br></br>

                <a target="_blank" href="https://prueba-ingeneo.herokuapp.com/">Ruta despliegue backEnd</a>
                <a target="_blank" href="https://github.com/elwillan/prueba-ingeneo-backend">Ruta repositorio backEnd</a>
                <a target="_blank" href="https://prueba-ingeneo.herokuapp.com/swagger-ui.html#">Ruta documentación de servicios REST expuestos</a> <br></br>

                Solo se realizo CRUD de Sala, y debido que en la creación de una sala es necesario relacionar una Sucursal y un Tipo de sala (formato película) se hicieron servicios REST de consulta de las entidades: Ciudad, Sucursal y FormatoPelicula.
                <br></br>Solo se mapearón las entidades necesarias para la prueba segun documento proporcionado.<br></br>

                <br></br>Debido a que el backend está en un plan gratuito de heroku, el servidor heroku permanece suspendido hasta el momento en el que recibe una solicitud, es decir, si se ingresa por primera vez al sistema este demorara en responder mientras inicia el servidor (aproximadamente 20 segundos), después de eso, la aplicación funcionara de forma normal.
                <br></br>Si el servidor no recibe solicitudes durante 30 minutos vuelve al estado suspendido.<br></br>

                <br></br>
                La base de datos de realizo en Postgres<br></br><br></br>


                Para ver:<br></br>
                -	Archivo Enterprise architect con diagrama entidad relación (abrir con aplicación Enterprise architect)<br></br>
                -	Imagen Formato PNG modelo entidad relacion (si no dispone de Enterprise architect)<br></br>
                -	Script creación modelo base de datos en postgres.<br></br>
                -	Artefactos generados.<br></br>

                <a target="_blank" href="https://drive.google.com/drive/folders/1lJ2J4ibqFKaMterob_qbNU3_RKWn_jj9?usp=sharing">Enlace a carpeta compartida Google Drive</a> <br></br>




                <br></br>

            </View>
        </ScrollView>
    )
}

export default ConsideracionesDelSistemaUI;

