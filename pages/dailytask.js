import React , {Component} from "react";
import {ScrollView, View, Text, TextInput,ActivityIndicator ,StyleSheet ,FlatList ,TouchableOpacity ,Image,ImageBackground , Share,AsyncStorage} from "react-native";


import styles from './campStyle';
import header from './headerStyle';
import * as Font from 'expo-font';

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const Gallery = (props) => (
  <View> 
      <View  style={styles.os_img_wrap}>
        <Image source={{uri:'http://www.genz360.com:81/get-image/'+props.item}} style={styles.img}/>
      </View>
      <TouchableOpacity style={styles.share_btn} onPress={()=>this.onShare('http://www.genz360.com:81/get-image/'+props.item)}> 
          <Text style={{fontSize:18,color:'#fff',fontFamily:'SF',textAlign:'center'}}>Share</Text>
      </TouchableOpacity>
  </View>
  
  );

  const Rules =(props) => (
      <View style={{marginLeft:'5%',marginTop:10}}>
        <Text style={{fontSize:18,fontFamily:'SF',color:'#000'}}>Lorem Ipsum Dolor Sit Amet</Text>
      </View>
  );

  const Loader=()=>(
    <View>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )

export default class DailyTask extends Component {

  constructor (props) {
    super(props);
    this.state = {
      notif:['a','b','c'],
      gallery:['a','b','c'],
      rules:['a','b','c'],
      loaded:false,
      link:'',
    };
}

onShare = async (url,type) => {
  if(type===2){
    FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + 'share.jpg'
    )
      .then(({ uri }) => {
        Sharing.shareAsync(uri)
      })
      .catch(error => {
        alert(error)
      });
  }
  else if(type===1){
    Share.share({message:url})
  }
  
 }

async _getStorageValue(){
  let value = await AsyncStorage.getItem("tokken");
  this.setState({tokken:value.toString()});
  this._details();
}

_details=async ()=>{
  try {
    
    let response = await fetch('http://www.genz360.com:81/inf-daily-task-details',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken:this.state.tokken,
        pd_id:this.props.navigation.state.params.post_id
      }),
    });
    
    
    let responseJson = await response.json();
    
    if (responseJson.valid){
      this.setState({loaded:true,taskdetails:responseJson.taskdetails,camp_data:responseJson.campaign})
    }
    else{
      alert(responseJson.err);
    }
  } catch (error) {
    alert(error);
  }
}


_submitlink=async ()=>{
  try {
    let response = await fetch('http://www.genz360.com:81/update-task-link',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokken:this.state.tokken,
        pd_id:this.props.navigation.state.params.post_id, 
        link:this.state.link,
      }),
    });
    

    let responseJson = await response.json();
    if (responseJson.valid){
      alert(responseJson.msg)
    }
    else{
      alert(responseJson.err);
    }
  } catch (error) {
    console.error(error);
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
        
          <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={styles.camp_img_wrap}>
            
                <ImageBackground source={{uri:'http://www.genz360.com:81/get-image/'+this.state.camp_data.image}} style={styles.camp_img}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                  <Icon name="arrow-left" size={24} color="#000" style={{marginTop:20,marginLeft:20}}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        <ScrollView style={styles.container}>

                <View style={styles.name_wrap}>
                    <Text style={{fontSize:16,color:'#808080',fontFamily:'SF'}}>DAILY TASK</Text>         
                    <Text style={header.heading_normal}>{this.state.camp_data.name}</Text>         
                </View>

                <View style={styles.desc_wrap}>
                <Text style={{fontSize:18,color:'#808080',fontFamily:'Gilroy-ExtraBold',color:'#000'}}>Today's Task</Text>         
                    <Text style={styles.desc_txt}>
                    {this.state.taskdetails.desc}</Text>
                </View>


              <Text style={{fontSize:22,color:'#000',fontFamily:'Gilroy-ExtraBold',marginLeft:'5%',marginTop:20}}>Rules</Text>
                {/* <FlatList 
                keyExtractor={(item,index)=>index.toString()}
            data={this.state.taskdetails.rules}
            renderItem={({item})=><Rules /> }
                 /> */}

                <View style={{marginLeft:'5%',marginTop:10}}>
                        <Text style={{fontSize:18,fontFamily:'SF',color:'#000'}}>{this.state.taskdetails.rules}</Text>
                      </View>

                

               <View style={styles.os_wrap}>
                <Text style={header.heading_normal}>Share</Text>
              </View>

               <View style={styles.flat_wrap}>
            {/* <FlatList 
            keyExtractor={(item,index)=>index.toString()}
            horizontal={true}
            data={[this.state.taskdetails.file_name]}
            renderItem={({item})=><Gallery item={item} /> }
                 /> */}

            {  
                this.state.taskdetails.file_name===null?
                <View> 
                <View  style={{marginLeft:'2%',marginRight:'2%',paddingBottom:5}}>
                  <Text style={{textAlign:'justify',color:'#000',fontFamily:'SF',fontSize:17}}> 
                  {this.state.taskdetails.post_data}
                  </Text>
                </View>
                <TouchableOpacity style={styles.share_btn} onPress={()=>this.onShare(this.state.taskdetails.post_data,1)} > 
                    <Text style={{fontSize:18,color:'#fff',fontFamily:'SF',textAlign:'center'}}>Share</Text>
                </TouchableOpacity>
            </View>

                :

              <View> 
                      <View  style={styles.os_img_wrap}>
                        
                        <Image source={{uri:'http://www.genz360.com:81/get-image/'+this.state.taskdetails.file_name}} style={styles.img}/>
                      </View>
                      <TouchableOpacity style={styles.share_btn} onPress={()=>this.onShare('http://www.genz360.com:81/get-image/'+this.state.taskdetails.file_name,2)} > 
                          <Text style={{fontSize:18,color:'#fff',fontFamily:'SF',textAlign:'center'}}>Share</Text>
                      </TouchableOpacity>
                  </View>
                
                }
              </View>
               
        </ScrollView>
        <Text style={{fontSize:18,color:'#808080',fontFamily:'Gilroy-ExtraBold',marginLeft:20,color:'#000'}}>Task Update</Text>         

        <View style={styles.text_input_wrap}>
            <TextInput placeholder="Enter Link of the post"
             style={styles.text_input}
             onChangeText={(link)=>{this.setState({link:link})}}
             value={this.state.link}
             />
        </View>
        <TouchableOpacity style={{backgroundColor:'#f96d15',marginTop:20,marginLeft:20,marginRight:20,borderRadius:8,alignItems:'center',paddingTop:10,paddingBottom:10}} 
          onPress={()=>{this._submitlink()}}
        >
          <Text style={{color:'#fff',fontSize:18,fontFamily:'SF'}}>Submit Link</Text>
        </TouchableOpacity>

        <View style={{paddingTop:20}}></View>
        </ScrollView>
      );
    }
    else{
      return <Loader />
    }
    }
  }









