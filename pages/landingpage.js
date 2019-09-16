import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet ,Dimensions,FlatList ,TouchableOpacity,ActivityIndicator,AsyncStorage ,Image ,CheckBox ,ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Sm from './sm';
import header from './headerStyle';
import * as Font from 'expo-font';
import Swiper from 'react-native-swiper';


const Screen_widht=Dimensions.get('window').width
const Screen_height=Dimensions.get('window').height
const Loader=()=>(
  <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
)

export default class Landingpage extends Component{
    
    constructor(props){
        super(props);
        this.state={
        
          current_screen:"",
          fontLoadedd:false
        }
    }

    async _getStorageValue(){
      let value = await AsyncStorage.getItem("current_screen");
      try{
        if (value===null || value==="" || value ==="Login"){
          return;
        }
        else{
          this.props.navigation.navigate(value);
        }
      }
      catch{
        alert("Something is wrong")
      }
      
      
    }
    checkloginstatus=async ()=>{
      try {
        let value = await AsyncStorage.getItem("tokken");
        let response = await fetch('http://www.genz360.com:81/infloginstatus',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokken: value
          }),
        });
        
        let responseJson = await response.json();
    
        if (!responseJson.valid){
          this._storeData('current_screen','Login')
          this._storeData('tokken',null)
        }
      } catch (error) {
        alert(error);
      }
    }
    _storeData = async (key,val) => {
      try {
        await AsyncStorage.setItem(key, val.toString());
      } catch (error) {
        alert(error);
      }
    };

    async componentWillMount(){
    

      await Font.loadAsync({
        'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
        'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
        'SF': require('../assets/fonts/SF.ttf'),
      });
      this.setState({ fontLoadedd:true });

        this.checkloginstatus();
        this._getStorageValue();

    }

    render(){
        return(

       this.state.fontLoadedd ? (
     
          <View style={{flex:1}}>
          <Swiper style={styles.wrapper} showsButtons={false} 
            dot={<View style={{backgroundColor:'rgba(255,255,255,1)', width: 8, height: 8,borderRadius: 4, 
            marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />  }
            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}}            />}
               loop={false}
          >
          <View style={styles.slide1}>
            <Image source={require('./cashconnect.png')} style={styles.image}/>
          </View>
          <View style={styles.slide3}>
          <Image source={require('./speakrfinal.png')} style={styles.image}/>
            
          </View>
          <View style={[styles.slide2,{flexDirection:'column'}]}>
          <Image source={require('./entr.png')} style={styles.image}/>


          </View>
         
          <View style={{flex:1,backgroundColor:'#241663'}}>
              <View sytle={styles.slide}>
                <View style={styles.logowrap}>  
                  <View style={styles.logo}>
                    <Image source ={require('./logo.png')} style={styles.logoimg}/>
                  </View>
                </View>

                      <View>
                        <Text style={{fontSize:50,fontFamily:'Gilroy-ExtraBold',color:'#fff',textAlign:'center'}}>CASH {'\n'}YOUR CONNECT</Text>
                      </View>

                      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate("Login")}>
                      <Text style={styles.btn_txt}>Go To Login >></Text>
                    </TouchableOpacity>

              </View>
             
           </View>
          
        </Swiper>
        {/* <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("Login")}
          style={{flex:0.1,flexDirection:'column',justifyContent:'center',backgroundColor:'#f96d15'}}>
          <Text style={{textAlign:'center',fontSize:23,fontFamily:'Gilroy-ExtraBold',color:'#fff'}}>LOGIN</Text>
        </TouchableOpacity> */}
        </View>

        ):null

       )
      
    }
}




 

const styles = StyleSheet.create({
  wrapper: {
    flex:1
  },
  slide1: {
   
  position:'absolute',
  top:0,
  height:'100%',
  width:'100%',
    backgroundColor: '#241663',
  },
  slide2: {
  
 

    backgroundColor: '#241663',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#241663',
  },
  slide3: {
  

    backgroundColor: '#241663',
  },
  logowrap:{
    
    alignItems:'center',
    marginTop:'5%',
},

logoimg:{
    height:250,
    width:250,
    resizeMode:'contain'
},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image:{
    height:'100%',
    width:'100%',
    resizeMode:'contain',
  },
  btn:{
    marginLeft:20,
    marginRight:20,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    backgroundColor:'#f96d15',
    marginTop:20,
    alignItems:'center'

  },

  btn_txt:{
      fontSize:20,
      color:'#fff',
      fontFamily:'Gilroy-ExtraBold',
  },
});


