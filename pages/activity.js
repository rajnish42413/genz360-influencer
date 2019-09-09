import React , {Component} from "react";
import {ScrollView, View, Text, TextInput ,StyleSheet,AsyncStorage,RefreshControl ,FlatList ,TouchableOpacity ,Image ,Switch,ImageBackground} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
 
import styles from './activityStyle';
import header from './headerStyle';




const SummaryList = (props) => (
    <TouchableOpacity style={styles.sum_list}>
      <Text style={styles.sum_list_name} numberOfLines={1} ellipsizeMode="tail">{props.item.camp}</Text>
      <Text style={styles.sum_list_date}></Text>
      <Text style={styles.sum_list_earn}>{props.item.earning}</Text>
    </TouchableOpacity>

  );




export default class Activity extends Component {

  constructor (props) {
    super(props);
    this.state = {
        summary:[],
        total_earning:0,
        count:0
      
       
    };
}

_onRefresh = () => {
  this.setState({refreshing: true});
  this.get_campaigns();
  this.setState({refreshing: false});
}


  async _getStorageValue() {
    let value = await AsyncStorage.getItem("tokken");
    this.setState({ tokken: value.toString() })
    this.get_campaigns();
  }
  _storeData = async (key, val) => {
    try {
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      // Error saving data
    }
  };


  get_campaigns = async () => {
    try {

      let response = await fetch('http://www.genz360.com:81/inf-activity', {
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
        this.setState({ loaded: true, summary: responseJson.report,total_earning:responseJson.total_earning,count:responseJson.count })
      }
      else {
        alert(responseJson.err);
      }
    } catch (error) {
      //alert("Some thing went wrong!!!");
      alert(error);
    }
  }
  componentDidMount() {
    this._getStorageValue();

  }




  render() {
  
      return (
        <ScrollView style={[styles.container,{backgroundColor:'#fff'}]}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />}
        >
           <ScrollView>
        <View style={header.header_wrapper}>
        <View style={header.wrap}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
            <Icon  style={styles.backbtn} name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            
            <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
        </View>

        <ScrollView style={[header.createSection,{paddingBottom:0}]}>
           

           <Text style={[header.sup_heading,{marginLeft:'5%',marginTop:0}]}>Activity</Text>

           

           <View style={styles.box_wrap}>

             <LinearGradient colors={['#ff512f','#dd2476']} style={styles.camp_box}>
                <Text style={styles.val_txt}>{this.state.count}</Text>
                <Text style={styles.h_txt}>TOTAL CAMPAIGNS</Text>
             </LinearGradient>

             <LinearGradient colors={['#8E2DE2','#4A00E0']} style={styles.earn_box}>
                <Text style={styles.val_txt}>{this.state.total_earning}</Text>
                <Text style={styles.h_txt}>TOTAL EARNING</Text>
            </LinearGradient>
           </View>

           <View>
             <Text style={[header.heading_g,{fontFamily:'SF',marginLeft:20,marginTop:10,}]}>Campaign Summary</Text>
           </View>

          <View style={styles.h_list}>
            <Text style={styles.h_list_name}>Campaign Details</Text>
            {/* <Text style={styles.h_list_date}>Date</Text> */}
            <Text style={styles.h_list_earn}>Payout</Text>
          </View>

         
         <View style={{marginTop:10}}>
           <FlatList 
            keyExtractor={(item, index) => index.toString()}
            data={this.state.summary}
            renderItem={({item})=><SummaryList item={item} />}
           />
           </View>

           </ScrollView>

</View>
</ScrollView>
        
        </ScrollView>
        
      );
    }
  }









