import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image,ImageBackground ,CheckBox,AsyncStorage } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import header from './headerStyle';
import styles from './loginStyle';







export default class Transfer extends Component{
  
    constructor(props){
        super(props);
        this.state={
            num:0,
            msg:'',
            amount:this.props.navigation.state.params.amount,
        };
    }



    
    nameCheck = () => {
    
    
        if (this.state.num.length===10){
          alert("Checked")
          this._transfer();
        }
        else{
          alert('Enter Valid Number')
        }
      }



      async _getStorageValue(){
        let value = await AsyncStorage.getItem("tokken");
        this.setState({tokken:value.toString()})
      }
      _storeData = async (key,val) => {
        try {
          await AsyncStorage.setItem(key, val.toString());
        } catch (error) {
          // Error saving data
        }
      };
      
      
      _transfer=async ()=>{
        
            try {
          
          let response = await fetch('http://www.genz360.com:81/inf-payment-final',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tokken: this.state.tokken,
                number:this.state.num,
                amount:this.state.amount
            }),
          });
          
          let responseJson = await response.json();
      
          if (responseJson.valid){
            
            alert(responseJson.msg)
          }
          else{
          
            alert(responseJson.err);
          }
        } catch (error) {
          alert(error);
        }
      }
      componentDidMount(){
        this._getStorageValue();
        Font.loadAsync({
          'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
          'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
          'SF': require('../assets/fonts/SF.ttf'),
        });
      }
      
   
   

    render(){

        return(

            <ScrollView style={{backgroundColor:'#fff'}}  keyboardDismissMode='interactive'
            keyboardShouldPersistTaps='handled'>
            <View style={header.header_wrapper}>
            <View style={header.wrap}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Wallet")}>
                <Icon  style={header.backbtn} name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
            </View>
      
            <ScrollView style={header.createSection_ws}>
            
                <Text style={[header.heading_normal,{marginTop:10}]}>Transfer to Paytm</Text>
                  <View style={[{paddingLeft:20,paddingTop:'10%'}]}> 
                    
                  </View>

            <View style={{flexDirection:'column',alignItems:'flex-start'}}>
            <Image source={require('./paytm.png')} style={{width:50,height:50}} />
            <Text style={{fontSize:17,fontFamily:'SF',color:'#000',marginLeft:0,}}>Enter Paytm Number to transfer money to your paytm wallet</Text>
            </View>
            <Text style={{textAlign:'left',marginTop:5,fontSize:15,fontFamily:'SF',color:'#eb7070'}}>{this.state.msg}</Text>


                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'#000',fontFamily:'SF'}}>Amount:</Text>
                    <Text style={{fontSize:22,color:'#000',fontFamily:'Gilroy-ExtraBold',marginLeft:5}}>{this.state.amount}</Text>
                </View>

            <View style={{marginTop:'5%'}}></View>
            <View style={styles.inputSection_icon}>
                {/* <Icon style={styles.icon} name="phone" size={24} color="#dadada" /> */}
                {/* <Image source={require('./paytm.png')} style={{width:20,height:30}} /> */}
                <TextInput
                    style={styles.input_icon}
                    placeholder="PAYTM NUMBER"
                    keyboardType={'numeric'}
                    onChangeText={(num) => {this.setState({num:num})}}
                    value={this.state.num}
                    underlineColorAndroid="transparent"
                    maxLength={10}
                    />
            </View>
                
            <TouchableOpacity style={styles.nextbtn} onPress={()=>this._transfer()}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Text style={styles.nextbtn_txt}>SUBMIT</Text>
                         <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
                        </View>
                   </TouchableOpacity>

                    </ScrollView>
     
     </View>
     </ScrollView>
        );
    }
}


