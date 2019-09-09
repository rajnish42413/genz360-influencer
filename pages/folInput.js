import {StyleSheet } from 'react-native';

export default StyleSheet.create({
   


    prof_det_wrap:{
        flexDirection:'row',
        paddingTop:'10%',
        paddingLeft:'5%',
        paddingBottom:50,
        flex:1,    
    },

    prof_img_wrap:{
        height:100,
        width:100,  
        alignItems:'center',
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
    },   

    info:{
        fontFamily:'SF',
        fontSize:20,
        
        color:"#000"
    },

    list:{
        
    },

    list_item_wrap:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#eee',
        paddingLeft:'5%',
        paddingTop:20,
        paddingBottom:20,
    },

    list_item:{
        marginLeft:15,
        fontSize:20,
        color:'#000',
        fontFamily:'SF',
      
    },
 
});