import React, {Component} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Alert,Image ,Dimensions, TextInput ,TouchableOpacity,AsyncStorage,ActivityIndicator} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import styles from './loginStyle.js';
const windowHeight = Dimensions.get('window').height;
const Loader=()=>(
  <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
)

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      contact:'',
      token:null,
      current_screen:"",
      numValid:true,
      loading:false
    }
  }

  valid = () =>{
    if(this.state.contact.length!=10){
      this.setState({numValid:false});
    }else{
      this.setState({numValid:true})
    }
  }

  async _getStorageValue(){
    let value = await AsyncStorage.getItem("current_screen");
    try{
      if (value===null || value===""){
        this.setState({current_screen:"Login"})
      }
      else if(value==="Login"){
        this.setState({current_screen:"Login"})
      }
      else{
        this.props.navigation.navigate(value);
      }
    }
    catch{
      this.setState({current_screen:"Login"})
    }
    
  }

  _storeData = async (key,val) => {
    try {
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      alert(error);
    }
  };

  login=async (username,password)=>{
    if (this.state.contact.length<10){
     this.setState({numValid:false})
      return;
    }
    try {
      let response = await fetch('http://www.genz360.com:81/inflogin',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile_no: this.state.contact,
        }),
      });
      let responseJson = await response.json();
      if (responseJson.valid){
        this._storeData('tokken', String(JSON.stringify(responseJson.tokken) ));
        this.setState({loading:false})
        this.props.navigation.navigate("OTPVERIFY");
      }
      else{
        alert(responseJson.err);
        this.setState({loading:false})
      }
    } catch (error) {
      alert(error)
      this.setState({loading:false})
    }
  }

  componentWillMount(){
    this._getStorageValue();
    Font.loadAsync({
      'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'SF': require('../assets/fonts/SF.ttf'),
    });
  }


  render(){
    if (this.state.current_screen===""){
      return <Loader />
    }
    else if (this.state.current_screen==="Login"){
      if (!this.state.loading){
    return(
      <ScrollView style={styles.container}  keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'>
        <View style={{flexDirection:'column',justifyContent:'center'}}>
        <View style={styles.logowrap}>  
            <View style={styles.logo}>
                <Image source ={require('./logo.png')} style={styles.logoimg}/>
            </View>
        </View>

        <View style={{flexDirection:'row',paddingLeft:'6%'}}>
          <Text style={styles.wel_txt}>Welcome!{'\n'} <Text style={{color:'#f96d15'}}>Signup</Text> To Continue</Text>
        </View>

        {!this.state.numValid ? <Text style={{textAlign:'left',marginLeft:'5%',marginTop:18,fontSize:15,fontFamily:'SF',color:'#eb7070'}}>Enter a 10 digit Number</Text> 
        : null }
      <View style={[styles.input_wrap,{marginTop:10}]}>
        <View style={styles.inputSection_icon}>
            <Icon style={styles.icon} name="phone" size={24} color="#dadada" />
            <TextInput
                 style={styles.input_icon}
                 placeholder="PHONE NUMBER"
                 keyboardType={'numeric'}
                 onChangeText={(contact) => {this.setState({contact:contact})}}
                 value={this.state.contact}
                 underlineColorAndroid="transparent"
                 maxLength={10}
                />
         </View>

        
              

                  <TouchableOpacity style={styles.nextbtn} onPress={()=>{this.login();this.setState({loading:true})}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Text style={styles.nextbtn_txt}>NEXT</Text>
                         <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
                        </View>
                   </TouchableOpacity>

                   

        </View>
        </View>
        <View style={{paddingBottom:40}}></View>

      </ScrollView>
    );}
    else{
      return <Loader />
    }
    }
    else{
      return <Loader />
    }
  }
}



