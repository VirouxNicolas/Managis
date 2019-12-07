import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Alert
} from 'react-native'

export default class CreateAnnonce extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../image/icons8-place-marker-24.png')}
        style={{ height: 24, width: 24 }} />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      userIdUser: '',
      userNomReste: '',
      userQuantiteReste: '',
      userDescriptionReste: '',
      userAdresse: '',
    }
  }



  userCreateAnnonce = () => {
    const { userIdUser } = this.state;
    const { userNomReste } = this.state;
    const { userQuantiteReste } = this.state;
    const { userDescriptionReste } = this.state;
    const { userAdresse } = this.state;

    if (userNomReste == "") {

      this.setState({ userNomReste: 'Entrez le nom de votre reste ' })

    }
    else {

      fetch('http://192.168.1.5:8878/ManagisApp/ManagisApp/DBRestes/createAnnonce.php', {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          userId: AsyncStorage.getItem('UserId'),
          nomReste: userNomReste,
          quantiteReste: userQuantiteReste,
          descriptionReste: userDescriptionReste,
          adresse: userAdresse,
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(userIdUser);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

/*  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('UserId');
    if (value !==null) {
      this.setState({userIdUser: value});
    }
  }
*/
  render() {
    return (
      <ScrollView>
        <View style={styles.containerTitre}>
          <View style={{ flex: 6, justifyContent: 'center' }}>
            <Text style={styles.titrePage}>Créer une annonce </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer('myNav')}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../image/icons8-menu-arrondi-50.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View >
          <View style={styles.inputContainer}>
            <Text style={styles.com}>Quel est votre reste ?</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Ex : bac de bière'
              placeholderTextColor='#FFFFFF'
              onChangeText={userNomReste => this.setState({ userNomReste })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Spécifiez la quantité</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Quantité'
              placeholderTextColor='#FFFFFF'
              onChangeText={userQuantiteReste => this.setState({ userQuantiteReste })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Ajoutez une description</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Description'
              placeholderTextColor='#FFFFFF'
              onChangeText={userDescriptionReste => this.setState({ userDescriptionReste })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Ajoutez le lieu de l'échange</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Ex: 2 rue du ciseau'
              placeholderTextColor='#FFFFFF'
              onChangeText={userAdresse => this.setState({ userAdresse })}
            />
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity
              onPress={this.userCreateAnnonce}
              style={styles.submitButton}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Créer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 350
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  submitContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  inputBox: {
    width: 300,
    backgroundColor: '#3A4750',
    borderRadius: 25,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10
  },
  submitButton: {
    backgroundColor: '#3A4750',
    width: 100,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  titrePage: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  },
  containerTitre: {
    backgroundColor: '#3A4750',
    flexDirection: 'row',
    height: 60
  },
  signupButton: {
    textAlign: 'center',
    marginVertical: 10,
    paddingVertical: 13,
    color: '#3A4750'
  },
  icon: {
    height: 30,
    width: 30
  },
  com: {
    marginTop: 10,
  }
})