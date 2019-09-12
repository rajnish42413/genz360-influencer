import React , {Component} from "react";
import {ScrollView,Alert, View, Text, TextInput ,StyleSheet ,FlatList ,TouchableOpacity ,Image ,Switch,ImageBackground,AsyncStorage,ActivityIndicator} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
 import * as Font from 'expo-font';
import styles from './profStyle2';
import header from './headerStyle';


import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Select Logo',
    takePhotoButtonTitle:'Take Photo',
    chooseFromLibraryButtonTitle:'Choose from library',
    quality:1
  };


// const PrevCampaign = (props) => (

//   <TouchableOpacity style={styles.applied_box_wrap}>
//   <Image source={require('./camp3.png')} style={styles.img_prev} />
//   <View style={{paddingTop:5,paddingBottom:5,paddingLeft:10}}>
//     <Text style={{fontSize:16, color:'#000',fontFamily:'Gilroy-ExtraBold'}}>Lorem Ipsum Campaign</Text>
//     <Text style={{fontFamily:'SF',color:'#000',fontSize:16}}>18 Aug 2019</Text>
//   </View>
// </TouchableOpacity> 

//   );


  // const Card = (props) => (

  //   <View style={styles.card_box_wrap}>
  //   <ImageBackground source={require('./inf2.jpg')} style={styles.img_prev}>
  //   <View style={{paddingTop:5,paddingBottom:5,paddingLeft:0}}>
  //     <Text style={{fontSize:16, color:'#fff',fontFamily:'Gilroy-ExtraBold'}}>Hi ,I am Jane Doe</Text>
  //     <Text style={{fontFamily:'SF',color:'#fff',fontSize:16}}>18 Aug 2019</Text>
  //   </View>
  //   </ImageBackground>
  // </View>
  
  //   );
  
    const Loader=()=>(
      <View>
        <ActivityIndicator size="large" style={{display:'flex',flexDirection:'column',alignItems:'center'}} color="#00ff00" />
      </View>
    )
  


export default class  Proflie extends Component {
  constructor (props) {
    super(props);
    this.state = {
       os:['e'],
       card:['a'],
       prevcamp:true,
       tokken:"",
       loaded:false
    };
}


confirm = () =>{
  Alert.alert(
    'Log Out',
    'Are you sure you want to log out?',
  [
   
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => this.inf_logout()},
  ],
  {cancelable: false},
    
  )
}

async _getStorageValue(){
  let value = await AsyncStorage.getItem("tokken");
  this.setState({tokken:value.toString()})
  this.getprofile();
}
_storeData = async (key,val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error) {
    // Error saving data
  }
};

inf_logout=async ()=>{
  try {
let response = await fetch('http://www.genz360.com:81/inflogout',{
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
  this._storeData("tokken",null);
  this._storeData("current_screen","Login");
  this.props.navigation.navigate("Login");
}
else{
  alert(responseJson.err);
}
} catch (error) {
  alert(error);
}
}

getprofile=async ()=>{
      try {
    
    let response = await fetch('http://www.genz360.com:81/infprofile',{
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
      this.setState({loaded:true,loadedval:responseJson.inf,prevcamp:responseJson.found,photo:responseJson.inf.profile_photo})
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
  
}

showpicker(){
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      alert("You Canceled The Upload")
    } else if (response.error) {
      alert("Some thing went wrong.")
    }else {
      const source={uri:response.uri}
      this.setState({imageSource:source,imageData:response.data})
      this.uploadinfprofile();
    }
  });
}

uploadinfprofile=async()=>{
  try {
    
    let response = await fetch('http://www.genz360.com:81/infprofileimageupdate',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken: this.state.tokken,
        imageData:this.state.imageData
      }),
    });
    
    let responseJson = await response.json();

    if (responseJson.valid){
      this.setState({photo:''})

      alert("Image Uploaded")
      this.setState({photo:responseJson.uploaded})
    }
    else{
      alert(responseJson.err);
    }
  } catch (error) {
    alert(error);
  }
}


  render() {
    if (this.state.loaded){
      return (
        <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={header.header_wrapper}>
        <View style={header.wrap}>
        <Text style={[header.home,{color:'#fff'}]}>Profile</Text>
            
            <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
        </View>

        <ScrollView style={[header.createSection_no,]}>
            <View style={styles.prof_det_wrap}>
                <TouchableOpacity style={styles.prof_img_wrap} onPress={()=>this.showpicker()}>
                    <Image source={{uri:'http://www.genz360.com:81/get-image/'+this.state.photo+ '?rnd=' + Math.random()}} style={styles.prof_img}/>
                </TouchableOpacity>
                <View style={styles.prof_det}>
                    <Text style={styles.info}>{this.state.loadedval.name}</Text>
                    <Text style={styles.info}>{this.state.loadedval.contact}</Text>
                    <Text style={styles.info}>{this.state.loadedval.email}</Text>
                </View>
            </View>

            <View style={styles.list}>
              
                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}}  onPress={()=>this.props.navigation.navigate("InfCard",{name:this.state.loadedval.name,number:this.state.loadedval.contact,email:this.state.loadedval.email,profile_photo:this.state.loadedval.profile_photo})}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./card.png')}  style={{width:25,height:25}}/>
              <Text style={styles.list_item}>Influencer Card</Text>
              </View>
                </TouchableOpacity>

              
                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("Activity")}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./pulse.png')}  style={{width:30,height:30}}/>
                  <Text style={styles.list_item}>Activity</Text>
              </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("AddPlatform")}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./social.png')}  style={{width:30,height:30}}/>
                  <Text style={styles.list_item}>Add Platform</Text>
              </View>
                </TouchableOpacity>

            
                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("Wallet")}>
              <View style={styles.list_item_wrap}>
                  {/* <Icon name="wallet" size={20} color="#808080" style={{marginTop:2}}/> */}
                  <Image source={require('./t_wallet.png')}  style={{width:25,height:25}}/>
                  <Text style={styles.list_item}>Wallet</Text>
              </View>
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("FAQ")}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./ques.png')}  style={{width:25,height:25}}/>
                  <Text style={styles.list_item}>FAQs</Text>
              </View>
                </TouchableOpacity>
              
              
                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("Support")}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./support.png')}  style={{width:25,height:25}}/> 
              <Text style={styles.list_item}>Support</Text>
              </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("About")}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./info.png')}  style={{width:30,height:30}}/>          
              <Text style={styles.list_item}>About us</Text>
              </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee'}} onPress={()=>this.props.navigation.navigate("TNC")}>
              <View style={styles.list_item_wrap}>
              <Image source={require('./tnc.png')}  style={{width:30,height:30}}/>          
              <Text style={styles.list_item}>Terms &amp; Conditions</Text>
              </View>
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#eee',marginTop:20}} onPress={()=>this.confirm()}>
              <View style={[styles.list_item_wrap,]}>
              <Image source={require('./logout.png')}  style={{width:30,height:30}}/>       
              <Text style={styles.list_item}>Log Out</Text>
              </View>
                </TouchableOpacity>



            </View>



          </ScrollView>
     
     </View>
     </ScrollView>
      );
    }else{
      return <Loader />
    }
    }
  }








