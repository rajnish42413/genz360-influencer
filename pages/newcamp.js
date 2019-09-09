import React , {Component} from "react";
import {ScrollView, View, Text, TextInput ,StyleSheet ,FlatList ,TouchableOpacity ,Image,ImageBackground} from "react-native";


import styles from './campStyle';
import header from './headerStyle';


import Icon from 'react-native-vector-icons/FontAwesome5'



const Gallery = (props) => (
  <TouchableOpacity style={styles.os_img_wrap}>
    <Image source={require('./camp3.png')} style={styles.img}/>
  </TouchableOpacity>
  );



export default class Campaign extends Component {

  constructor (props) {
    super(props);
    this.state = {
      notif:['a','b','c'],
      gallery:['a','b','c'],
    };
}




  render() {
  
      return (

          <ScrollView>
            <View style={styles.camp_img_wrap}>
            
                <ImageBackground source={require('./camp2.jpeg')} style={styles.camp_img}>

                  <Icon name="arrow-left" size={24} color="#000" style={{marginTop:20,marginLeft:20}}/>
                </ImageBackground>
            </View>
        <ScrollView style={styles.container}>

                <View style={styles.name_wrap}>
                    <Text style={header.heading_normal}>DIOR Campaign</Text>         
                </View>

                <View style={styles.desc_wrap}>
                    <Text style={styles.desc_txt}>Brief About The Campaign.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed elit erat. Lorem ipsum dolor sit amet
                , consectetur adipiscing elit. Curabitur sed elit erat.</Text>
                </View>

                

               <View style={styles.os_wrap}>
                <Text style={header.heading_normal}>Image Gallery</Text>
              </View>

               <View style={styles.flat_wrap}>
            <FlatList 
            horizontal={true}
            data={this.state.gallery}
            renderItem={({item})=><Gallery /> }
                 />
              </View>
               
        </ScrollView>
        <TouchableOpacity style={{backgroundColor:'#f96d15',marginTop:20,marginLeft:20,marginRight:20,borderRadius:8,alignItems:'center',paddingTop:10,paddingBottom:10}}>
          <Text style={{color:'#fff',fontSize:18,fontFamily:'SF'}}>Apply For This Campaign</Text>
        </TouchableOpacity>
        </ScrollView>
      );
    }
  }









