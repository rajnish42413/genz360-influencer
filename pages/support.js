import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image,ImageBackground ,CheckBox,AsyncStorage } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';


import header from './headerStyle';








export default class Support extends Component{
  
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
                    <Image source={require('./supportimg.jpg')} style={header.support_banner_img}/>
                </View>

                <Text style={[header.heading_g,{paddingLeft:5,paddingTop:5}]}>Support</Text>
                
                <View style={{marginLeft:'2%',marginRight:'2%',marginTop:15}}> 
                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17}}>
                    The members of our GenZ360 Support Community can help answer your question. Feel free to ask anything . {'\n'}
                    </Text>

                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17}}>
                    For all technical queries please write to <Text style={{fontFamily:'Gilroy-ExtraBold'}}>info@genz360.com</Text>.
                    </Text>
                
                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17,marginTop:10}}> All sales and payment issues please write to  
                    <Text style={{fontFamily:'Gilroy-ExtraBold'}}> sales@genz360.com</Text></Text>
                </View>

                    </ScrollView>
     
     </View>
     </ScrollView>
        );
    }
}


