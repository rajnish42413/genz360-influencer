
import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput, TouchableOpacity, CheckBox, Button, Picker, AsyncStorage, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-datepicker';
import styles from './loginStyle';
import header from './headerStyle';
// import Location from './newlocation';
import * as Font from 'expo-font';
import Location from './location'
export default class INFLUENCERDETAILS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      contact: '',
      brand: '',
      pass: '',
      cnfpass: '',
      color: '',
      tnc: false,
      date: '',
      location: '',
      age: 0,
      msg:'',
      loactiondict: []
    }
  }

  

  getAge = (bdate) => {
    let d = new Date();
    let thisYear = d.getFullYear();
    let thisMonth = d.getMonth();
    let thisDay = d.getDate();


    let b = new Date(bdate);
    let birthYear = b.getFullYear();
    let birthMonth = b.getMonth();
    let birthDay = b.getDate();

    let ageNow = (thisYear - birthYear);

    if (thisMonth < (birthMonth - 1)) { ageNow-- }
    if ((thisMonth == birthMonth) && (thisDay < birthDay)) { ageNow-- }

    this.setState({ age: ageNow })

  }


  async _getStorageValue() {
    let value = await AsyncStorage.getItem("tokken");
    this.get_locations();
    this.setState({ tokken: value.toString() })
  }

  _storeData = async (key, val) => {
    try {
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      // Error saving data
    }
  };
  get_locations = async () => {
    try {
      let response = await fetch('http://www.genz360.com:81/get-matching-locations', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: this.state.location,
        }),
      });
  
      let responseJson = await response.json();
  
      if (responseJson.valid) {
        this.setState({ loactiondict: responseJson.result })
      }
    } catch (error) {
      alert(error);
    }
  }
  submitinfdetails = async () => {
    try {
      let response = await fetch('http://www.genz360.com:81/submitinfdetails', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          full_name: this.state.fname + " " + this.state.lname,
          age: this.state.age,
          dob: this.state.date,
          loc: this.state.location,
          gender: this.state.gender,
          tokken: this.state.tokken
        }),
      });

      let responseJson = await response.json();

      if (responseJson.valid) {
        this.props.navigation.navigate("SMH");
      }
      else {
        alert(responseJson.err);
      }
    } catch (error) {
      alert(error);
    }
  }
  
  componentDidMount() {
    this._getStorageValue();
    this._storeData("current_screen", "INFDETAILS");
    Font.loadAsync({
      'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'SF': require('../assets/fonts/SF.ttf'),
    });
  }
  setlocation(value){
    this.setState({location:value})
  }

  nameCheck = () => {
    let name=/[a-zA-Z]/;
    let email= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (name.test(this.state.fname) && name.test(this.state.lname) && email.test(this.state.email)){
      this.submitinfdetails();
    }
    else{
      this.setState({msg:'Enter Details'});
    }
  }

  render() {
    return (

      <ScrollView style={{backgroundColor:'#fff'}}  keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'>
      <View style={header.header_wrapper}>
      <View style={header.wrap}>
          <Icon  style={styles.backbtn} name="arrow-left" size={24} color="#fff" />
          
          <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
      </View>

      <ScrollView style={[header.createSection,{paddingBottom:0}]}>

          <View >

            <Text style={header.heading_normal}>PROFILE DETAILS</Text>
             <Text style={{textAlign:'left',marginTop:8,fontSize:15,fontFamily:'SF',color:'#eb7070'}}>{this.state.msg}</Text>
            {/* <View style={{ paddingTop: 15 }}></View> */}
            {/* <Text style={{textAlign:'left',marginTop:8,fontSize:15,fontFamily:'SF',color:'#eb7070'}}>{this.state.msg}</Text> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={[styles.inputSection_sign, { flex: 1, marginRight: 5 }]}>
               
                <TextInput
                  style={styles.input_sign}
                  placeholder="FIRST NAME"
                  onChangeText={(fname) => { this.setState({ fname: fname }) }}
                  value={this.state.fname}
                  underlineColorAndroid="transparent"
                  returnKeyType={'next'}
                  onSubmitEditing={() => this.lname.focus()}
                  blurOnSubmit={false}
                />
              </View>

              <View style={[styles.inputSection_sign, { flex: 1, marginLeft: 5 ,backgroundColor:'#fff '}]}>

                <TextInput
                  style={styles.input_sign}
                  placeholder="LAST NAME"
                  onChangeText={(lname) => { this.setState({ lname: lname }) }}
                  value={this.state.lname}
                  underlineColorAndroid="transparent"
                  returnKeyType={'next'}
                  ref={(b) => this.lname = b}
                  onSubmitEditing={() => this.email.focus()}

                />
              </View>

            </View>

            <View style={styles.inputSection_icon}>
              <Icon style={styles.icon} name="at" size={24} color="#dadada" />
              <TextInput
                style={styles.input_icon_sign}
                placeholder="EMAIL ADDRESS"
                onChangeText={(email) => { this.setState({ email: email }) }}
                value={this.state.email}
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
                ref={(b) => this.email = b}

                blurOnSubmit={false}
              />
            </View>

            <View style={{ marginTop: 2 }}></View>

            <View style={styles.inputSection_icon_date}>





              <DatePicker
                style={[styles.input_date,]}
                date={this.state.date}
                mode="date"
                showIcon={false}
                placeholder="DATE OF BIRTH"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                allowFontScaling={true}
                customStyles={{
                  dateInput: {
                    marginLeft: 0,
                    paddingTop: 28,
                    paddingBottom: 28,
                    borderTopLeftRadius: 8,
                    borderRightWidth: 0,
                    borderBottomLeftRadius: 8,

                    borderColor: '#dadada',
                  },
                  placeholderText: {
                    fontSize: 18,
                    position: "absolute",
                    left: 10,
                    color: '#A8A8A8',
                    fontFamily: 'SF',
                  },
                  dateText: {
                    fontSize: 18,
                    fontFamily: 'SF',

                  }

                }}
                onDateChange={(date) => { this.setState({ date: date }); this.getAge(this.state.date) }}
                ref={(b) => this.date = b}
                onSubmitEditing={() => this.state.foucs()}
              />


              <View style={{
                borderWidth: 1, paddingTop:5, paddingBottom:7,paddingLeft:16,paddingRight:16,
                 borderTopRightRadius: 8, borderBottomRightRadius: 8,
                marginTop: 2, backgroundColor: '#f0f3fa', borderColor: '#dadada'
              }}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Text style={{fontFamily:'SF'}}>AGE</Text>
                  <Text style={{ fontSize: 18,fontFamily:'Gilroy-ExtraBold' }}>{this.state.age}</Text>
                </View>
              </View>


            </View>
            <View style={{ marginTop: 15 }}></View>

            {/* <View style={[header.dropdown, { flexDirection: 'column', paddingLeft: 10, paddingTop: 5 }]}>
             
              <Picker
                selectedValue={this.state.location}

                style={{ width: '100%', color: '#a9a9a9', fontSize: 18 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ location: itemValue })
                }>
                <Picker.item label="LOCATION" value="" />
                {this.state.loactiondict.map((location, index) => <Picker label={location} value={location} key={index} />)}
              </Picker>
            </View>  */}


            <Location setlocation={this.setlocation.bind(this)} />



            <View style={[header.dropdown, { flexDirection: 'column', paddingLeft: 10, paddingTop: 5 }]}>
              <Picker
                selectedValue={this.state.gender}

                style={{ width: '100%', color: '#a9a9a9', fontSize: 18 }}


                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ gender: itemValue })

                }>
                <Picker.item label="GENDER" value="" />
                <Picker.item label="Male" value="male" />
                <Picker.item label="Female" value="female" />
                <Picker.item label="Others" value="others" />

              </Picker>
            </View>




            <TouchableOpacity style={styles.nextbtn} onPress={ this.nameCheck}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.nextbtn_txt}>NEXT</Text>
                <Icon name="arrow-right" size={16} color="#fff" style={{ paddingLeft: 10 }} />
              </View>
            </TouchableOpacity>






          </View>

          <View style={{ paddingBottom: 40 }}></View>





          </ScrollView>
     
     </View>
     </ScrollView>

    );
  }
}

