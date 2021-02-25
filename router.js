import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { register, preload } from 'react-native-bundle-splitter';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity
            onPress={async ()=>{ 
              try{
                await preload().component('FTUE')
                setTimeout(() => {
                  this.props.navigation.navigate('Ftue')
                },5000)
              }
              catch(e){
                alert(e)
              }
            }}
        >
            <Text>go to next screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeScreenWithNavigation = withNavigation(HomeScreen);

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreenWithNavigation,
  },
  Ftue: {
    screen: register({
      require: () => require('./FTUEStack'),
      name: "FTUE",
      extract: 'FTUEStack'
    })
  }
});

export default createAppContainer(AppNavigator);