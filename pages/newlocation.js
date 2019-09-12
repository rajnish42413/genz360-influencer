import React, { Component } from 'react';
import { View ,ScrollView,StyleSheet,Text ,TouchableOpacity ,TouchableWithoutFeedback} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'  
 import * as Font from 'expo-font';
icon = ({ name, size = 18, style }) => {
  // flatten the styles
  const flat = StyleSheet.flatten(style);
  // remove out the keys that aren't accepted on View
  const { color, fontSize, ...styles } = flat;

  let iconComponent;
  // the colour in the url on this site has to be a hex w/o hash
  const iconColor = color && color.substr(0, 1) === '#' ? `${color.substr(1)}/` : '';

  const Search = (
    <Image
      source={{ uri: `https://png.icons8.com/search/${iconColor}ios/` }}
      style={{ width: size, height: size }}
    />
  );
  const Down = (
    <Image
      source={{ uri: `https://png.icons8.com/arrow-down/${iconColor}ios/` }}
      style={{ width: size, height: size }}
    />
  );
  const Up = (
    <Image
      source={{ uri: `https://png.icons8.com/arrow-up/${iconColor}ios/` }}
      style={{ width: size, height: size }}
    />
  );
  const Close = (
    <Image
      source={{ uri: `https://png.icons8.com/close-button/${iconColor}ios/` }}
      style={{ width: size, height: size }}
    />
  );

  const Check = (
    <Image
      source={{ uri: `https://png.icons8.com/check-mark/${iconColor}android/` }}
      style={{ width: size / 1.5, height: size / 1.5 }}
    />
  );
  const Cancel = (
    <Image
      source={{ uri: `https://png.icons8.com/cancel/${iconColor}ios/` }}
      style={{ width: size, height: size }}
    />
  );

  switch (name) {
    case 'search':
      iconComponent = Search;
      break;
    case 'keyboard-arrow-up':
      iconComponent = Up;
      break;
    case 'keyboard-arrow-down':
      iconComponent = Down;
      break;
    case 'close':
      iconComponent = Close;
      break;
    case 'check':
      iconComponent = Check;
      break;
    case 'cancel':
      iconComponent = Cancel;
      break;
    default:
      iconComponent = null;
      break;
  }
  return <View style={styles}>{iconComponent}</View>;
};
const items = [
  // this is the parent or 'item'
  {
    name: '',
    id: 0,
    icon: { uri:'' },
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],

   
  },

];
 
export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      items:[]
    };
  }
  get_locations = async () => {
    try {
      let response = await fetch('http://www.genz360.com:81/get-matching-locations', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: this.state.location,
        }),
      });
  
      let responseJson = await response.json();
  
      if (responseJson.valid) {
        this.setState({ items: responseJson.result })
      }
    } catch (error) {
      alert("Some thing went wrong 22!!!")
    }
  }
  componentDidMount(){
    this.get_locations();
    Font.loadAsync({
      'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'SF': require('../assets/fonts/SF.ttf'),
    });
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  onCancel = () => {
    this.SectionedMultiSelect._removeAllItems()
    this.setState({ selectedItems:[],})
  }

  SelectOrRemoveAll = () =>
  this.SectionedMultiSelect && (
    <TouchableOpacity
      style={ this.state.selectedItems.length ? styles.remove_btn: styles.select_btn }
      onPress={
        this.state.selectedItems.length
          ? this.SectionedMultiSelect._removeAllItems
          : this.SectionedMultiSelect._selectAllItems
      }
    >
      <Text style={{ color: 'white', fontWeight: 'bold',fontSize:18 }}>
        {this.state.selectedItems.length ? 'Remove' : 'Select'} all
      </Text>
    </TouchableOpacity>
  )
 
  render() {
    return (
      <View>
      <View style={{borderWidth:1,borderColor:'#dadada',borderRadius:10}}>
        <SectionedMultiSelect
        ref={SectionedMultiSelect => (this.SectionedMultiSelect = SectionedMultiSelect)}
          items={this.state.items}
          uniqueKey="id"
          subKey="name"
          showChips={true}
          selectText={this.state.selectedItems==0?
                    <Text style={{fontSize:18,color:'#000',fontFamily:'Gilroy-ExtraBold'}}>
                   Select Your Location</Text>:"Selected Your Location"}
          showDropDowns={false}
          showRemoveAll={false}
          modalWithSafeAreaView
          showCancelButton={true}
          onCancel={this.onCancel}
          readOnlyHeadings={true}
          expandDropDowns={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          ainmateDropDowns={false}
          single={true}
          colors={{ primary: '#f96d15', success: 'green' ,remove:'red'}}
          onConfirm={()=>{alert(this.state.selectedItems)}}
          styles={{

            selectText:{
              color:'red'
            },
            chipText:{
              fontSize:16,
              borderColor:'green',
            },
            
              subItemText: {
                  fontSize:18,
                  color:'#808080',
                },
                  item: {
                    paddingHorizontal: 10,
                  },
                  subItem: {
                    paddingHorizontal: 10,
                  },
                  selectedItem: {
                    backgroundColor: 'rgba(192,192,192,0.1)',
                  },
                  selectedSubItem: {
                    backgroundColor: 'rgba(192,192,192,0.1)',
                  },
                  selectedSubItemText: {
                    color: 'green',
                  },

                  
       
          }}
          cancelIconComponent={<Icon size={20} name="close" style={{ color: 'white' }} />}
        />
        </View>
      
      </View>


    );
  }
}

const styles = StyleSheet.create({
    selectToggle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'red',
        paddingHorizontal: 16,
        paddingVertical: 8,
      },

      label: {
        fontFamily:'OpenSans-Regular',
        color:'red',
        fontSize:16,
        paddingTop:5,
        paddingBottom:5,
      },
      switch: {
        marginTop:5,
        borderWidth:0.5,
        borderColor:'red',
        borderRadius:30,
        width:110,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
      },

      select_btn:{
        justifyContent: 'center',
        height: 44,
        borderWidth: 0,
        paddingHorizontal: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
      },

      remove_btn:{
        justifyContent: 'center',
        height: 44,
        borderWidth: 0,
        paddingHorizontal: 10,
        backgroundColor: 'red',
        alignItems: 'center', 
      },
});