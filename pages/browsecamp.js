import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet,RefreshControl, FlatList, TouchableOpacity, Image, CheckBox,AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './dashstyle';
import header from './headerStyle';

const Campaign = (props) => (

  <TouchableOpacity style={styles.camp_box_wrap} onPress={()=>props.navigation.navigate("CampaignDetails",{camp_id:props.item.campaign_id})} >
    <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item.image}} style={styles.camp_img} />
    <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 16, color: '#000', fontFamily: 'Gilroy-ExtraBold',flex:0.7 }}>{props.item.name}</Text>
        <Text style={{fontFamily:'SF',fontSize:15,color:'#216583',flex:0.3}}>Know More</Text>
      </View>
      <Text style={{ fontFamily: 'SF', color: '#000', fontSize: 16 }}></Text>
    </View>
  </TouchableOpacity>

);

export default class Browse extends Component {
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
      // Error saving data
    }
  };
  

get_campaigns=async ()=>{
  try {

let response = await fetch('http://www.genz360.com:81/inflivecampaign',{
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
  this.setState({loaded:true,campaign:responseJson.campaigns})
}
else{
  alert(responseJson.err);
}
} catch (error) {
alert(error)
}
}
componentDidMount(){
  this._getStorageValue();
  
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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dashboard')}>
                <Icon  style={header.backbtn} name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={header.tagline}>Viralizing{'\n'}Your Brand</Text>
            </View>
            </View>
            <ScrollView style={header.createSection_ws}>
      
                  <View style={[{paddingLeft:20,paddingTop:5}]}> 
                      <Text style={header.heading_g}>Browse Campaigns</Text>
                  </View>
            <View style={{ flex: 1, paddingBottom: 20 }}>
              <FlatList
                data={this.state.campaign}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Campaign item={item} navigation={this.props.navigation} />}
              />


           
</View>
                    <View style={{paddingTop:30}}></View>
                </ScrollView>
                
     
     
     </ScrollView>
    );
  }
}

