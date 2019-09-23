import {StyleSheet ,Platform} from 'react-native';
import { Constants } from 'expo';

navigationOptions:{
  headerStyle:{
    marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight }
  }

export default StyleSheet.create({


    header_wrapper:{
        backgroundColor:'#121b74',
    },

    name:{
        fontFamily:'SF',
        fontSize:16,
        color:'#000',
    },


    wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:14,
        paddingBottom:10,
        alignItems:'center',
       
    },

    tagline:{
        fontSize:20,
        paddingTop:5,
        lineHeight:17,
        fontFamily:'Gilroy-ExtraBold',
        textAlign:'right',
        color:'#fff',
    },

    backbtn:{
       paddingLeft:10,
    },

    mainSection:{
        borderTopLeftRadius:30,  
        borderTopRightRadius:30,
        backgroundColor:'#fff',
        paddingTop:12,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:5,
    },

    support_banner_img:{
        height:200,
        width:'100%',
        resizeMode:'stretch',
        borderRadius:8,
    },

    support_banner:{
        marginTop:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'2%',
        marginRight:'2%',
    },



    heading:{
        paddingTop:20,
        fontSize:24,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },


    /* ************BTN******************/

    btn_wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        paddingBottom:20,
    },

    nextbtn:{
        backgroundColor:'#f96d15',
        flex:0.5,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderRadius:8,
    },
  
    auth_btn:{
        backgroundColor:'#f96d15',
        width:'70%',
        marginTop:15,
      
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderRadius:8,
    },

   nextbtn_txt:{
    fontSize:20,
    color:'#fff',
    fontFamily:'Gilroy-ExtraBold',
  
   },

   cancelbtn:{
    flex:0.4,
    alignItems:'center',
    borderWidth:1,
    paddingTop:9,
    paddingBottom:9,
    borderRadius:8,
    borderColor:'#808080',
   },

   cancelbtn_txt:{
    fontSize:22,
    color:'#808080',
    fontFamily:'Gilroy-ExtraBold',
  
   },


   input_heading:{
    fontSize:18,
    marginLeft:5,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000'
},

sub_heading:{
    fontSize:18,
    marginLeft:5,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
},

dropdown:{
    borderWidth:1,
    borderColor:'#dadada',
    marginTop:15,
    borderRadius:8,
    paddingTop:0,
    paddingBottom:0,
},

sup_heading:{
    fontSize:24,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
},

input_wrap_label:{
    flexDirection:'column',
    paddingLeft:5,
    paddingTop:20,
},

banner:{
    marginTop:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:'5%',
    marginRight:'5%',
},

banner_img:{
    height:130,
    width:'100%',
    resizeMode:'stretch',
    borderRadius:8,
},

tabIcon:{
    width:30,
    height:30,
},


heading_wrap:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    alignItems:'center',
},

heading_wrap_ws:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  
    paddingTop:20,
    alignItems:'center',
},

heading_g:{
    fontSize:22,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
},

heading_normal:{
    fontSize:20,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
},

createSection:{
    borderTopLeftRadius:30,  
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    paddingTop:12,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:5,
},

createSection_ws:{
    borderTopLeftRadius:30,  
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    // paddingTop:12,
     paddingLeft:20,
     paddingRight:20,
    // paddingBottom:5,
},

home:{
    fontFamily:'Gilroy-ExtraBold',
    fontSize:22,
    color:'#000',
},

createSection_browse:{
    borderTopLeftRadius:30,  
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    paddingTop:12,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:5,
},

createSection_no:{
    borderTopLeftRadius:30,  
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    paddingTop:12,
    // paddingLeft:10,
    // paddingRight:10,
    paddingBottom:5,
},




});