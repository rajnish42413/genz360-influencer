import React, {Component} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image , TextInput ,TouchableOpacity} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import { WebView } from 'react-native-webview';
 
import * as Font from 'expo-font';
import styles from './loginStyle.js';

export default class Web extends Component {

  constructor(props){
    super(props);
    this.state={
    
    }
  }





 



  render(){
    return(
      <ScrollView style={styles.container}>

<WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />

      </ScrollView>
    );
  }
}



