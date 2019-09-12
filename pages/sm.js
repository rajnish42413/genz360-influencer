import React, { Component } from 'react';
import { View ,ScrollView,StyleSheet,Text,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
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
    name: 'Interest categories',
    id: 0,
    icon: { uri: 'https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png' },
    // these are the children or 'sub items'
    children: [
      {
        name: 'Lifestyle',
        id: 1,
      },
      {
        name: 'Fashion',
        id: 2,
      },
      {
        name: 'Fitness',
        id: 3,
      },
      {
        name: 'Sports',
        id: 4,
      },
      {
        name: 'Food',
        id: 5,
      },
      {
        name: 'Education',
        id:6,
      },
      {
        name: 'Entertainment',
        id: 7,
      },
      {
        name: 'Dance & Music',
        id: 8,
      },
      {
        name: 'Gadgets',
        id: 9,
      },
      {
        name: 'Career',
        id: 10,
      },
      {
        name: 'Others',
        id: 11,
      }
    ],

   
  },

];
 
export default class Sm extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      
    };
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
  componentDidUpdate(){
   // this.props.selectedSm(this.state.selectedItems)
  }
 
  componentDidMount(){
    Font.loadAsync({
      'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'SF': require('../assets/fonts/SF.ttf'),
    });
  }
  render() {
    return (
      <ScrollView>
        <View>
      <View style={{borderWidth:1,borderColor:'#dadada',borderRadius:10}}>
        <SectionedMultiSelect
        ref={SectionedMultiSelect => (this.SectionedMultiSelect = SectionedMultiSelect)}
          items={items}
          uniqueKey="id"
          subKey="children"
          showChips={true}
          selectText={this.state.selectedItems==0?
                    <Text style={{fontSize:18,color:'#000',fontFamily:'Gilroy-ExtraBold'}}>
                   Select Your Interests</Text>:"Selected Influencer Categories"}
          showDropDowns={false}
          modalWithSafeAreaView
          showCancelButton={true}
          onCancel={this.onCancel}
          readOnlyHeadings={true}
          expandDropDowns={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          ainmateDropDowns={false}
          headerComponent={this.SelectOrRemoveAll}
          colors={{ primary: '#f96d15', success: 'green' ,remove:'red'}}
          onConfirm={()=>{this.props.selectedSm(this.state.selectedItems)}}
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

                confirmText:{
                  color:'#fff',
                  paddingTop:10,
                  fontSize:18,
                  paddingBottom:10,
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
        {
        this.state.selectedItems.length?
         <TouchableWithoutFeedback onPress={() => this.SectionedMultiSelect._removeAllItems()}>
            <View style={styles.switch}>
              <Text style={styles.label}>Remove All</Text>
            </View>
          </TouchableWithoutFeedback>
          :null 
        }
      </View>
      </ScrollView>
      
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
});