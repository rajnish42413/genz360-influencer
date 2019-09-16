import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,Alert ,FlatList ,TouchableOpacity ,Image ,CheckBox ,Modal,AsyncStorage,ActivityIndicator} from "react-native";
import {WebView} from 'react-native-webview'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './createStyle';
import Sm from './sm';
import * as Font from 'expo-font';
import header from './headerStyle';


const Loader=()=>(
  <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
)




export default class ProfUpdate2 extends Component{
    
    constructor(props){
        super(props);
        this.state={
          whatsapp:'',
          fb:false,
          insta:false,
          yt:false,
          twitter:false,
          fbuser:'',
          instauser:'',
          ytuser:'',
          twitteruser:'',
          fbmodal:false,
         twitterid:'',
         ytid:'',
         fbauth:false,
         instamodal:false,
         interestselected:[],

         fbverified:false,
         instaverified:false,
         ytverified:false,
         twitterverified:false,
          fontLoaded:false,
          loading:false
        }
    }


    async _getStorageValue(){
        let value = await AsyncStorage.getItem("tokken");
        this.setState({tokken:value.toString()})
      }
      
      _storeData = async (key,val) => {
        try {
          await AsyncStorage.setItem(key, val);
        } catch (error) {
          // Error saving data
        }
      };

      checkinfplatform=async ()=>{
        try {
          let response = await fetch('http://www.genz360.com:81/check-inf-platform',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tokken:this.state.tokken,
            }),
          });
          
          let responseJson = await response.json();
      
          if (responseJson.valid){
            this.setState({fbverified:responseJson.fbverified,instaverified:responseJson.instaverified,twitterverified:responseJson.twitterverified,ytverified:responseJson.ytverified})
          }
        } catch (error) {
          alert(error)
        }
      }
      

      
      submitinfplatform=async ()=>{
        try {
          let response = await fetch('http://www.genz360.com:81/submitinf-platform',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fb: this.state.fb,
              insta: this.state.insta,
              yt: this.state.yt,
              twitter: this.state.twitter,
              tokken:this.state.tokken,
              interestselected:this.state.interestselected,
              ytid:this.state.ytid,
              twitterid:this.state.twitterid
            }),
          });
          
          let responseJson = await response.json();
      
          if (responseJson.valid){
            alert(responseJson.msg);
            this.setState({loading:false})
            this.props.navigation.navigate("Home");
          }
        } catch (error) {
          alert(error);
          this.setState({loading:false})
        }
      }
      
       async componentDidMount() {    
        this._getStorageValue();
        this._storeData("current_screen","SMH");
      await  Font.loadAsync({
          'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
          'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
          'SF': require('../assets/fonts/SF.ttf'),
        });
         this.setState({ fontLoadedd:true });
      }
      

    onSelectionChange =(selectedFruits)=>{
        this.setState({selectedFruits})
    }
    

    check =() =>{
        this.setState({
            checked1:!this.state.checked1,
        });
    }
    selectedSm = (selectedval) => {
        this.setState({ interestselected: selectedval })
    
      }
  
      fbalert = () => {
       
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
    render(){
      if (!this.state.loading){
        return(
            this.state.fontLoadedd ? (
            <ScrollView style={{backgroundColor:'#fff'}}>
          <View style={header.header_wrapper}>
          <View style={header.wrap}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Icon  style={styles.backbtn} name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
              <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
          </View>

          <ScrollView style={[styles.createSection,{backgroundColor:'#fff'}]}>
              <Text style={header.heading_normal} >Update Profile (Please Authenticate) </Text>


              <View style={styles.inputSection}>

             
              

             
               <View style={styles.bi_cont_wrap}>
                   
                   <Sm selectedSm={this.selectedSm} />
   
                   </View>



               
        {/************************************************************************************************ */}


        <View style={{marginTop:25}}>          
        <View style={{flexDirection:'row',alignItems:'center'}}>
{/* 
        { 
                     this.state.fbverified?
                     <Icon name="check-circle" size={22} color={"green"} style={{paddingLeft:7,paddingRight:5}}/>
                     :
                    <CheckBox 
                value={this.state.fb}
                onValueChange={(fb)=>this.setState({fb:!this.state.fb})}
                    />
        } */}
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="facebook" size={20} color="#4167b2"/>
            <Text style={[styles.name,{color:'#a9a9a9'}]}> Facebook</Text>
            <Text style={{fontSize:14,color:'#a9a9a9',marginTop:5}}>Coming Soon</Text>
        </TouchableOpacity>
        </View>
        {
            this.state.fb ? 
            Alert.alert(
              'Authenticate Facebook',
              'This will take you to FB login page. Are you sure you want to Continue?',
            [
             
              {
                text: 'Cancel',
                onPress: () => this.setState({fb:false}),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => this.setState({fbmodal:true,fb:false})},
            ],
            {cancelable: false},
              
            )
                    : null

        }


        

        <Modal  visible={this.state.fbmodal}
                onRequestClose={()=>{this.setState({fbmodal: false,fb:false});this.checkinfplatform()}}
            >
              <TouchableOpacity onPress={(fbModal,fb) => {this.setState({fbmodal: false,fb:true});this.checkinfplatform()}}>
                      <Icon name="window-close" size={24} color={"#000"} style={{paddingTop:10,paddingLeft:10}}/>
            </TouchableOpacity>

            <WebView source={{uri:'https://www.google.com'}}/>
        </Modal>


       
            <View style={{flex:1}}>
              
            </View> 
          


        </View>

        <View style={{marginTop:15}}>          
        <View style={{flexDirection:'row',alignItems:'center'}}>

        { 
                     this.state.instaverified?
                     <Icon name="check-circle" size={22} color={"green"} style={{paddingLeft:7,paddingRight:5}}/>
                     :
                    <CheckBox 
                value={this.state.insta}
                onValueChange={(insta)=>this.setState({insta:!this.state.insta})}
        /> }
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="instagram" size={20} color="#c72764"/>
            <Text style={styles.name}> Instagram</Text>
        </TouchableOpacity>
        </View>
        {
            this.state.insta ? 
            Alert.alert(
              'Authenticate Instagram',
              'This will take you to Instagram login page. Are you sure you want to Continue?',
            [
             
              {
                text: 'Cancel',
                onPress: () => this.setState({insta:false}),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => this.setState({instamodal:true,insta:false})},
            ],
            {cancelable: false},
              
            ):null

        }

<Modal  visible={this.state.instamodal}
                onRequestClose={()=>{this.setState({instamodal:false,insta:false});this.checkinfplatform()}}
            >
            <TouchableOpacity onPress={(instaModal,insta) => {this.setState({instamodal:false,insta:false});this.checkinfplatform()}}>
                      <Icon name="window-close" size={24} color={"#000"} style={{paddingTop:10,paddingLeft:10}} />
            </TouchableOpacity>

            <WebView source={{uri:'http://www.genz360.com:81/instagram-authentication/'+this.state.tokken}}/>
        </Modal>


        </View>


        <View style={{marginTop:15}}>          
        <View style={{flexDirection:'row',alignItems:'center'}}>
        {
                     
                     this.state.ytverified?
                     <Icon name="check-circle" size={22} color={"green"} style={{paddingLeft:7,paddingRight:5}}/>
                     :
                    <CheckBox 
                value={this.state.yt}
                onValueChange={(yt)=>this.setState({yt:!this.state.yt})}
                    />}
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="youtube" size={20} color="#fe0000"/>
            <Text style={styles.name}> You Tube</Text>
        </TouchableOpacity>
        </View>
        {
            this.state.yt ? 
                <View>
                    <View style={styles.subwrap}>
                   
                    <TextInput
                        style={styles.input}
                        placeholder="USER ID"
                        onChangeText={(ytid) => {this.setState({ytid:ytid})}}
                        value={this.state.ytid}
                        underlineColorAndroid="transparent"
                        />
                    </View> 
                    </View>:null

        }

        </View>



        <View style={{marginTop:15}}>          
        <View style={{flexDirection:'row',alignItems:'center'}}>
        { 
                     this.state.twitterverified?
                     <Icon name="check-circle" size={22} color={"green"} style={{paddingLeft:7,paddingRight:5}}/>
                     :
                    <CheckBox 
                value={this.state.twitter}
                onValueChange={(twitter)=>this.setState({twitter:!this.state.twitter})}
                    />
        }
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="twitter" size={20} color="#1da1f3"/>
            <Text style={styles.name}> Twitter</Text>
        </TouchableOpacity>
        </View>
        {
            this.state.twitter ? 
                <View>
                    <View style={styles.subwrap}>

                    <TextInput
                        style={styles.input}
                        placeholder="USER ID"
                        onChangeText={(twitterid) => {this.setState({twitterid:twitterid})}}
                        value={this.state.twitterid}
                        underlineColorAndroid="transparent"
                        />
                    </View> 
                    </View>:null

        }

        </View>


        {/************************************************************************************************ */}








           <View style={styles.btn_wrap}>
              <TouchableOpacity style={styles.nextbtn} onPress={()=>{this.submitinfplatform();this.setState({loading:true})}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={styles.nextbtn_txt}>Next </Text>
                   <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
                  </View>
             </TouchableOpacity>
{/* 
          <TouchableOpacity style={styles.cancelbtn}>
             <Text style={styles.cancelbtn_txt}>Cancel</Text>
          </TouchableOpacity> */}

          </View>

          </View>

          </ScrollView>
     
   </View>
   </ScrollView>

   ):null
        );}
        else{
          return <Loader />
        }
    }
}


