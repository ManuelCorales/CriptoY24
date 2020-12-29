/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Input, Item } from 'native-base';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TextInput,
	Switch,
	Button,
	Alert,
	Vibration
} from 'react-native';

import {
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Aplicacion extends Component {
	constructor(){
		super();
		this.state = {
			arrayNumeros: [],
			numeroAObtener: 24,
			mostrarSolucion: false,
		}
		this.mostrarAlerta = this.mostrarAlerta.bind(this);
		this.actualizarNumeros = this.actualizarNumeros.bind(this);
	}

	obtenerColorRandom() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	actualizarNumeros(index, numero){
		let arrayNumeros = this.state.arrayNumeros;
		arrayNumeros[index] = parseInt(numero);
		this.setState({
			arrayNumeros
		})
	}

	mostrarAlerta(){
		let resultado = 0;
		let array4Numeros = this.state.arrayNumeros;
		let contador = 0;
		let soluciones = [];
		let solucion = "";
		let solucionParcial = "";
		for(let numero1 of array4Numeros){
			let array3Numeros = Array.from(array4Numeros);
			array3Numeros.splice(array4Numeros.findIndex(x => x == numero1), 1);
			for(let numero2 of array3Numeros){
				let array2Numeros = Array.from(array3Numeros);
				array2Numeros.splice(array3Numeros.findIndex(x => x == numero2), 1);
				for(let numero3 of array2Numeros){
					let array1Numeros = Array.from(array2Numeros);
					array1Numeros.splice(array2Numeros.findIndex(x => x == numero3), 1);
					for(let numero4 of array1Numeros){
						contador++;
						for(let agrupacion = 0; agrupacion < 3; agrupacion++){
							for(let operador1 = 0; operador1 < 4; operador1++){
								for(let operador2 = 0; operador2 < 4; operador2++){
									for(let operador3 = 0; operador3 < 4; operador3++){										
										if(agrupacion == 0){
											if(operador1 == 0){
												resultado = numero1 + numero2;
												solucion = solucion.concat(`${numero1} + ${numero2}`);
											} else if(operador1 == 1) {
												resultado = numero1 - numero2;
												solucion = solucion.concat(`${numero1} - ${numero2}`);
											} else if(operador1 == 2) {
												resultado = numero1 * numero2;
												solucion = solucion.concat(`${numero1} * ${numero2}`);
											} else if(operador1 == 3) {
												resultado = numero1 / numero2;
												solucion = solucion.concat(`${numero1} / ${numero2}`);
											}
											if(operador2 == 0){
												resultado += numero3;
												solucion = solucion.concat(` + ${numero3}`);
											} else if(operador2 == 1) {
												resultado -= numero3;
												solucion = solucion.concat(` - ${numero3}`);
											} else if(operador2 == 2) {
												resultado = resultado * numero3;
												solucion = solucion.concat(` * ${numero3}`);
											} else if(operador2 == 3) {
												resultado = resultado / numero3;
												solucion = solucion.concat(` / ${numero3}`);
											}
											if(operador3 == 0){
												resultado += numero4;
												solucion = solucion.concat(` + ${numero4}`);
											} else if(operador3 == 1) {
												resultado -= numero4;
												solucion = solucion.concat(` - ${numero4}`);
											} else if(operador3 == 2) {
												resultado = resultado * numero4;
												solucion = solucion.concat(` * ${numero4}`);
											} else if(operador3 == 3) {
												resultado = resultado / numero4;
												solucion = solucion.concat(` / ${numero4}`);
											}
										} else if (agrupacion == 1) {
											let resultadoParcial;
											if(operador1 == 0){
												resultado = numero1 + numero2;
												solucion = solucion.concat(`${numero1} + ${numero2}`);
											} else if(operador1 == 1) {
												resultado = numero1 - numero2;
												solucion = solucion.concat(`${numero1} - ${numero2}`);
											} else if(operador1 == 2) {
												resultado = numero1 * numero2;
												solucion = solucion.concat(`${numero1} * ${numero2}`);
											} else if(operador1 == 3) {
												resultado = numero1 / numero2;
												solucion = solucion.concat(`${numero1} / ${numero2}`);
											}
											if(operador3 == 0){
												resultadoParcial = numero3 + numero4;
												solucionParcial = solucionParcial.concat(`${numero3} + ${numero4}`);
											} else if(operador3 == 1) {
												resultadoParcial = numero3 - numero4;
												solucionParcial = solucionParcial.concat(`${numero3} - ${numero4}`);
											} else if(operador3 == 2) {
												resultadoParcial = numero3 * numero4;
												solucionParcial = solucionParcial.concat(`${numero3} * ${numero4}`);
											} else if(operador3 == 3) {
												resultadoParcial = numero3 / numero4;
												solucionParcial = solucionParcial.concat(`${numero3} / ${numero4}`);
											}
											if(operador2 == 0){
												resultado = resultado + resultadoParcial;
												solucion = solucion.concat(` + (${solucionParcial})`);
											} else if(operador2 == 1) {
												resultado = resultado - resultadoParcial;
												solucion = solucion.concat(` - (${solucionParcial})`);
											} else if(operador2 == 2) {
												resultado = resultado * resultadoParcial;
												solucion = solucion.concat(` * (${solucionParcial})`);
											} else if(operador2 == 3) {
												resultado = resultado / resultadoParcial;
												solucion = solucion.concat(` / (${solucionParcial})`);
											}
											
										} else if (agrupacion == 2) {
											let resultadoParcial;
											if(operador2 == 0){
												resultadoParcial = numero2 + numero3;
												solucionParcial = solucionParcial.concat(`(${numero2} + ${numero3})`);
											} else if(operador2 == 1) {
												resultadoParcial = numero2 - numero3;
												solucionParcial = solucionParcial.concat(`(${numero2} - ${numero3})`);
											} else if(operador2 == 2) {
												resultadoParcial = numero2 * numero3;
												solucionParcial = solucionParcial.concat(`(${numero2} * ${numero3})`);
											} else if(operador2 == 3) {
												resultadoParcial = numero2 / numero3;
												solucionParcial = solucionParcial.concat(`(${numero2} / ${numero3})`);
											}
											if(operador1 == 0){
												resultado = numero1 + resultadoParcial;
												solucion = solucion.concat(`${numero1} + ${solucionParcial}`);
											} else if(operador1 == 1) {
												resultado = numero1 - resultadoParcial;
												solucion = solucion.concat(`${numero1} - ${solucionParcial}`);
											} else if(operador1 == 2) {
												resultado = numero1 * resultadoParcial;
												solucion = solucion.concat(`${numero1} * ${solucionParcial}`);
											} else if(operador1 == 3) {
												resultado = numero1 / resultadoParcial;
												solucion = solucion.concat(`${numero1} / ${solucionParcial}`);
											}
											if(operador3 == 0){
												resultado += numero4;
												solucion = solucion.concat(` + ${numero4}`);
											} else if(operador3 == 1) {
												resultado -= numero4;
												solucion = solucion.concat(` - ${numero4}`);
											} else if(operador3 == 2) {
												resultado = resultado * numero4;
												solucion = solucion.concat(` * ${numero4}`);
											} else if(operador3 == 3) {
												resultado = resultado / numero4;
												solucion = solucion.concat(` / ${numero4}`);
											}	
										}
										if(resultado == this.state.numeroAObtener && !soluciones.find(sol => sol == solucion)){
											soluciones.push(solucion);
										}
										solucion = "";
										solucionParcial = "";
									}
								}	
							}
						}
					}
				}
			}
		}
		Vibration.vibrate(150, false);
		let tituloAlerta;
		if(soluciones.length == 0) {
			tituloAlerta = `No sale`;
		} else if (soluciones.length == 1) {
			tituloAlerta = "Sale de 1 forma";
		} else {
			tituloAlerta = `Sale de varias formas (${soluciones.length})`;
		}
		Alert.alert(
			tituloAlerta,
			this.state.mostrarSolucion ? soluciones.join("\r\n"): null,
			[
			  { text: 'Oki' },
			],
			{ cancelable: true }
		  );
	}

	render(){
		return (
			<>
			<StatusBar barStyle="dark-content" />
			<Header style={styles.header}>
				<Text style={styles.headerTexto}>
					{
						this.state.numeroAObtener == 24 ?
						"24":
						"Cripto"
					}
				</Text>
			</Header>
			<SafeAreaView>
				<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={styles.scrollView}>
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<View style={styles.textInputContainerNumeros}>
								<Item style={{width: 60}} regular>
									<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={2} onChangeText={(numero) => this.actualizarNumeros(0, numero)}></Input>
								</Item>
								<Item style={{width: 60}} regular>
									<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={2} onChangeText={(numero) => this.actualizarNumeros(1, numero)}></Input>
								</Item>
								<Item style={{width: 60}} regular>
									<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={2} onChangeText={(numero) => this.actualizarNumeros(2, numero)}></Input>
								</Item>
								<Item style={{width: 60}} regular>
									<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={2} onChangeText={(numero) => this.actualizarNumeros(3, numero)}></Input>
								</Item>
								{
									this.state.numeroAObtener != 24 &&
									<Item style={{width: 60}} regular>
										<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={2} onChangeText={(numero) => this.setState({numeroAObtener: parseInt(numero)})}></Input>
									</Item>
								}
							</View>
							<Button title={"Ver posibilidades"} color={this.obtenerColorRandom()} onPress={this.mostrarAlerta} style={styles.posibilidadesBoton}/>
							<Button title={this.state.numeroAObtener == 24 ? "Cambiar a Cripto" : "Cambiar a 24"} color={this.obtenerColorRandom()} onPress={() => this.setState({numeroAObtener: this.state.numeroAObtener == 24 ? null: 24})} style={styles.alternarJuegoBoton}/>
							<Text style={styles.mostrarSolucion}>
								Mostrar solucion
							</Text>
								<Switch
									trackColor={{ false: "#767577", true: this.obtenerColorRandom() }}
									thumbColor={this.state.mostrarSolucion ? this.obtenerColorRandom() : "#767577"}
									onValueChange={() => this.setState({mostrarSolucion: !this.state.mostrarSolucion})}
									value={this.state.mostrarSolucion}
								/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
			</>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		alignItems: "center"
	},
	posibilidadesBoton: {
		marginBottom: 10
	},
	mostrarSolucion: {
		marginTop: 30
	},
	alternarJuegoBoton: {
		margin: 20
	},
	headerTexto: {
		fontSize: 20,
		color: "white"
	},
	textInputContainerNumeros:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	textInputNumeros: {
		height: 40, borderColor: 'gray', borderWidth: 1	
	},
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
		alignItems: "center"
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,

	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default Aplicacion;
