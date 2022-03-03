import React from 'react'

import {View,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Started from '../components/Started'
import Menu from '../components/Menu'
import Search from '../components/ListPharmacie'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'

import DetailPharmacie from '../components/DetailPharmacie'

 const headerStyle = {
    headerStyle: {
      backgroundColor: '#058B12',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      shadowColor: '#470000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius:4,
      elevation: 6
    },
 }
 
const Stack = createStackNavigator();


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    const lang = this.props.langue
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Started"  screenOptions={{headerMode: 'screen',tabBarColor:'#058B12'}}>
            <Stack.Screen name="Search" component={Search} options={({route}) =>({
              headerShown:true,...headerStyle,title: langue[lang].liste_pharmacie})}/>
            <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}} />
            <Stack.Screen name="Started" component={Started} options={{headerShown:false}} />
            <Stack.Screen name="DetailPharmacie" component={DetailPharmacie} options={({route}) =>({
              headerShown:true,...headerStyle,title: route.params.nomPharmacie.includes('Pharmacie')? route.params.nomPharmacie :'Pharmacie ' + route.params.nomPharmacie })}/>
            
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
 
})

const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default connect(mapStateToProps)(Navigation)
