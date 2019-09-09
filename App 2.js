import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Login from './pages/login';
import Sign from './pages/sign';
import Dashboard from './pages/dashboard';
import { createSwitchNavigator,createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import Verify from './pages/otpverify';
import Profile from './pages/newprofile';
import ProfUpdate2 from './pages/profupdate2';
import TNC from './pages/tnc';
import Wallet from "./pages/wallet"
import Notifications from './pages/notifications';
import Landingpage from "./pages/landingpage"
import Campaign from './pages/camp'
import Browse from './pages/browsecamp'
import INFLUENCERDETAILS from './pages/sign';
import InfCard from './pages/infcard';
import DailyTask from './pages/dailytask';
import LiveCampList from './pages/livecamplist'
import header from './pages/headerStyle';
import TaskList from './pages/dailytasklistall'
import Activity from './pages/activity';
import FAQ from './pages/faq';
import Support from './pages/support';
import AddPlatform from './pages/addplatform';
import Transfer from './pages/transfer';
import About from './pages/about';

const MainDashBoard = createStackNavigator(
  {
    Home: Dashboard,
    CampaignDetails:Campaign,
    CampaignList:LiveCampList,
    DailyTask:DailyTask,
    TaskList:TaskList,
    Transfer:Transfer,
    
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
MainDashBoard.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Image source={require('./images/home.png')} style={header.tabIcon}/>
  ),
}


const MainProfile = createStackNavigator(
  {
    Profile:Profile,    
    InfCard:InfCard,
    Activity:Activity,
    FAQ:FAQ,
    Support:Support,
    About:About,
    AddPlatform:AddPlatform,
    Transfer:Transfer,
    Wallet:Wallet,
    TNC:TNC,
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
MainProfile.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Image source={require('./images/user.png')} style={header.tabIcon} />
  ),
}



const MainTabs = createBottomTabNavigator(
  {
    Dashboard: MainDashBoard,
    Browse:Browse,
    Wallet:Wallet,
    Notifications:Notifications,
    Profile:MainProfile
  },
  {
    swipeEnabled:true,
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor:'#000',
      showLabel: true,
      style:{
        height:65,
        paddingTop:7,
        borderTopWidth:1,
        borderTopColor:'#dadada',
        backgroundColor:'#f96d15'
      },
      labelStyle:{
        paddingBottom:7,
        fontFamily:'SF'
      }
      
    },
  }
)

const AppNavigator=(val)=> createSwitchNavigator({
  Login: Login,
  Landingpage:Landingpage,
  SignUp:Sign,
  SMH:ProfUpdate2,
  OTPVERIFY:Verify,
  TNC:TNC,
  INFDETAILS:INFLUENCERDETAILS,
  Home:MainTabs,
  
  
},{
  initialRouteName:"Landingpage"
})

export default class App extends Component{

  _storeData = async (key,val) => {
    try {
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      // Error saving data
    }
  };

  

  render(){
    const MainNavigator=AppNavigator(this.state);
    return <MainNavigator />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})