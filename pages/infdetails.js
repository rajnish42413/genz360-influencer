import React, {Component} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image , TextInput ,TouchableOpacity ,Picker,AsyncStorage} from 'react-native';
import styles from './loginStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import header from './headerStyle';
import Sm from './sm';
import * as Font from 'expo-font';


export default class INFDETAILS extends Component {

  constructor(props){
    super(props);
    this.state={
        email:'',
        fname:'',
        lname:"",
        loc:'',
        valid:false,
        tokken:"",
        age:"",
        interestselected:null
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
      alert(error);
    }
  };

  submitinfdetails=async ()=>{
    try {
      let response = await fetch('http://www.genz360.com:81/submitinfdetails',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          full_name:this.state.fname+" "+this.state.lname,
          age:this.state.age,
          loc:this.state.loc,
          interestselected:this.state.interestselected,
          tokken:this.state.tokken
        }),
      });
      
      let responseJson = await response.json();
  
      if (responseJson.valid){
        this.props.navigation.navigate("SMH");
      }
      else{
        alert(responseJson.err);
      }
    } catch (error) {
      alert(error);
    }
  }
  selectedSm=(selectedval)=>{
    this.setState({interestselected:selectedval})

}
  componentDidMount(){
    this._getStorageValue();
    this._storeData("current_screen","INFDETAILS");
  }

  render(){
    return(
      <ScrollView>
      <View style={header.header_wrapper}>
      <View style={header.wrap}>
          <Icon  style={styles.backbtn} name="chevron-left" size={24} color="#fff"/>
          <Text style={header.tagline}>Influencer{'\n'}Welcome </Text>
      </View>

      <ScrollView style={header.mainSection}>

                       <View >
                          <Text style={header.heading}>YOUR DETAILS</Text>
                        </View>
          
      <View style={{marginTop:15}}></View>
                      
                      
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={[styles.inputSection_sign,{flex:1,marginRight:5}]}>
    <Icon style={[styles.icon,{marginTop:8}]} name="user" size={24} color="#dadada" />
    <TextInput
         style={styles.input_spoc}
         placeholder="FIRST NAME"
         onChangeText={(fname) => {this.setState({fname:fname})}}
         value={this.state.fname}
         underlineColorAndroid="transparent"
         returnKeyType={'next'}
         onSubmitEditing={()=>this.lname.focus()}
         blurOnSubmit={false}
         />
 </View>

 <View style={[styles.inputSection_sign,{flex:1,marginLeft:5}]}>

    <TextInput
         style={styles.input_spoc}
         placeholder="LAST NAME"
         onChangeText={(lname) => {this.setState({lname:lname})}}
         value={this.state.lname}
         underlineColorAndroid="transparent"
         returnKeyType={'next'}
         ref={(b)=>this.lname=b}
         onSubmitEditing={()=>this.email.focus()}
         />                
 </View>

</View>

         <View style={styles.inputSection_icon}>
            <Icon style={styles.icon} name="at" size={24} color="#dadada" />
            <TextInput
                 style={styles.input_icon_spoc}
                 placeholder="EMAIL ADDRESS"
                 onChangeText={(email) => {this.setState({email:email})}}
                 value={this.state.email}
                 underlineColorAndroid="transparent"
                 returnKeyType={'next'}
                 ref={(b)=>this.email=b}

                 
                 />
         </View>                
               
         <View style={styles.inputSection_icon}>
         <Icon style={[styles.icon,{marginTop:8}]} name="user" size={24} color="#dadada" />
            <TextInput
                 style={styles.input_icon_spoc}
                 placeholder="AGE"
                 onChangeText={(age) => {this.setState({age:age})}}
                 value={this.state.age}
                 underlineColorAndroid="transparent"
                 keyboardType={'numeric'}
                 returnKeyType={'next'}
                 ref={(b)=>this.contact=b}
                 onSubmitEditing={()=>this.desig.focus()}
                 
                 />
         </View>


         <View style={styles.inputSection_icon}>
            <Icon style={styles.icon} name="location-arrow" size={24} color="#dadada" />
            <TextInput
                 style={styles.input_icon_spoc}
                 placeholder="LOCATION"
                 onChangeText={(loc) => {this.setState({loc:loc})}}
                 value={this.state.desig}
                 underlineColorAndroid="transparent"
                 returnKeyType={'next'}
                 ref={(b)=>this.desig=b}
                
              
                 />
         </View> 
         <View style={styles.bi_cont_wrap}>
                   
                   <Sm selectedSm={this.selectedSm} />
   
                   </View>
                    
         <TouchableOpacity style={[header.nextbtn,{marginTop:20}]}  onPress={()=>this.submitinfdetails()}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Text style={header.nextbtn_txt}>NEXT</Text>
                         <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
                        </View>
                   </TouchableOpacity>
          
      </ScrollView>
 
</View>
    </ScrollView>
     

    );
  }
}

