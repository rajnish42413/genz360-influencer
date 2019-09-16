import React, {Component} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image , ImageBackground , TextInput ,TouchableOpacity,Share} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome5';
import header from './headerStyle';
import ViewShot from 'react-native-view-shot';
import * as Font from 'expo-font';

const shareOptions ={
    title:'Influencer Card',
    message:'This is my card',
    url:'content://com.android.providers.media.documents/document/image%3A52',
    subject:'CARD'

};

export default class InfCard extends Component {

  constructor(props){
    super(props);
    this.state={
        imguri:''
        
    }
  };

  componentDidMount(){
    Font.loadAsync({
        'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
        'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
        'SF': require('../assets/fonts/SF.ttf'),
      });
  }

 

  onShare = async (url) => {
    const result = await Share.share({
       message:url
     });  
   }
   


onCapture= (uri)=> {
    this.refs.viewShot.capture().then(uri => {
        
        this.setState({imgurl:uri},()=>{
            alert(this.state.imgurl)
        });
    });
  }
  onCapture2= (uri)=> {
    this.refs.viewShot.capture().then(uri => {
        this.onShare(uri) 
    });
  }


  render(){
    return(
        <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={header.header_wrapper}>
        <View style={header.wrap}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Icon  style={styles.backbtn} name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
        </View>

        <ScrollView style={[header.createSection,{backgroundColor:'#fff'}]}>

                <Text style={[header.heading_normal,{marginTop:20}]}>INFLUENCER CARD</Text>
        
               <Text>{'\n'}</Text>
          <View style={styles.camp_img_wrap}>
            

          <ViewShot ref="viewShot" options={{format:"jpg", quality:0.9}}>
            <ImageBackground source={require('./infcard.png')} style={styles.camp_img}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:30,paddingTop:5}}>        
                            <Text ></Text>
                            <Text style={styles.txt}>Gz Id: 138647923147</Text>
                    </View>

                    <View style={{marginTop:30}}>
                        <Text style={{textAlign:'center',fontSize:22,fontFamily:'Gilroy-ExtraBold',color:'#fff'}}>{this.props.navigation.state.params.name}</Text>
                    </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:20,marginTop:20,marginRight:10}}>
                    <View style={{flexDirection:'column',flex:0.8}}>
                        <Text style={styles.txt}>{this.props.navigation.state.params.number}</Text>
                        <Text style={styles.txt}>{this.props.navigation.state.params.email}</Text>
                        {/* {this.props.navigation.state.params.email} */}
                    </View>
                    
                        <View style={{flex:0.2}}>
                            <View style={styles.prof_img_wrap}>
                                <Image source={{uri:'http://www.genz360.com:81/get-image/'+this.props.navigation.state.params.profile_photo}} style={styles.prof_img} />
                            </View>
                        </View>
                    
                </View>
                   
            </ImageBackground>
        </ViewShot>

            
            {/* <View style={{flexDirection:'row',marginTop:30,marginLeft:10,marginRight:10,justifyContent:'space-between'}}>
            
                <TouchableOpacity  style={{flexDirection:'row',alignItems:'center'}} onPress={this.onSharePress}> 
                    <Icon name="share" size={24} color="#000"/>
                    <Text style={{fontSize:18,color:'#000',fontFamily:'SF',marginLeft:10,textAlign:'center'}}>Share</Text>
                </TouchableOpacity>
           
                <TouchableOpacity  style={{flexDirection:'row',alignItems:'center'}} onPress={this.onCapture}> 
                    <Icon name="download" size={24} color="#000"/>
                    <Text style={{fontSize:18,color:'#000',fontFamily:'SF',marginLeft:10,textAlign:'center'}}>Download</Text>
                </TouchableOpacity>
            </View> */}

                <View style={{flexDirection:'column',marginTop:20}}>
                    {/* <TouchableOpacity onPress={()=>this.onCapture2()} 
                        style={[styles.transfer_btn,{flexDirection:'row',alignItems:'center',
                        borderBottomWidth:1,borderTopWidth:1,borderTopColor:'#dadada',borderBottomColor:'#dadada'}]}>
                        
                        <Image source={require('./share.png')} style={{width:25,height:25}} />
                        <Text style={styles.transfer_btn_txt}>Share</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={()=>this.onCapture()}
                            style={[styles.transfer_btn,{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderColor:'#dadada'}]}>
                    <Image source={require('./download.png')} style={{width:25,height:25}} />
                        <Text style={styles.transfer_btn_txt}>Download</Text>
                    </TouchableOpacity>
                </View>
        </View>

        
        </ScrollView>
     
     </View>
     </ScrollView>
    );
  }
}

const styles=StyleSheet.create({

    container:{
       
        marginLeft:'5%',
        marginRight:'5%',
    },
    camp_img_wrap:{
        width:'100%',
       
        zIndex:0,
    
     
    },

    camp_img:{
        width:undefined,
        height:undefined,
        aspectRatio:1.778,
        borderRadius:20,
    },

    
    prof_img_wrap:{
        height:70,
        width:70, 
      
    },

    prof_img:{
        width:undefined,
        height:undefined,
        flex:1,
        borderRadius:50,
        alignItems:'center',
        aspectRatio:1,
    },

    txt:{
        fontSize:16,
        color:'#fff',
        fontFamily:'SF',
    },

    opt:{
        fontSize:18,
        color:'#000',
        fontFamily:'SF',
        marginLeft:10,
    },
    transfer_btn:{
        // borderBottomWidth:1,
        // borderTopWidth:1,
        // borderColor:'#dadada',
        width:'100%'
    },

    transfer_btn_txt:{
        fontSize:18,
        fontFamily:'SF',
        color:'#000',
        paddingTop:12,
        paddingBottom:12,
        marginLeft:10,
    },
});



