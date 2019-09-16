import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, FlatList,RefreshControl, TouchableOpacity, Image, CheckBox,AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './dashstyle';
import header from './headerStyle';
import * as Font from 'expo-font';
const Campaign = (props) => (

  <TouchableOpacity style={styles.camp_box_wrap} onPress={()=>props.navigation.navigate("DailyTask",{post_id:props.item.pd_id})} >
    <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item.file_name}} style={styles.camp_img} />
    <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }}>
      <Text style={{ fontSize: 16, color: '#000', fontFamily: 'Gilroy-ExtraBold' }}>{props.item.date_posted}</Text>
      <Text style={{ fontFamily: 'SF', color: '#000', fontSize: 16 }}></Text>
    </View>
  </TouchableOpacity>

);

export default class TaskList extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Image source={require('../images/compass.png')} style={header.tabIcon} />
    ),
  }
  constructor(props) {
    super(props);
    this.state = {
      campaign: []
    }
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.get_campaigns();
    this.setState({refreshing: false});
  }
  _renderItem = (data, i) => (
    <View style={[{ backgroundColor: data }, styles.item]} key={i} />
  );
  


  async _getStorageValue(){
    let value = await AsyncStorage.getItem("tokken");
    this.setState({tokken:value.toString()})
    this.get_campaigns();
  }

  _storeData = async (key,val) => {
    try {
      await AsyncStorage.setItem(key, val.toString());
    } catch (error) {
      alert(error);
    }
  };
  

get_campaigns=async ()=>{
  try {

let response = await fetch('http://www.genz360.com:81/inf-daily-task',{
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    tokken: this.state.tokken
  }),
});

let responseJson = await response.json();

if (responseJson.valid){
  this.setState({loaded:true,campaign:responseJson.dailytask})
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

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {


    return (
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />}>
        <View style={header.header_wrapper}>
          <View style={header.wrap}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Icon style={styles.backbtn} name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
          </View>

          <ScrollView style={header.createSection_browse}>
            <Text style={[header.heading_normal, { marginLeft: 15 }]} >All Tasks</Text>
            <View style={{ flex: 1, paddingBottom: 20 }}>
              <FlatList
                data={this.state.campaign}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Campaign item={item} navigation={this.props.navigation} />}
              />
            </View>

          </ScrollView>

        </View>
      </ScrollView>
    );
  }
}

