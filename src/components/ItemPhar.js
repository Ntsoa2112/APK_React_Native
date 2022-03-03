import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class ItemPhar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
 //star-outline
  render() {
    const {pharmacie,navigation} = this.props
    const star =[1,2,3,4,5]
    
    return (
        <TouchableOpacity style={styles.main_container} onPress={()=>navigation.navigate('DetailPharmacie',{
          id:pharmacie.id,
          nomPharmacie:pharmacie.nom
        })}>
            <Image
              style={styles.image}
              source={{uri: pharmacie.image}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                  <Text style={styles.title_text}numberOfLines={4}>{pharmacie.nom}</Text>
              </View>
              <View style={styles.description_container}>
                  <Text style={styles.description_text} numberOfLines={2}><FontAwesome5 name="map-marker-alt" color="tomato" size={26} />  {pharmacie.lieu}</Text>
              </View>
              <View style={styles.description_container_2}>
                  {
                    star.map((item)=><Ionicons name={item <= pharmacie.notation ? 'star-sharp' :'star-outline'} key={item} color="gold" size={20} />)
                    
                  }
              </View>
            </View>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    height: 115,
    flexDirection: 'row',
    backgroundColor:'white',
    marginBottom:10,
    borderRadius:10,
    marginLeft:5,
    marginRight:5,
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:4,
    elevation: 6
  },
  image: {
    width: 110,
    marginLeft:10,
    height:110,
    marginTop: 2,
    borderRadius:10,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
    marginLeft:20
  },
  header_container: {
    flex: 2,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    color:'black',
    paddingRight: 5
  },
  description_container: {
    flex:2
  },
  description_container_2: {
    flex:2,
    flexDirection:'row'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  bold:{
    fontWeight:'bold',
    color:'#058B12'
  }
  
})
export default ItemPhar