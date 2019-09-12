import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, FlatList,RefreshControl, TouchableOpacity, Image, CheckBox,AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './dashstyle';
import header from './headerStyle';

const Campaign = (props) => (

  <TouchableOpacity style={styles.camp_box_wrap} onPress={()=>props.navigation.navigate("CampaignDetails",{camp_id:props.item.campaign_id})} >
    <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item.image}} style={styles.camp_img} />
    <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }}>
      <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 16, color: '#000', fontFamily: 'Gilroy-ExtraBold' }}>{props.item.name}</Text>
      <Text style={{ fontFamily: 'SF', color: '#000', fontSize: 16 }}></Text>
    </View>
  </TouchableOpacity>

);

export default class LiveCampList extends Component {
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
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      alert(error);
    }
  };
  

get_campaigns=async ()=>{
  try {

let response = await fetch('http://www.genz360.com:81/inf-live-campaign',{
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
  this.setState({loaded:true,campaign:responseJson.livecampaign})
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
        />} 
        style={{backgroundColor:'#fff'}}>
            <View style={header.header_wrapper}>
            <View style={header.wrap}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon  style={header.backbtn} name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
            </View>
            </View>
            <ScrollView style={header.createSection_ws}>
      
                  <View style={[{paddingLeft:20,paddingTop:5}]}> 
                      <Text style={header.heading_g}>Live Campaigns</Text>
                  </View>

            <View style={{ flex: 1, paddingBottom: 20 }}>
              <FlatList
                data={this.state.campaign}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Campaign item={item} navigation={this.props.navigation} />}
              />
            </View>

          </ScrollView>

        
      </ScrollView>
    );
  }
}


