import React from 'react'
import { View, TouchableOpacity,StyleSheet,Text,ScrollView,Modal,Pressable,Platform,Image,Dimensions,TextInput,Alert,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'
import DisplayLoading from './DisplayLoading';
import axios from 'axios'
import http from '../service/http'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const star =[1,2,3,4,5]
    
const color = Platform.OS === 'ios' ? '#007AFF' : '#2196F3'

class DetailPharmacie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading:true,
        items:[],
        commentaire:'',
        commits:[],
        Modalsignaler:false,
        Modalnoter:false,
        Modalchat:false,
        index:0
    }
  }
  
  componentDidMount(){
   this.getDataFromApi();
  }

  getDataFromApi =()=>{
    let donnee1 = [{"id":1,"nom":" Pharmacie Rakotoarivony","lieu":"Analakely",
    "image":"https://rci.fm/sites/default/files/2021-04/pharmacie.jpg","date_created":"2021-11-09T08:03:11.000Z",
    "date_updated":"2021-11-11T18:15:12.000Z","longitude":"47.525228882622166","latitude":"-18.90633554528606",
    "parking":"001","bus":"192,145,178,156","arret":"Galaxy","notation":4,"contact":"0340921107"},
    [{"id":1,"id_pharmacie":1,"id_user":1,"commentaire":"Un très bon qualité de service avec des prix totalement raisonnable à mon goût.","date_created":"2021-11-11T14:43:52.000Z",
    "nom":"RAJAONARIVONY ","prenom":"Rivo Lalaina",
    "image":"https://www.missnumerique.com/blog/wp-content/uploads/photo-de-profil-pour-les-reseaux-sociaux-joseph-gonzalez.jpg"},
    {"id":59,"id_pharmacie":1,"id_user":2,"commentaire":"J'acheter la même chose dans ce pharmacie et l'autre juste à côté. Mais il propose la même produit en 10% moins chères.","date_created":"2021-11-11T14:49:30.000Z","nom":"MANAMBINTSOA","prenom":"Mihaingoherilanto","image":"https://www.unicef.org/madagascar/sites/unicef.org.madagascar/files/2020-06/UNICEF%20Madagascar%20Supporter%202.jpeg"},{"id":56,"id_pharmacie":1,"id_user":3,
    "commentaire":"Nisy fotoana zah nividy Sirop fa 15 min d'attente.Ela loatra le service",
    "date_created":"2021-11-11T14:44:48.000Z","nom":"TAFITASOA","prenom":"Fabrice",
    "image":"https://i2.wp.com/www.agencemalagasydepresse.com/wp-content/uploads/2020/02/stephane.jpg"}]];
    let donnee2 = [{"id":2,"nom":"Pharmacie de l'Ocean Indien","lieu":"Analakely",
    "image":"https://fr.madayp.com/img/mg/g/1429174672-55-pharmacie-ocean-indien.jpg",
    "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
    "longitude":"47.522416220844356","latitude":"-18.90530173538965","parking":"000",
    "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173"},
    [{"id":61,"id_pharmacie":2,"id_user":1,"commentaire":"Milay be indray Io pharmacie io sady tsra service",
    "date_created":"2021-11-11T15:44:18.000Z","nom":"RAJAONARIVONY ","prenom":"Rivo Lalaina",
    "image":"https://www.missnumerique.com/blog/wp-content/uploads/photo-de-profil-pour-les-reseaux-sociaux-joseph-gonzalez.jpg"}]]
    console.log(this.props.route.params.id)
      if(this.props.route.params.id){
        let id = this.props.route.params.id
        if(id ==1 ){
          this.setState({
            items:donnee1,
            isLoading:false,
            commits:donnee1[1]
        })
        }
        else if (id ==2){
          this.setState({
            items:donnee2,
            isLoading:false,
            commits:donnee2[1]
        })
        }
      }
    
  }
  setCommit =(commentaire)=>{
    this.setState({
      commentaire:commentaire
    })
  }
  sendCommentaire =()=>{
    if(this.state.commentaire){
      
      axios.post(http +'/pharmacie/commenter',{
        commentaire: this.state.commentaire,
        id_user:4,
        id:this.state.items[0].id
      })
      .then((res)=>{
        this.setState({
          commits: this.state.commits.concat(res.data),
          commentaire:''
        })
        this.scrollView.scrollToEnd({ animated: true });
      })
      .catch((error)=>{
        console.log(error)
      })
    }else{
      Alert.alert("Veuillez connecter s'il vous plait!!")
    }
    
  }
  setModalsignalerVisible = (Modalsignaler)=>{
    this.setState({ Modalsignaler: Modalsignaler });
  }
  setModalnoterVisible = (Modalnoter)=>{
    this.setState({ Modalnoter: Modalnoter });
  }
  setModalchatVisible = (Modalchat)=>{
    this.setState({ Modalchat: Modalchat });
  }
  setNote =(item)=>{
    this.setState({
      index:item
    })
  }
  render() {
    let star =[1,2,3,4,5]
    return (
        <View style={styles.container}>
          {
             this.state.isLoading ? <DisplayLoading isLoading={this.state.isLoading}/> : (
              <View style={styles.scrollview_container}>
                  <TouchableOpacity  style={styles.location} >
                    <AntDesign name="wechat" color="white" size={26} />
                  </TouchableOpacity>
                  <ScrollView style={styles.scrollview_container} ref={(scrollView) => { this.scrollView = scrollView }}>
                    <Image
                      style={styles.image}
                      source={{uri:this.state.items[0].image}}
                    />
                    <View style={styles.bgHead}>
                      <TouchableOpacity style={styles.buttonHead} onPress={() => this.setModalnoterVisible(true)}>
                          <Text style={styles.textnHead}>
                            {langue[this.props.langue].noter}
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonHead} onPress={() => this.setModalsignalerVisible(true)}>
                          <Text style={styles.textnHead}>
                            {langue[this.props.langue].signaler}
                          </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.detail}>
                      <View style={styles.detail_icon}>
                        <Image
                          style={styles.image_logo}
                          source={require("../../assets/image.png")}
                        />
                        <View style={styles.description_container_2}>
                          {
                            star.map((item)=><Ionicons name={item <= this.state.items[0].notation ? 'star-sharp' :'star-outline'} key={item} color="gold" size={16} />)
                          }
                        </View>
                      </View>
                      <View style={styles.detail_all}>
                          <View style={[styles.detail_adresse,styles.union]}>
                            <MaterialCommunityIcons name="map-marker" color={color} size={25} />
                            <Text style={styles.title}>
                                Antananarivo-{ this.state.items[0].lieu}
                            </Text>
                          </View>
                          <View style={[styles.detail_bus,styles.union]}>
                              <MaterialCommunityIcons name="bus-marker" color={color} size={25} />
                              <Text style={styles.title_2}>
                                { this.state.items[0].bus}
                              </Text>
                          </View>
                          <View style={[styles.arret,styles.union]}>
                              <MaterialCommunityIcons name="bus-stop" color={color} size={25} />
                              <Text style={styles.title_2}>
                              { this.state.items[0].arret}
                              </Text>
                          </View>
                          {
                            this.state.items[0].parking?(
                              <View style={[styles.parking,styles.union]}>
                                  <MaterialCommunityIcons name="car-brake-parking" color={color} size={25} />
                                  <Text style={styles.title_2}>
                                    {langue[this.props.langue].parking}
                                  </Text>
                              </View>
                              ):null
                            }
                          
                      </View>
                    </View>

                    <View style={styles.link}>
                      <TouchableOpacity style={[styles.union_2]} onPress={()=>this.props.navigation.navigate('Localisation',{
                            routeName:'pharmacie',
                            postion:{
                              status:2,
                              id:this.state.items[0].id
                            }
                          }
                        )}>
                          <Text style={styles.title_3}>
                            {langue[this.props.langue].position}
                          </Text>
                          <MaterialCommunityIcons name="arrow-right-bold" color="#424242" size={25} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.union_2}>
                          <Text style={styles.title_3}>
                            {langue[this.props.langue].contacter}
                          </Text>
                          <MaterialIcons name="call" color="#424242" size={25} />
                      </TouchableOpacity>
                    </View>

                    {
                      this.state.commits ? (
                        <View style={styles.commentaire}>
                        <View style={styles.union_3}>
                            <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>
                              {langue[this.props.langue].commentaire}
                            </Text>
                        </View>
                      </View>
                      ):null
                    }
                   
                  
                  </ScrollView>

                  <Modal
                      animationType="fade"
                      transparent={true}
                      visible={this.state.Modalnoter}
                      onRequestClose={() => {
                        this.setModalnoterVisible(!this.state.Modalnoter);
                      }}
                    >
                      
                      <View style={{backgroundColor: 'white',
                              shadowColor: '#470000',
                              shadowOffset: {width: 5, height: 5},
                              shadowOpacity: 0.5,
                              shadowRadius:2,
                              elevation: 10,
                              padding: 10,
                              justifyContent: 'center',
                              alignItems: 'center',
                              width:300,
                              marginLeft:35,
                              marginTop:110,
                              height:250,
                              borderRadius: 4,
                              borderColor: 'rgba(0, 0, 0, 0.1)',}}>
                        <View style={styles.modalView}>

                          <Text style={styles.modalText}>Noter cette pharmacie </Text>
                          <Text style = {{fontSize:13,marginTop:10,marginBottom:10,textAlign:'center',}}>
                          Merci de noter cette pharmacie d'après votre appréciation.</Text>
                          <View style={{flexDirection:"row", marginBottom:40}}>
                          {
                              star.map((item)=><Ionicons  onPress={()=>this.setNote(item)} name={item <= this.state.index ? 'star-sharp' :'star-outline'} key={item} color="gold" size={40} />)
                    
                          }
                        </View>
                          <Pressable
                            style={[styles.button, styles.buttonHead_2]}
                            onPress={() => this.setModalnoterVisible(!this.state.Modalnoter)}
                          >
                            <Text style={styles.textnHead_2}>Noter</Text>
                          </Pressable>
                        </View>
                      </View>
                      
                  </Modal>

                  <Modal
                      animationType="fade"
                      transparent={true}
                      visible={this.state.Modalsignaler}
                      onRequestClose={() => {
                        this.setModalsignalerVisible(!this.state.Modalsignaler);
                      }}
                    >
                    {
                        /*eto */
                      }
                      <View style={{backgroundColor: 'white',
                              shadowColor: '#470000',
                              shadowOffset: {width: 5, height: 5},
                              shadowOpacity: 0.5,
                              shadowRadius:2,
                              elevation: 10,
                              padding: 10,
                              justifyContent: 'center',
                              alignItems: 'center',
                              width:300,
                              marginLeft:35,
                              marginTop:80,
                              height:450,
                              borderRadius: 4,
                              borderColor: 'rgba(0, 0, 0, 0.1)',}}>
                        <View style={styles.modalView}>

                          <Text style={styles.modalText}>Signaler cette pharmacie</Text>
                          <TextInput
                            style={styles.input_text, {height: 40, width:250,
                              margin: 12,
                              borderWidth: 1,
                              borderColor: "gray",
                              padding: 10,}}
                            placeholder="Nom"
                          />
                          <TextInput
                            style={styles.input, {height: 40, width:250,
                              margin: 12,
                              borderWidth: 1,
                              borderColor: "gray",
                              padding: 10,}}
                            placeholder="Prènom"
                          />
                          <TextInput
                            style={styles.input, {height: 40, width:250,
                              margin: 12,
                              borderWidth: 1,
                              borderColor: "gray",
                              padding: 10,}}
                            placeholder="Téléphone"
                          />
                          <TextInput
                            style={styles.input, {height: 60, width:250,
                              margin: 12,
                              borderWidth: 1,
                              borderColor: "gray",
                              padding: 10,}}
                            placeholder="Déscription"
                          />
                          <View style={styles.body}>
                            <View style={styles.sectionContainer, {height: 40, width:100,
                              margin: 12,
                              borderWidth: 1,
                              borderColor: "gray",
                              padding: 10,}}>
                              <Text style={styles.sectionTitle}>Un fichier</Text>
                            </View>
                          </View>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalsignalerVisible(!this.state.Modalsignaler)}
                          >
                            <Text style={styles.textnHead_2}>Signaler</Text>
                          </Pressable>

                        </View>
                      </View>
                      {
                        /*eto */
                      }
                  </Modal>

 
                  <Modal
                      animationType="fade"
                      transparent={true}
                      visible={this.state.Modalchat}
                      onRequestClose={() => {
                        this.setModalchatVisible(!this.state.Modalchat);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Hello World!</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalchatVisible(!this.state.Modalchat)}
                          >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                          </Pressable>
                        </View>
                      </View>
                  </Modal>


                  <View style={styles.champ_commentaire}>
                        <TextInput
                            style={[styles.input]}
                            value={this.state.commentaire}
                            onChangeText={(text)=>this.setCommit(text)}
                            value={this.state.commentaire}
                            placeholder= {langue[this.props.langue].votre_commentaire}
                         />
                          <TouchableWithoutFeedback onPress={() => this.sendCommentaire()}>
                            <View style={styles.button}>
                                 <Ionicons  name="send" color='white' size={25}/>
                            </View>
                          </TouchableWithoutFeedback>
                  </View>
              </View>
              
             )
          }
        </View>
      )
  }
}
const styles = StyleSheet.create({
  input_text: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: "gray",
    padding: 10,
  },
  container: {
    flex:1
  },
  scrollview_container:{
    flex:1
  },
  image:{
    height:200
  },
  detail:{
    flex:2,
    flexDirection:'row',
    marginTop:20,
    paddingLeft:5,
    paddingBottom:10,
    marginBottom:5,
    marginLeft:4,
    marginRight:5,
    borderBottomWidth:1.5,
    borderBottomColor:'#D5DAD5'
  },
  detail_icon:{
    flex:1
  },
  detail_all:{
    flex:5,
    paddingLeft:40
  },
  link:{
    flex:2,
  },
  commentaire:{
    flex:2
  },
  champ_commentaire:{
    flexDirection:'row',
    shadowColor: '#470000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius:2,
    elevation: 6,
    borderRadius:2
  },
  location:{
    position:'absolute',
    zIndex:111111,
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#058B12',
    top:windowHeight/1.45,
    left:windowWidth/1.2,
    textAlign:'center',
    padding:12,
    paddingLeft:12,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius:3,
    elevation: 9
  },
  image_logo:{
    width:50,
    height:50,
    borderRadius:10,
    marginLeft:20,
    marginTop:17
  },
  union:{
    flexDirection:'row'
  },
  union_2:{
    flexDirection:'row',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:0.5,
    paddingBottom:10,
    borderBottomColor:'#D5DAD5'
  },
  union_3:{
    marginTop:15,
    paddingLeft:10,
    marginBottom:15
  },
  title:{
    marginLeft:5,
    fontWeight:'bold',
    color:'#058B12'
  },
  title_2:{
    color:'gray',
    marginTop:5,
    marginLeft:5
  },
  description_container_2: {
    flex:2,
    flexDirection:'row',
    paddingLeft:5,
    marginTop: 10,
  },
  title_3:{
    flex:3,
    color:'#424242',
    fontWeight:'bold'
  },
  input: {
    height: 50,
    flex:4,
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    padding: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: color,
    padding: 10
  },
  bgHead:{
    position:'absolute',
    top:0,
    left:0,      
    flexDirection:'row',
    width:windowWidth,
    height:200,
    backgroundColor:'rgba(0,0,0,0.2)',
    paddingTop:150,
    paddingLeft:windowWidth-190
  },
  buttonHead:{
    width:80,
    height:40,
    marginLeft:10,
    borderRadius:10,
    backgroundColor:color

  },
  buttonHead_2:{
    width:90,
    height:40,
    marginLeft:10,
    borderRadius:10,
    paddingBottom:5,
    backgroundColor:color

  },
  textnHead:{
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
    marginTop:10
  },
  textnHead_2:{
    textAlign:'center',
    color: 'white',
    fontSize:17,
    fontWeight:'bold',
    marginTop:0
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  textStyle: {
    backgroundColor: 'lightblue',
    padding: 8,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    fontSize: 22,
  },
  modalView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  modalText: {
    fontSize: 20,
    textAlign:'center',
    color: 'blue',
  }

})



const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue,
    user:state.connexion.user
  }
}
export default  connect(mapStateToProps)(DetailPharmacie)