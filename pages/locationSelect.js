import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as Font from 'expo-font';
 
var items = [
  {
    id: 1,
    name: 'Kanpur',
  },
  {
    id: 2,
    name: 'us',
  },
  {
    id: 3,
    name: 'ny',
  },
  {
    id: 4,
    name: 'texas',
  },

 
];
export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems:[],
      items:[]
  }

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
    alert(error);
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

  render() {
  return (
        <Fragment>
        
          {/* Single */}
          <SearchableDropdown
          selectedItems={this.state.selectedItems}
          searchPlaceholderText="Search"
          multi={false}
          onItemSelect={(item) => {
            this.props.setlocation(item.name);
            const items = this.state.selectedItems;
            items.push(item)
            this.setState({ selectedItems: items });
          }}
            containerStyle={{ padding: 5 }}
              itemStyle={{
              padding: 10,
              marginTop: 0,
              backgroundColor: '#fff',
              borderColor: '#bbb',
              fontSize:20,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              fontSize:18,
            }}
            itemTextStyle={{ color: '#000' ,fontSize:18 }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={this.state.items}
            defaultIndex={2}
            resetValue={false}
            placeholder={"LOCATION"}
            value={this.state.selectedItems}
            
            textInputProps={
              {
                searchPlaceholderText="Search",
                placeholder: "LOCATION",
                underlineColorAndroid: "transparent",
                style: {
                    paddingTop:15,
                    paddingBottom:15,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius:8,
                    borderBottomWidth:1,
                    borderColor:'#dadada',
                },
                // onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
  );
  }
}