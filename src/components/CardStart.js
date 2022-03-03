import React from 'react'
import { StyleSheet,View,Text,TouchableOpacity,Image,Dimensions} from 'react-native'


const windowWidth = Dimensions.get('window').width-20 ;
const windowHeight = Dimensions.get('window').height;

class CardStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  goTo = (name,routeName,navigation) =>{

    navigation.navigate(name, {
      routeName: routeName,
      postion:{
        status:1
      }
    })
  }
  render() {
    const {item,navigation} = this.props
    return (
        <TouchableOpacity  style={styles.main_container} onPress={()=>this.goTo(item.route,item.routeName,navigation)}>
          <View style={styles.inner_container_1}>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.innerTitle}>
              {item.innerTitle}
            </Text>
          </View>
          <View style={styles.inner_container_2}>
            <Image
              style={[styles.image,{width:item.width,
                height:item.height,marginLeft:item.marginLeft}]}
              source={item.image}
            />
          </View>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({

  main_container: {
    width:windowWidth/2,
    height:170,
    marginRight:5,
    marginLeft:0,
    backgroundColor:'white',
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:2,
    elevation: 6,
    borderRadius:2

  },
  inner_container_1:{
    flex:3
  },
  inner_container_2:{
    flex:3
  },
  title:{
    color:'#058B12',
    marginTop:10,
    marginLeft:5,
    fontSize:20,
    fontWeight:'bold'
  },
  innerTitle:{
    color:'gray',
    marginTop:2,
    marginLeft:5,
  },
  image:{
    
  }
  
})
export default CardStart