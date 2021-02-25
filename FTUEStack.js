import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';


class Screen1 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Screen 1</Text>
          <TouchableOpacity
              onPress={()=>{ 
                  this.props.navigation.navigate('Screen2')
              }}
          >
              <Text>go to next screen</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

class Screen2 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Screen 2</Text>
          <TouchableOpacity
              onPress={()=>{ 
                  alert(this.props.navigation)
              }}
          >
              <Text>go to next screen</Text>
          </TouchableOpacity>
        </View>
      );
    }
}


const FTUEStack = createStackNavigator({
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
    initialRouteName: 'Screen1'
  });


  export {FTUEStack};