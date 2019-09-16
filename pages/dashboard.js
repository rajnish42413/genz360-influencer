import React , {Component} from "react";
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image ,Dimensions,AsyncStorage} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as Font from 'expo-font';
 
import styles from './dashstyle';
import header from './headerStyle';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


const PUSH_ENDPOINT = 'http://www.genz360.com:81/register/push-token';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const DailyTask = (props) =>(
  
  <TouchableOpacity style={styles.daily_box_wrap} onPress={()=>props.navigation.navigate("DailyTask",{post_id:props.item.pd_id})} >
      {
        props.item.file_name===null?
        <Text numberOfLines={3} ellipsizeMode={'tail'} style={{fontSize:15,color:'#000',fontFamily:'SF'}}>{props.item.post_data}</Text>:
      <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item.file_name}} style={styles.img} />
      }
      <View style={{paddingTop:5,paddingBottom:5,paddingLeft:0}}>
        <Text style={{fontSize:16, color:'#000',fontFamily:'SF'}}>{props.item.date_posted}</Text>
      </View>
  </TouchableOpacity> 
); 



const MyCampaign = (props) =>(
   
  <TouchableOpacity style={styles.lc_box_wrap} onPress={()=>props.navigation.navigate("CampaignDetails",{camp_id:props.item.campaign_id})}>
      <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item.image}} style={styles.img} />
      <View style={{paddingTop:5,paddingBottom:5,paddingLeft:0}}>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:16, color:'#000',fontFamily:'SF'}}>{props.item.name}</Text>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontFamily:'SF',color:'#000',fontSize:16}}>Status : {props.item.status===1?'Active':'Inactive'}</Text>
      </View>
  </TouchableOpacity> 
); 




const AppliedBox = (props) => (

  <TouchableOpacity style={styles.applied_box_wrap}  onPress={()=>props.navigation.navigate("CampaignDetails",{camp_id:props.item.campaign_id})}>
  <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item.image}} style={styles.img} />
  <View style={{paddingTop:5,paddingBottom:5,paddingLeft:10}}>
    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:16, color:'#000',fontFamily:'SF'}}>{props.item.name}</Text>
    <Text style={{fontFamily:'SF',color:'#000',fontSize:16}}>status:{props.item.status}</Text>
  </View>
</TouchableOpacity> 

  );



 

export default class Dashboard extends Component {

  constructor (props) {
    super(props);
    this.state = {
      dailytask:[],
      livecampaign:[],
      appliedcampaign:[],
       banner:true,
       task:true,
       campavl:false,
       task:false,
       refreshing: false,

    };
}
_onRefresh = () => {
  this.setState({refreshing: true});
  this.get_daily_task();
  this.get_live_campaigns();
  this.get_applied_campaigns();
  this.setState({refreshing: false});
}
async _getStorageValue(){
  let value = await AsyncStorage.getItem("tokken");
  this.setState({tokken:value.toString()});
  this.registerForPushNotificationsAsync()
  this.get_daily_task();
  this.get_live_campaigns();
  this.get_applied_campaigns();
}
_storeData = async (key,val) => {
  try {
    await AsyncStorage.setItem(key, val.toString());
  } catch (error) {
    alert("Something went wrong")
  }
};



  get_daily_task = async () => {
    try {

      let response = await fetch('http://www.genz360.com:81/inf-daily-task', {
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

      if (responseJson.valid) {

        this.setState({task:true,dailytask:responseJson.dailytask})
        
      }
    } catch (error) {
      alert(error);
    }
  }

  get_live_campaigns = async () => {
    try {

      let response = await fetch('http://www.genz360.com:81/inf-live-campaign', {
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

      if (responseJson.valid) {

        this.setState({campavl:true,livecampaign:responseJson.livecampaign})
      }
    } catch (error) {
      alert(error);
    }
  }

  get_applied_campaigns = async () => {
    try {

      let response = await fetch('http://www.genz360.com:81/inf-applied-campaign', {
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

      if (responseJson.valid) {
        this.setState({appliedcampaign:responseJson.appliedcampaign})
      }
    } catch (error) {
      alert(error);
    }
  }



componentDidMount(){
  this._storeData("current_screen","Home");
  this._getStorageValue();
  Font.loadAsync({
    'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
    'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
    'SF': require('../assets/fonts/SF.ttf'),
  });
  
}


 registerForPushNotificationsAsync=async()=> {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  // return fetch(PUSH_ENDPOINT, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     tokken:this.state.tokken,
  //     push_tokken:token,
  //   }),
  // });
  

  try {

    let response = await fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken: this.state.tokken,
        push_tokken:token,
      }),
    });

    let responseJson = await response.json();

    if (responseJson.valid) {
      return
    }
  } catch (error) {
    alert(error);
  }
  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('GenZ360', {
      name: 'GenZ360',
      sound: true,
    });
  }
}





  render() {
  
      return (
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
           
          />}
          style={{backgroundColor:'#fff'}}
        >
        <View style={header.header_wrapper}>
        <View style={header.wrap}>
        <Text style={[styles.home,{color:'#fff'}]}>Dashboard</Text>
            
            <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
        </View>

        <ScrollView style={[header.createSection_ws,]}>
        

            {/* <View style={styles.home_wap}> 
                <Text style={styles.home}>Home</Text>
            </View>
           */}
        
            {
              this.state.banner?<View style={{marginTop:15}} >
                <Image source={require('./banner.png')} style={header.banner_img}/>
              </View>:null
            }
       

          <View style={[header.heading_wrap_ws,{paddingTop:15}]}>
              <Text style={header.heading_g}>Daily Tasks</Text>
              <TouchableOpacity>
                {/* <Text style={styles.vm_txt}>View More</Text> */}
              </TouchableOpacity>
          </View>

          <View style={styles.flat_wrap}>

          {
            this.state.dailytask.length!==0?
            <FlatList 
            showsHorizontalScrollIndicator={false}
              keyExtractor={(item,index)=>index.toString()}
              horizontal={true}
              data={this.state.dailytask}
              renderItem={({item})=><DailyTask item={item}  navigation={this.props.navigation} /> }
            /> :  <View style={{flexDirection:'row',justifyContent:'center',marginLeft:'3%',marginTop:'4%',paddingBottom:2,marginRight:'3%'}}>
                <Text style={{fontSize:16,fontFamily:'SF',}}>No Task Available</Text>
               {/* <TouchableOpacity >
                  <Text style={styles.campbtn_txt}>  Create Now</Text>
               </TouchableOpacity> */}
            </View>
          }

        </View>


        <View style={header.heading_wrap_ws}>
              <Text style={header.heading_g}>Live Campaigns</Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CampaignList")}>
                <Text style={styles.vm_txt}>View More</Text>
              </TouchableOpacity>
          </View>

          
            <View style={styles.flat_wrap}>

            {
              this.state.livecampaign.length!==0?
              <FlatList 
              keyExtractor={(item,index)=>index.toString()}
              showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.livecampaign}
                renderItem={({item})=><MyCampaign item={item}  navigation={this.props.navigation} /> }
              /> :  <View style={{flexDirection:'row',justifyContent:'center',marginLeft:'3%',marginTop:'4%',
                    paddingBottom:2,marginRight:'3%'}}>
                  <Text style={{fontSize:16,fontFamily:'SF',}}>No Campaigns Yet </Text>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Browse")}>
                    <Text style={styles.campbtn_txt}>Browse</Text>
                  </TouchableOpacity>
              </View>
            }

            </View>


            
        <View style={header.heading_wrap_ws}>
              <Text style={header.heading_g}>Applied in</Text>
              <TouchableOpacity>
                {/* <Text style={styles.vm_txt}>View More</Text> */}
              </TouchableOpacity>
          </View>
          <View style={styles.flat_wrap}>

          {  
          this.state.appliedcampaign.length!==0 ? <FlatList 
            keyExtractor={(item,index)=>index.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.appliedcampaign}
            renderItem={({item})=><AppliedBox item={item}  navigation={this.props.navigation} /> }

            /> : <View style={{flexDirection:'row',justifyContent:'center',marginLeft:'3%',marginTop:'4%',
            paddingBottom:2,marginRight:'3%'}}>
          <Text style={{fontSize:16,fontFamily:'SF',}}>No Campaigns Yet </Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Browse")}>
            <Text style={styles.campbtn_txt}>Apply Now</Text>
          </TouchableOpacity>
      </View>}
          </View>

          <View style={{paddingBottom:40}}></View>

          </ScrollView>
     
     </View>
     </ScrollView>
      );
    }
  }








