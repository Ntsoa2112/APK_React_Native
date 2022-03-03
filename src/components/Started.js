import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity} from 'react-native'


class Started extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Menu',{
        screen:'Acueill'
      })
    },1000)
  }
  render() {
    return (
        <SafeAreaView>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1
  },
  
})
export default Started