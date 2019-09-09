import {StyleSheet } from 'react-native';

export default StyleSheet.create({
   


    prof_det_wrap:{
        flexDirection:'row',
        paddingTop:'5%',
        paddingLeft:'5%',
        paddingBottom:10,
        flex:1,    
    },

    prof_img_wrap:{
        height:100,
        width:100,  
        alignItems:'center',
        flex:0.3,
    },

    prof_img:{
        width:undefined,
        height:undefined,
        flex:1,
        borderRadius:50,
        alignItems:'center',
        aspectRatio:1,
    },

    prof_det:{
        marginLeft:20,
        marginTop:10,
        flex:0.8,
    },   

    info:{
        fontFamily:'SF',
        fontSize:18,
        color:"#000"
    },

    list:{
    paddingBottom:30,
    },

    list_item_wrap:{
        flexDirection:'row',
        // borderWidth:1,
        // borderColor:'#eee',
        paddingLeft:'5%',
        paddingTop:12,
        paddingBottom:12,
    },

    list_item:{
        marginLeft:15,
        fontSize:20,
        color:'#000',
        fontFamily:'SF',
      
    },
 
});