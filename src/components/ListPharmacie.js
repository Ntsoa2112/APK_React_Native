import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Dimensions,FlatList,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'
import DisplayLoading from './DisplayLoading';
import { TextInput } from 'react-native-paper';
import ItemPhar from './ItemPhar'
import http from '../service/http'
import axios from 'axios'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      critere:'',
      items:[],
      isLoading:true
      
    }
  }
  
  componentDidMount(){
    const extractUrl = this.props.route.params.routeName ? this.props.route.params.routeName : ''  
    this.getItems(extractUrl)
  }

  getCritere =(critere)=>{
    this.setState({
      critere:critere
    })
  }
  
  getItems =(condition)=>{
    if(condition){
      let donnee = [
        {"id":1,"nom":" Pharmacie Rakotoarivony",
        "lieu":"Analakely","image":"https://rci.fm/sites/default/files/2021-04/pharmacie.jpg",
        "date_created":"2021-11-09T08:03:11.000Z","date_updated":"2021-11-11T18:15:12.000Z",
        "longitude":"47.525228882622166","latitude":"-18.90633554528606",
        "parking":"001","bus":"192,145,178,156","arret":"Galaxy","notation":4,"contact":"0340921107"},
        {"id":2,"nom":"Pharmacie de l'Ocean Indien","lieu":"Analakely",
        "image":"https://fr.madayp.com/img/mg/g/1429174672-55-pharmacie-ocean-indien.jpg",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "longitude":"47.522416220844356","latitude":"-18.90530173538965","parking":"000",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173"}
      ]
      this.setState({
        items:donnee, 
        isLoading:false
      })
    }
  }
  sendSearch(condition){
    if(condition){
      const extractUrl = this.props.route.params.routeName == 'Pharmacie'?'pharmacie':'medcin'
      this.setState({
        isLoading:true
      })
      axios.post(http + '/' + extractUrl + '/search',{
        critere:this.state.critere
      })
      .then((res)=>{
        if(res.data){
          this.setState({
            items:res.data,
            isLoading:false
          })
        }
      })
      .catch((error)=>{
        this.setState({
          isLoading:false
        })
        console.log(error)
      })
    }
  }
  render() {
    
    return (
        <SafeAreaView style={styles.main_container}>
          <View style={styles.main_barSearch}>
            <View style={styles.container_bar}>
              <TextInput
                style={styles.TextInput}
                value={this.state.critere}
                onChangeText={(text)=>this.getCritere(text)}
                onSubmitEditing={()=>this.sendSearch(this.state.critere)}
                value={this.state.critere}
                placeholder={langue[this.props.langue].recherche}
                right={<TextInput.Icon name="search-web" onPress={()=>this.sendSearch(this.state.critere)} color="#888" style={styles.Icon} size={35}/>}
              />
            </View>
          </View>
          <View style={styles.main_list}>
          {
            this.state.isLoading ? <DisplayLoading isLoading={this.state.isLoading}/> : <FlatList
              style={{flex:1}}
              data={this.state.items}
              keyExtractor={(item) =>{if(item){return item.id.toString()}} }
              renderItem={({item}) => this.props.route.params.routeName == 'Pharmacie'?<ItemPhar pharmacie={item} navigation={this.props.navigation}/> : <ItemMed medecin={item} navigation={this.props.navigation}/>}
            />
          }
            
          </View>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor:'whitesmoke'
  },
  main_list:{
    marginTop:10,
    flex:1
  },
  container_bar:{

  },
  TextInput:{
    height: 25,
    backgroundColor:'white',
    borderColor: 'white',
    borderRadius:3,
    marginTop: 10,
    borderWidth: 1,
    borderColor:'gray',
    padding: 10,
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:3,
    elevation: 4
  },
  Icon:{
    paddingTop:22
  },

  
})
const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default  connect(mapStateToProps)(Search)
