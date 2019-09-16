import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image,ImageBackground ,CheckBox,AsyncStorage } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import header from './headerStyle';


export default class About extends Component{
  
    constructor(props){
        super(props);
        this.state={
         
        };
    }

    componentDidMount(){
        Font.loadAsync({
            'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
            'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
            'SF': require('../assets/fonts/SF.ttf'),
          });
    }
    

    render(){

        return(

            <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={header.header_wrapper}>
            <View style={header.wrap}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon  style={header.backbtn} name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
            </View>
      
            <ScrollView style={header.createSection_ws}>
      
                  <View style={[{paddingLeft:20,paddingTop:5}]}> 
                    
                  </View>
                
                <View style={[header.support_banner]}>
                    <Image source={require('./banner.png')} style={header.banner_img}/>
                </View>


                <Text style={[header.heading_g,{paddingLeft:5,paddingTop:'5%'}]}>About</Text>
                
                <View style={{marginLeft:'2%',marginRight:'2%',marginTop:15}}> 
                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17}}>
                    GenZ360 is a product of Studenting Era Private Limited. Studenting Era Private Limited 
                    is a Global corporation, focused on providing multiple products &amp; services to the youth.               
                             </Text>

                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17,marginTop:10}}>
                    GenZ360 is an online Nano Influencer platform which helps the brands to collaborate directly with 
                    the Nano Influencers, the everyday people.
                    </Text>
                
                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17,marginTop:10}}>It’s a platform which provides 
                    services like Branding &amp; PR, Video &amp; Content
                     based marketing, Brand viralization, Lead generation, App promotion and many more, leveraging the
                      efforts &amp; social activities of the Nano Influencers.</Text>


                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:'15%',marginRight:'10%',marginTop:'8%'}}>
                            <Text style={{fontSize:16,color:'#191919',fontFamily:'SF'}}>Developed By </Text>
                            <Text style={{fontSize:16,color:'#191919',fontFamily:'Gilroy-ExtraBold'}}>UltimateShark</Text>
                        </View>

                </View>

                    </ScrollView>
     
     </View>
     </ScrollView>
        );
    }
}


