import React , {Component} from "react";
import {ScrollView, Button,Linking, View, Text, TextInput ,RefreshControl,CheckBox ,TouchableOpacity ,Image,ImageBackground,ActivityIndicator,AsyncStorage} from "react-native";

import * as Font from 'expo-font';
import styles from './campStyle';
import header from './headerStyle';


import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
// import * as Sharing from 'expo-sharing';
// import * as FileSystem from 'expo-file-system';
// import { url } from "inspector";
// import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Select Logo',
    takePhotoButtonTitle:'Take Photo',
    chooseFromLibraryButtonTitle:'Choose from library',
    quality:1
  };


const Loader=()=>(
  <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
)
const Gallery = (props) => (
  <TouchableOpacity style={styles.os_img_wrap}>
    <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item}} style={styles.img}/>
  </TouchableOpacity>
  );

  const b64 =
  'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';




export default class Campaign extends Component {

  constructor (props) {
    super(props);
    this.state = {
      notif:['a','b','c'],
      gallery:['a','b','c'],
      tokken:"",
      loaded:false,
      applied:'#f96d15',
      applied_text:"Apply for This Campaign",
      status:false,
      text:false,
      textval:'',
      vid:false,
      vidval:'',
      imageData:'',
      img:false,
      loading:false
    };
}
_onRefresh = () => {
  this.setState({refreshing: true});
  this._campaigns();
  this._applied_status();
  this.setState({refreshing: false});
}

async _getStorageValue(){
  let value = await AsyncStorage.getItem("tokken");
  this.setState({tokken:value.toString()});
  this._campaigns();
  this._applied_status();
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

_campaigns=async ()=>{
  try {
    
    let response = await fetch('http://www.genz360.com:81/get-campaign-details',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken:this.state.tokken,
        campaign_id:this.props.navigation.state.params.camp_id
      }),
    });
    
    
    let responseJson = await response.json();
    
    if (responseJson.valid){
      this.setState({loaded:true,campaign:responseJson.campaign})
    }
    else{
      alert(responseJson.err);
    }
  } catch (error) {
    alert(error);
  }
}

// onShare= async()=> {

//   try {
//     let img = 'http://www.genz360.com:81/get-image1/'+this.state.campaign.image;
//     // let response = await fetch(img,{
//     //   method: 'POST',
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     tokken:this.state.tokken,
//     //   }),
//     // });
    
    
//     // let responseJson = await response.json();
//     // if (responseJson.valid){
//     //   FileSystem.makeDirectoryAsync("file://genzdownloads")
//     //   FileSystem.writeAsStringAsync('file://genzdownloads/genzshareimg',responseJson.inbase ,{encoding:FileSystem.EncodingType.Base64})
//     //   Sharing.shareAsync('file://genzdownloads/genzshareimg')
//     // }
//     // else{
//     //   alert(responseJson.err);
//     // }

//     FileSystem.downloadAsync(
//       'http://www.genz360.com:81/get-image/'+this.state.campaign.image,
//       FileSystem.documentDirectory + 'share.jpg'
//     )
//       .then(({ uri }) => {
//         Sharing.shareAsync(uri)
//       })
//       .catch(error => {
//         alert(error)
//       });
   
//   } catch (error) {
//     alert(error.message);
//   }
// }

_apply_for_campaign = async()=>{
  try {
    this.setState({loading:true})
    let response = await fetch('http://www.genz360.com:81/apply-for-campaign',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken:this.state.tokken,
        campaign_id:this.props.navigation.state.params.camp_id
      }),
    });
    
    
    let responseJson = await response.json();
    
    if (responseJson.valid){
      this.setState({loading:false})
      this.setState({applied:'green',applied_text:"Applied",status:true})
    }
    else{
      alert(responseJson.err);
      this.setState({loading:false})
    }
  } catch (error) {
    alert(error)
    this.setState({loading:false})
  }
}

_submit_creative = async()=>{
  try {
    
    let response = await fetch('http://www.genz360.com:81/submit-creative',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken:this.state.tokken,
        campaign_id:this.props.navigation.state.params.camp_id,
        text:this.state.text,
        textval:this.state.textval,
        imageData:this.state.imageData,
        img:this.state.img,
        vid:this.state.vid,
        vidval:this.state.vidval
      }),
    });
    
    
    let responseJson = await response.json();
    
    if (responseJson.valid){
      this.setState({loading:false})
      this.setState({applied:'green',applied_text:"Applied",status:true})
    }
    else{
      alert(responseJson.err);
      this.setState({loading:false})
    }
  } catch (error) {
    alert(error)
    this.setState({loading:false})
  }
}

async showpicker(){
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    base64 :true
  });
  // alert(JSON.stringify(result.base64))
  if (!result.cancelled) {
    const source={uri:result.uri}
    this.setState({imageSource:source,imageData:result.base64})
  }

}

_applied_status = async()=>{
  try {
    
    let response = await fetch('http://www.genz360.com:81/check-applied',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken:this.state.tokken,
        campaign_id:this.props.navigation.state.params.camp_id
      }),
    });
    
    
    let responseJson = await response.json();
    
    if (responseJson.valid){
      this.setState({applied:responseJson.color,applied_text:responseJson.status,status:responseJson.stateval})
    }
    else{
      alert("Somthing went wrong");
    }
  } catch (error) {
    alert(error)
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




  render() {
    if (this.state.loaded){
      return (

          <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />}
            style={{backgroundColor:'#fff'}}
          >
            <View style={styles.camp_img_wrap}>
            
                <ImageBackground source={{uri:'http://www.genz360.com:81/get-image/'+this.state.campaign.image}} style={styles.camp_img}>
                  <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                  <Icon name="arrow-left" size={24} color="#000" style={{marginTop:20,marginLeft:20}}/>
                  </TouchableOpacity>
                </ImageBackground>
            </View>
        <ScrollView style={styles.container}>

                <View style={styles.name_wrap}>
                    <Text style={header.heading_normal}>{this.state.campaign.name}</Text>      
                </View>

                <View style={styles.desc_wrap}>
                    <Text style={styles.desc_txt} selectable={true}>{this.state.campaign.desc}</Text> 
                </View>
            {this.state.campaign.linktoshare!==null?
        <TouchableOpacity style={{backgroundColor:this.state.applied,marginTop:20,marginLeft:20,marginRight:20,borderRadius:8,alignItems:'center',paddingTop:10,paddingBottom:10}} 
          onPress={()=>Linking.openURL(this.state.campaign.linktoshare)}>
          <Text style={{color:'#fff',fontSize:18,fontFamily:'SF'}}>Open Link</Text>
        </TouchableOpacity>:null
            }
                <View style={styles.os_wrap}>
                <Text style={header.heading_normal}>Platform : {this.state.campaign.platform===0?'FaceBook':this.state.campaign.platform===1?'Instagram':this.state.campaign.platform===2?'YouTube':'Twitter'}</Text>
              </View>

               <View style={styles.os_wrap}>
                <Text style={header.heading_normal}>Status : {this.state.campaign.status===1?'Active':'Inactive'}</Text>
              </View>

               {/* <View style={styles.flat_wrap}>
            <FlatList 
             keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            data={this.state.gallery}
            renderItem={({item})=><Gallery item={item} /> }
                 />
              </View> */}


              {
                this.state.status && (this.state.campaign.subtype==='4' || this.state.campaign.subtype==='6')?
               <View style={{flexDirection:'column',marginLeft:'2%'}}>
                    {this.state.campaign.subtype==='4'? <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                      <CheckBox 
                            value={this.state.text}
                            onValueChange={(text)=>this.setState({text:!this.state.text})}/> 
                            <Text style={header.name}>Text</Text>          
                    </View>:null}
                    {
                      this.state.text && this.state.campaign.subtype==='4' ?
                      <View style={[styles.inputSection_icon,{marginLeft:'5%',marginRight:'5%'}]}>
                      <TextInput
                           style={styles.input_icon}
                           placeholder="Enter Text"
                           onChangeText={(textval) => {this.setState({textval})}}
                           value={this.state.textval}
                           underlineColorAndroid="transparent"
                          />
                   </View> :null
                    }

                    {this.state.campaign.subtype==='6'?<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                      <CheckBox 
                            value={this.state.vid}
                            onValueChange={(vid)=>this.setState({vid:!this.state.vid})}/>   
                            <Text style={header.name}>Video Link </Text>        
                    </View>:null}
                    {
                      this.state.vid?
                      <View style={[styles.inputSection_icon,{marginLeft:'5%',marginRight:'5%'}]}>
                      <TextInput
                           style={styles.input_icon}
                           placeholder="Enter Video Link"
                           onChangeText={(vidval) => {this.setState({vidval})}}
                           value={this.state.vidval}
                           underlineColorAndroid="transparent"
                          />
                   </View> :null
                    }   

                   { this.state.campaign.subtype==='4'? <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                      <CheckBox 
                            value={this.state.img}
                            onValueChange={(img)=>this.setState({img:!this.state.img})}/>     
                            <Text style={header.name}>Image</Text>      
                    </View>:null}
                    
                    {
                      this.state.img && this.state.campaign.subtype==='4'?
                      <View style={[styles.inputSection_icon,{marginLeft:'5%',marginRight:'5%'}]}>
                          <TouchableOpacity style={[styles.prof_img_wrap,{paddingTop:10,paddingBottom:10}]} onPress={()=>this.showpicker()}>
                              <Text style={header.name}>UPLOAD IMAGE</Text>
                          </TouchableOpacity>
                            <Image source={{uri:'http://www.genz360.com:81/get-image/'+this.state.photo+ '?rnd=' + Math.random()}} style={styles.prof_img}/>
                   </View> :null
                    }
                    {
                      this.state.imageData!==null && this.state.img && this.state.campaign.subtype==='4'
                      ?
                      <Image source={this.state.imageSource} style={{height:auto,marginTop:10}} />:
                      null
                      }   


                </View> 
                
                 
                : null
              }
               
        </ScrollView>

        {(this.state.campaign.subtype==='4' ||this.state.campaign.subtype==='6') && this.state.status ?<TouchableOpacity style={{backgroundColor:'blue',marginTop:20,marginLeft:20,marginRight:20,borderRadius:8,alignItems:'center',paddingTop:10,paddingBottom:10}} onPress={()=>{this._submit_creative();this.setState({loading:true})}}>
          <Text style={{color:'#fff',fontSize:18,fontFamily:'SF'}}>Submit Creative</Text>
        </TouchableOpacity>:null
}

        <TouchableOpacity style={{backgroundColor:this.state.applied,marginTop:20,marginLeft:20,marginRight:20,borderRadius:8,alignItems:'center',paddingTop:10,paddingBottom:10}} onPress={()=>this.state.status?null:this._apply_for_campaign()}>
          <Text style={{color:'#fff',fontSize:18,fontFamily:'SF'}}>{this.state.applied_text}</Text>
        </TouchableOpacity>

        <View style={{paddingBottom:40}}></View>
        </ScrollView>
      );
    }
    else{
      return <Loader />
    }
    }
  }
