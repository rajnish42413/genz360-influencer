import React, {Component} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image , TextInput,AsyncStorage ,TouchableOpacity,ActivityIndicator} from 'react-native';
import styles from './loginStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import header from './headerStyle';
import * as Font from 'expo-font';


const Loader=()=>(
  <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
)
export default class OTP extends Component {

  constructor(props){
    super(props);
    this.state={
      otp:'',
      tokken:""
    }
    this._getStorageValue = this._getStorageValue.bind(this)
  }

  async _getStorageValue(){
    let value = await AsyncStorage.getItem("tokken");
    this.setState({tokken:value.toString()})
  }

  componentDidMount(){
    this._getStorageValue();
    Font.loadAsync({
      'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'SF': require('../assets/fonts/SF.ttf'),
    });
  }

  verifyotp=async ()=>{
    if(this.state.otp==="" || this.state.otp.length!==4){
      alert("invalid otp");
      return;
    }
        try {
      
      let response = await fetch('http://www.genz360.com:81/verify-otp-inf',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp:this.state.otp,
          tokken: this.state.tokken
        }),
      });
      
      let responseJson = await response.json();
  
      if (responseJson.valid && responseJson.updated){
        this.setState({loading:false})
          this.props.navigation.navigate("Home");  
      }
        else if(responseJson.valid && !responseJson.updated){
          this.setState({loading:false})
          this.props.navigation.navigate("INFDETAILS");
        }
      
      else{
        alert(responseJson.err);
        this.setState({loading:false})
      }
    } catch (error) {
      alert("Some thing went wrong!!!");
      this.setState({loading:false})

    }
  }

  render(){
    if (!this.state.loading)
    {
    return(

      <View style={header.header_wrapper}  keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'>
      <View style={header.wrap}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
          <Icon  style={styles.backbtn} name="arrow-left" size={24} color="#fff"/>
          </TouchableOpacity>
          <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
      </View>

      <ScrollView style={header.mainSection}>

                       <View style={{marginTop:'20%'}}>
                          <Text style={styles.wel_txt}>OTP has been sent to your{'\n'}Phone</Text>
                        </View>
          
                        <View style={[styles.inputSection_icon,{marginTop:50}]}>
                          <Icon style={styles.icon} name="asterisk" size={24} color="#dadada" />
                          <TextInput
                          style={styles.input_icon}
                          keyboardType="numeric"
                          placeholder="4 digit OTP"
                          onChangeText={(otp) => {this.setState({otp:otp})}}
                          value={this.state.otp}
                          underlineColorAndroid="transparent"
                          ref={(b)=>this.otp=b}
                          />                 
                      </View>
                  <TouchableOpacity style={{marginTop:15,marginLeft:'2%',width:160,}}>
                    <Text style={{fontSize:16,color:'blue'}}>Resend OTP</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.nextbtn} onPress={()=>{this.verifyotp();this.setState({loading:true})}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Text style={styles.nextbtn_txt}>NEXT</Text>
                         <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
                        </View>
                   </TouchableOpacity>

      </ScrollView>
 
</View>
    
     

    ); }
    else{
      return <Loader />
    }
  }
}

