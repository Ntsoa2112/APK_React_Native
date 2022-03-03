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
      const extractUrl = this.props.route.params.routeName == 'Pharmacie'?'pharmacie':'medcin'
      console.log(extractUrl)
      axios.get(http + '/' + extractUrl + '/getList')
      .then((res)=>{
        if(res.data){
          this.setState({
            items:res.data, 
            isLoading:false
          })
        }
      })
      .catch((error)=>console.log(error))
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
  location:{
    position:'absolute',
    zIndex:111111,
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#058B12',
    top:windowHeight/1.5,
    left:windowWidth/1.3,
    textAlign:'center',
    padding:10,
    paddingLeft:15,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius:3,
    elevation: 9
  }
  
})
const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default  connect(mapStateToProps)(Search)
