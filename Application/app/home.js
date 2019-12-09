import React, { Component } from 'react';
import { AppRegistry,
				View,
				Text,
				StyleSheet,
				TouchableOpacity,
				Image } from 'react-native';

export default class home extends Component{
	static navigationOptions = ({ navigation }) => ({
		
	});

	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View style={styles.container}>


		<Image
    source={require('../image/logo_transparent.png')}
    style={styles.logo}/>


		<TouchableOpacity
		onPress={() => navigate('Login')}
		style={styles.btn1}>
		<Text style={styles.btnText}>Se connecter</Text>
		</TouchableOpacity>

		<TouchableOpacity
		onPress={()=> navigate('Register')}
		style={styles.btn2}>
		<Text style={styles.btnText}>S'enregistrer</Text>
		</TouchableOpacity>

		<TouchableOpacity
		onPress={()=> navigate('WhoIs')}
		style={styles.btn2}>
		<Text style={styles.btnText}>Qui sommes-nous ?</Text>
		</TouchableOpacity>


      </View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		display:'flex',
		alignItems:'center',
		justifyContent:'center'
	},
	logo: {
    width: 400,
    height: 350
  },
	btn1:{
		backgroundColor:'#3A4750',
		padding:10,margin:10,width:'85%',
		alignItems:'center',
		justifyContent:'center',
		borderRadius: 15
	},
	btn2:{
		backgroundColor:'#3A4750',
		padding:10,margin:10,width:'85%',
		alignItems:'center',
		justifyContent:'center',
		borderRadius: 15
	},
	btnText:{
		color:'#fff',
		fontWeight:'bold',
		alignItems:'center',
		justifyContent:'center',
		fontSize: 16
	},

});


AppRegistry.registerComponent('home', () => home);
