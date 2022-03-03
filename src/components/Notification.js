import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity} from 'react-native'


class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    console.log(this.props.route.name)
    
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
export default Notification