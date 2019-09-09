import {StyleSheet} from 'react-native';


export default StyleSheet.create({
   
    back_camp_wrap:{
        flex:1,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:30,
    },

    camp_txt:{
        fontSize:30,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

    camp_img_wrap:{
        width:'100%',
        height:200,
        zIndex:0,
     
    },

    camp_img:{
        width:undefined,
        height:undefined,
        flex:1,
    },

    container: { 
        backgroundColor:'#fff',
        zIndex:1,
        marginTop:-50,
        color:'#000',
        fontSize:22,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    name_wrap:{
       paddingLeft:20,
       paddingTop:20,
    },

    name_txt:{
        fontSize:30,
        color:'#000',
        fontFamily:'Gilroy-ExtraBold',
    },

    desc_wrap:{
        paddingLeft:20,
        paddingTop:10,
        paddingRight:20,
        flex:1,
    },

    desc_txt:{
        fontSize:18,
        fontFamily:'SF',
        color:'#000',
        textAlign:'justify',
    },

    date_wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        marginTop:20,
    },
    date_txt:{
        fontSize:20,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

    bud_wrap:{
        flexDirection:'row',
        paddingLeft:15,
        paddingTop:10,
    },

    bud_txt:{
        fontSize:20,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },
    bud:{
        fontSize:20,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },
   

      os_img_wrap:{
          height:120,
          width:130,
          marginRight:10,
      },

      img:{
        width:undefined,
        height:undefined,
        flex:1,
        borderRadius:10,
        alignItems:'center',
       },

       os_wrap:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        alignItems:'center',
      },
    
      os_txt:{
        fontSize:25,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
      },
      
      flat_wrap:{
        paddingTop:15,
        marginLeft:10,
        paddingBottom:20,
      },

      loc:{
        fontSize:18,
        fontFamily:'Gilroy-ExtraBold',
      },

      fol:{
        fontSize:19,
        fontFamily:'Gilroy-ExtraBold',
      },

   
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorGrey: {
        color: '#d3d3d3',
        fontSize:20,
    },
    colorYellow: {
        color: 'black',
        fontSize:25,
    },


    text_input: {
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        fontSize:18,
        fontFamily:'SF',
        
    },

    text_input_wrap:{
        flexDirection:'row',
          borderWidth:1,
          borderRadius:8,
          borderColor:'#a9a9a9',  
          justifyContent:'center',
          alignItems:'center',
          marginTop:10,
          marginLeft:20,
          marginRight:20,
         
      }  ,
      
      
      share_btn:{
        backgroundColor:'#121b74',
        borderRadius:8,
        width:'70%',
        marginTop:10,
        paddingTop:5,
        paddingBottom:5,
        marginLeft:'10%'
      },
      
      inputSection_icon:{
        flexDirection:'row',
          borderWidth:1,
          borderRadius:8,
          borderColor:'#dadada',  
          justifyContent:'center',
          alignItems:'center',
          marginTop:10,
         
      } ,

      input_icon: {
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        fontSize:18,
        fontFamily:'SF',
    },


});