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
			es24: true,
		}
	}

	obtenerColorRandom() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	mostrarAlerta(){
		Vibration.vibrate(150, false);
		Alert.alert(
			'Sale de varias formas',
			null,
			[
			  { text: 'Oki', onPress: () => console.log('OK Pressed') }
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
						this.state.es24 == true ?
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
								<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={1}></Input>
							</Item>
							<Item style={{width: 60}} regular>
								<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={1}></Input>
							</Item>
							<Item style={{width: 60}} regular>
								<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={1}></Input>
							</Item>
							<Item style={{width: 60}} regular>
								<Input styles={styles.textInputNumeros} keyboardType={"numeric"} maxLength={1}></Input>
							</Item>
						</View>
						<Button title={"Ver posibilidades"} color={this.obtenerColorRandom()} onPress={this.mostrarAlerta} style={styles.posibilidadesBoton}/>
						
						<Button title={"Cambiar a Cripto <Por hacerse>"} color={this.obtenerColorRandom()} style={styles.alternarJuegoBoton}/>
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
