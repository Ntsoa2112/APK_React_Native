import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux'
import Home from './Home'
import Notification from './Notification'
import Setting from './Setting'

import Login from './Login'

const Tab = createMaterialBottomTabNavigator();
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
 
  render() {
    return (
      <Tab.Navigator initialRouteName="Home" headerMode="screen"   shifting={true} labeled={true}
        activeColor="white"  inactiveColor="#E2E2E2">
        <Tab.Screen name="Acueill" component={Home}
          options={{
            tabBarLabel: 'Acueill',
            tabBarColor:'#058B12',
            tabBarIcon: ({ color="white" }) => (
              <Ionicons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Notification" component={Notification}
          options={{
          tabBarLabel: 'Notifications',
          tabBarBadge: 1,
          tabBarColor:'#058B12',
          tabBarIcon: ({ color="white" }) => (
            <Ionicons name="notifications-outline" color={color} size={26} />
          ),
        }}
         />
        <Tab.Screen name="Setting" component={Setting}
          options={{
              tabBarLabel: 'Paramètres',
              tabBarColor:'#058B12',
              tabBarIcon: ({ color="white" }) => (
                <Ionicons name="settings-outline" color={color} size={26} />
              ),
          }}
        />
       <Tab.Screen name="Login" component={Login}
          options={{
              tabBarLabel: 'Login',
              tabBarColor:'#058B12',
              tabBarIcon: ({ color="white" }) => (
                <Feather name="user" color={color} size={26} />
              ),
          }}
        />
        
      </Tab.Navigator>
    )
  }
}

export default  Menu 