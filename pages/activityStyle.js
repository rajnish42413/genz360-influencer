import {StyleSheet } from 'react-native';

export default StyleSheet.create({
    box_wrap:{
        flexDirection:'row',
        marginLeft:15,
        marginRight:15,
        marginTop:20,
    },

    camp_box:{
        flex:1,
        backgroundColor:'#dadada',
        borderRadius:8,
        alignItems:'center',
        padding:5,
        paddingBottom:15,
    },

    earn_box:{
        flex:1,
        backgroundColor:'#dadada',
        marginLeft:10,
        borderRadius:8,
        alignItems:'center',
        padding:5,
    },

    val_txt:{
        fontSize:35,
        marginTop:15,
        fontFamily:'Gilroy-Light',
        color:'#fff',
    },

    h_txt:{
        marginTop:25,
        fontSize:13,
        fontFamily:'SF',
        color:'#dadada',
    },

    h_list:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:5,
        marginRight:5,
        paddingLeft:10,
        paddingRight:10,
        marginTop:15,
        // backgroundColor:'#dae1f2',
        backgroundColor:'#a9a9a9',
        borderRadius:8,
    },
    h_list_name:{
        fontSize:17,
        width:'50%',
        fontFamily:'Gilroy-ExtraBold',
        paddingTop:5,
        paddingBottom:5,
        color:'#000',
    },

    h_list_date:{
        fontSize:17,
        width:'30%',
        fontFamily:'Gilroy-ExtraBold',
        paddingTop:5,
        paddingBottom:5,

    },

    h_list_earn:{
        fontSize:17,
        width:'20%',
        fontFamily:'Gilroy-ExtraBold',
        paddingTop:5,
        paddingBottom:5,
        color:'#000'
        
    },

    sum_list:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:5,
        marginRight:5,
        paddingLeft:10,
        paddingRight:10,
        marginTop:15,
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        borderBottomWidth:1,
        borderColor:'#dadada',
        paddingBottom:10,
    },
    sum_list_name:{
        fontSize:17,
        width:'50%',
        fontFamily:'SF',
        paddingTop:5,
        paddingBottom:5,
        color:'#000',
    },

    sum_list_date:{
        fontSize:16,
        width:'30%',
        fontFamily:'SF',
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5,
        color:'#000',

    },

  
    sum_list_earn:{
        fontSize:16,
        width:'20%',
        fontFamily:'SF',
        paddingTop:5,
        paddingBottom:5,
        color:'#000',

    },

});