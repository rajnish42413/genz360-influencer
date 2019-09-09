import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: { 
        flex: 1 ,
    
    },

    home_wrap:{
        paddingTop:20,
        paddingLeft:20,   
    },

    home:{
        fontFamily:'Gilroy-ExtraBold',
        fontSize:22,
        color:'#000',
    },
    
    input_wrap:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
    },

    input:{
        backgroundColor:'#eee',
        borderRadius:18,
        paddingLeft:10,
        fontSize:20,
    },

   lc_wrap:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-between',
       paddingLeft:20,
       paddingRight:20,
       paddingTop:20,
       alignItems:'center',
   },

   lc_txt:{
    fontSize:28,
    fontFamily:'Gilroy-ExtraBold',
    color:'#000',
   },

  vm_txt:{
    fontSize:18,
    color:'blue',
    fontFamily:'SF',
   },

   lc_cont:{
    flexDirection:'row',
    flex:1,
   },

   box:{
    borderWidth:0.2,
    height:50,
    backgroundColor:50,
   },

   lc_cont:{
    flex: 1,
    paddingTop:20,
    paddingLeft:5,
    paddingRight:15,
    flexDirection: 'row',
    justifyContent:'space-between',
   },

 

   flat_wrap:{
    paddingLeft:10,
    paddingTop:15,
    paddingBottom:15,
   },

   lc_box_wrap:{
    height:190,
    width:290,
    borderRadius:8,
    borderColor:'#dadada',
    borderWidth:1,
    marginLeft:0,
    marginRight:10,
   },

   applied_box_wrap:{
    height:170,
    width:270,
    borderRadius:8,
    borderColor:'#dadada',
    borderWidth:1,
    marginLeft:0,
    marginRight:10,
   },

   daily_box_wrap:{
    height:150,
    width:200,
    borderRadius:8,
    borderColor:'#dadada',
    borderWidth:1,
    marginLeft:0,
    marginRight:10,
   },


   img:{
    width:undefined,
    height:undefined,
    flex:1,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    alignItems:'center',
   },

   img_inf:{
    width:undefined,
    height:undefined,
    flex:1,
    borderRadius:8,
    alignItems:'center',
   },

   img_os:{
    width:undefined,
    height:undefined,
    flex:1,
    borderRadius:100,
    alignItems:'center',
    aspectRatio:1,
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
        borderWidth:0.2,
        borderRadius:8,
        flexDirection:'row',
    },

    bi_img_wrap:{
        height:100,
        width:100,
    },

    bi_content:{
        paddingRight:5,
        paddingLeft:5,
        paddingTop:10,
    },

    name:{
        fontSize:17,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
    },

    loc:{
        paddingLeft:5,
        fontSize:14,
        paddingTop:5,
        fontFamily:'Gilroy-Light',
        color:'#191919',
    },

    followers:{
        fontSize:22,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
        paddingLeft:10,
    },

    os_wrap:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        alignItems:'center',
      },
    

      



      os_txt:{
        fontSize:28,
        fontFamily:'Gilroy-ExtraBold',
        color:'#000',
      },

      os_img_wrap:{
          height:110,
          width:110,
          marginRight:8,
      },




      campbtn:{
        backgroundColor:'#f96d15',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:8,
        paddingRight:8,
        borderRadius:8,
    },
  
   campbtn_txt:{
    fontSize:16,
    color:'blue',
    fontFamily:'SF',
  
   },

/////////////////////Campaign Browse///////

   camp_box_wrap:{
   
    flex:1,
    borderRadius:8,
    borderColor:'#dadada',
    borderWidth:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
   },

   camp_img:{
    width:undefined,
    height:120,
    flex:1,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    alignItems:'center',
   },


   item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  }

});