import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: { 
        flex: 1 ,
    
    },

  flat_wrap:{
    marginTop:20,
  },    

   img:{
    width:undefined,
    height:undefined,
    flex:1,
    borderRadius:10,
    alignItems:'center',
   },

  bi_wrap:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:30,
    alignItems:'center',
  },

  bi_txt:{
    fontSize:28,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
  },

  bi_box:{
       
        marginRight:10,
        marginTop:10,
        marginLeft:10,  
        borderWidth:0.2,
        borderRadius:10,
        flexDirection:'row',
        flex:1,
    },

    bi_img_wrap:{
        height:'100%',
        width:120,

    },

    bi_content:{
        paddingRight:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
    },

    name:{
        fontSize:20,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

    loc:{
        paddingLeft:5,
        fontSize:18,
        paddingTop:5,
        fontFamily:'Gilroy-Light',
        color:'#191919',
    },

    followers:{
        fontSize:30,
        fontFamily:'Gilroy-ExtraBold',
        paddingTop:10,
        color:'#000',
        paddingLeft:10,
    },

    back_notif_wrap:{
        flex:1,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:30,
    },


    tnc_notif_wrap:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:5,
    },

    notif_txt:{
        fontSize:30,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
        marginTop:20,
    },

    fol:{
        fontSize:18,
        fontFamily:'Gilroy-ExtraBold',
    },

    wrap:{
        marginTop:20,
    },

    platname:{
        fontSize:28,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
        marginTop:10,
        marginLeft:'4%',
    },

    inputwrap:{
        marginLeft:'4%',
        marginRight:'7%',
        width:'85%',
       },   
    
       input:{
         fontSize:20,
         borderBottomWidth:0.4,
         height:45,
         paddingLeft:5,
         paddingRight: 15,
       },
    
       sub_notif_wrap:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:30,
        marginBottom:5,
    },

    sub_txt:{
        fontSize:40,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

});