import React, {Component} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image , TextInput ,TouchableOpacity} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import styles from './loginStyle.js';

export default class OTP extends Component {

  constructor(props){
    super(props);
    this.state={
      otp:'',
    }
  }


  componentDidMount(){
    Font.loadAsync({
      'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'SF': require('../assets/fonts/SF.ttf'),
    });
  }

  
  render(){
    return(
      <ScrollView style={[styles.container,{marginTop:0}]}>
        
        <View style={styles.logowrap}>  
            <View style={styles.logo}>
                <Image source ={require('./logo.png')} style={styles.logoimg}/>
            </View>
        </View>

        <View style={{flexDirection:'row',paddingLeft:'6%'}}>
          <Text style={styles.wel_txt}>OTP has been sent to {'\n'}your Phone</Text>
        </View>

      <View style={styles.input_wrap}>
        <View style={styles.inputSection_icon}>
            <Icon style={styles.icon} name="asterisk" size={24} color="#dadada" />
            <TextInput
                 style={styles.input_icon}
                 placeholder="6 Digit OTP"
                 keyboardType={'numeric'}
                 onChangeText={(contact) => {this.setState({contact:contact})}}
                 value={this.state.contact}
                 maxLength={4}
                 underlineColorAndroid="transparent"
                />
         </View>

            
         <TouchableOpacity style={{marginTop:15,marginLeft:'2%',width:160,}}>
            <Text style={{fontSize:17,color:'blue'}}>RESEND OTP</Text>
         </TouchableOpacity>
        
              

                  <TouchableOpacity style={styles.nextbtn}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Text style={styles.nextbtn_txt}>NEXT</Text>
                         <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
                        </View>
                   </TouchableOpacity>

                   <TouchableOpacity style={{borderWidth:1,flexDirection:'row',justifyContent:'center',borderColor:'#dadada',
                        backgroundColor:'#dadada',borderRadius:8,marginTop:20}}>
                      <Text style={{fontSize:18,paddingTop:12,paddingBottom:12,fontFamily:'SF',color:'#000'}}>
                        BACK</Text>
                   </TouchableOpacity>

        </View>

            <View style={{paddingBottom:40}}></View>

      </ScrollView>
    );
  }
}



