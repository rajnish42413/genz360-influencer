import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: { 
        flex: 1 ,
    
    },

    back_camp_wrap:{
        flex:1,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:30,
    },

  

    toc_txt:{
        fontSize:25,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
        paddingLeft:15,
        paddingTop:40,
    },

    check_main_wrap:{
        marginTop:5,
        marginLeft:15,
    },

    check_txt:{
        marginTop:-1,
        fontSize:25,
        marginLeft:10,
        fontFamily:'Gilroy-Light',
    },
    
    check_wrap:{
        marginTop:10,
        flexDirection:'row',
    },

    bi_txt:{
        fontSize:25,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },
    bi_txt_wrap:{
        marginLeft:15,
        marginTop:25,
    },

    bi_cont_wrap:{
        marginTop:20,
        paddingLeft:0,
        paddingRight:10,
   
    },  

    
    dur_txt_wrap:{
        marginLeft:5,
        marginTop:5,
    },

    footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:15,
        paddingTop:15,
        borderTopWidth:0.2,
    },

    next_btn:{
        fontSize:45,
        fontFamily:'Gilroy-ExtraBold',
        color:'#04669D',
    },
    cancel_btn:{
        fontSize:45,
        fontFamily:'Gilroy-ExtraBold',
        color:'#CD3131',
    },

    noi_input_wrap:{
        borderBottomWidth:0.4,
        width:'70%',
        marginLeft:20,
    },

    coi_txt:{
        fontSize:25,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
        marginLeft:15,
        marginTop:25,
    },

    cat_info_txt:{
        paddingLeft:15,
        paddingTop:10,
        fontFamily:'Gilroy-Light',
        color:'#000',
        fontSize:18,
    },

    input_cont_email:{
        borderBottomWidth:0.4,
        width:'65%',
        marginLeft:20,
        marginTop:15,
       },
    
       input_email:{
         fontSize:20,
         height:45,
         paddingLeft:5,
         paddingRight: 15,
       },

       
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorGrey: {
        color: '#000'
    },
    colorYellow: {
        color: '#000'
    },
   
    cat_input_wrap:{
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
    },

    cat_txt:{
        fontSize:28,
        fontFamily:'Gilroy-ExtraBold',
        marginTop:20,
    },

    input_cat:{
        borderBottomWidth:0.5,
        width:'50%',
        marginLeft:15,
        marginTop:0,
        marginRight:15,
        fontSize:25,
        fontFamily:'Gilroy-Light',
    },





/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
    
    createSection:{
        borderTopLeftRadius:30,  
        borderTopRightRadius:30,
        backgroundColor:'#fff',
        paddingTop:12,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:5,
    },

    create_txt:{
        fontSize:24,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

    heading:{
        paddingTop:20,
        fontSize:24,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

    input_heading:{
        fontSize:18,
        marginLeft:5,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000'
    },


    inputSection:{
        paddingTop:5,
        paddingLeft:8,
        paddingRight:8,
    },

    input_wrap:{
        flexDirection:'column',
        paddingLeft:5,
        paddingTop:20,
    
    },

    label:{
        fontSize:16,
        fontFamily:'SF',
        color:'#808080'
    },

    input:{
        marginTop:3,
        borderWidth:1,
        borderRadius:8,
        borderColor:'#dadada',
        paddingTop:8,  //10
        paddingBottom:8, //12
        fontSize:18,
        fontFamily:'SF',
    },

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
    fontSize:20,
    color:'#808080',
    fontFamily:'Gilroy-ExtraBold',
  
   },



   // **********************************

inputSection_icon:{
    flexDirection:'row',
    borderWidth:1,
    borderRadius:8,
    borderColor:'#dadada',  
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
}  , 

icon: {
    padding:5,
    paddingLeft:10,
},

icon_sub:{
    padding:5,
    paddingRight:10,
},

input_icon: {
    flex:2,
    marginTop:3,
    paddingLeft:10,
    paddingBottom:12,
    fontSize:18,
    fontFamily:'SF',
    
},

icon_head_wrap:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    borderWidth:1,
    borderColor:'#dadada',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:8,
    backgroundColor:'#f4f6f6',
},




head:{
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
    fontSize:24,
},  

max_wrap:{
    backgroundColor:'#dadada',
    paddingTop:18,
    paddingBottom:18,
    paddingRight:10,
    paddingLeft:10,
    justifyContent:'center',
},

max_txt:{
    fontSize:16,
    fontFamily:'SF',
    color:'#000',
},

name:{
    fontSize:20,
    
    marginRight:10,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
},

});
