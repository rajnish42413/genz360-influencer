import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image ,CheckBox,AsyncStorage } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './createStyle';
import Sm from './sm';
import * as Font from 'expo-font';
import header from './headerStyle';



const MyCampaign = (props) =>(
   
    <View style={{flexDirection:'column',flex:1,borderWidth:1,borderColor:'#dadada',marginTop:15,
    paddingTop:10,paddingLeft:10,paddingRight:10,paddingBottom:10,marginRight:5,marginLeft:5,borderRadius:8}}>

        <Text style={{fontSize:18,marginTop:5,fontFamily:'Gilroy-ExtraBold'}}>{props.item.subject}</Text>
        <Text style={{fontSize:16,fontFamily:'SF'}} >{props.item.message}</Text>
    </View>
  ); 


export default class Notifications extends Component{
    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => (
          <Image source={require('../images/bell.png')} style={header.tabIcon} />
        ),
      }
    constructor(props){
        super(props);
        this.state={
          notif:[]
         
        };
    }
    _onRefresh = () => {
      this.setState({refreshing: true});
      this.getnotifications();
      this.setState({refreshing: false});
    }

    async _getStorageValue(){
        let value = await AsyncStorage.getItem("tokken");
        this.setState({tokken:value.toString()})
        this.getnotifications();
      }
      _storeData = async (key,val) => {
        try {
          await AsyncStorage.setItem(key, val);
        } catch (error) {
          // Error saving data
        }
      };
      
     
      getnotifications=async ()=>{
            try {
          
          let response = await fetch('http://www.genz360.com:81/infnotifications',{
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
            this.setState({loaded:true,loadedval:responseJson.inf,notif:responseJson.notif})
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
            <ScrollView style={{backgroundColor:'#fff'}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />}
            >
          <View style={header.header_wrapper}>
          <View style={header.wrap}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon  style={styles.backbtn} name="arrow-left" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
          </View>

          <ScrollView style={header.createSection}>
              <Text style={header.heading_normal} >Notifications </Text>

                
                <View style={[styles.flat_wrap,{flexDirection:'column'}]}>

                    {
                    this.state.notif.length===0?
                      <View style={{flexDirection:'column',alignItems:'center',marginTop:'35%'}}>
                          <Image source={require('./bell.png')} style={{height:140,width:140}} />
                          <Text style={{fontFamily:'SF',color:'#a9a9a9',fontSize:18,marginTop:10}}>No Notifications Yet</Text>
                      </View>
                    :  
                     <FlatList 
                        keyExtractor= {(item,index)=>index.toString()}
                        showsHorizontalScrollIndicator={false}
                       
                        data={this.state.notif}
                        renderItem={({item})=><MyCampaign item={item} /> }
                    />
                    }

                </View>
          </ScrollView>
     
   </View>
   </ScrollView>
        );
    }
}


