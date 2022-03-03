import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity , ScrollView} from 'react-native'
import { connect } from 'react-redux'
import DropDownItem from 'react-native-drop-down-item';
import langue from '../service/MultiLangue';

class Setting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
  componentDidMount(){
    console.log(this.props)
  }
  changeLangue =(lang)=>{
    const langue ={
      langue:lang
    }
    const action = { type: "CHANGE_LANGUE", value:langue}
    this.props.dispatch(action)
  }
  changeDark =(color1,color2)=>{
    const color ={
      bgColor: color1,
      textColor: color2,
    }
    const action = { type: "CHANGE_DARK", value:color}
    this.props.dispatch(action)
  }


  render() {
    const lang = this.props.langue
    let  contents =[
      {
        title: langue[lang].tomady,
        body: langue[lang].definition,
        cle:1
      },
      {
        title: langue[lang].langue,
        body: 'Yes. You can have more items.',
        cle:2
      },
      {
        title: langue[lang].condition,
        cle:1,
        body: langue[lang].condition_test
      },
    ]
    return (
        <SafeAreaView style={styles.main_container}>
          <ScrollView style={{ alignSelf: 'stretch' }}>
              {
              contents
                  ? contents.map((param, i) => {
                    if(param.cle ==1){
                      return (
                        <DropDownItem
                          key={i}
                          style={styles.dropDownItem}
                          contentVisible={false}
                          header={
                              <View>
                              <Text style={{
                                  fontSize: 16,
                                  color: 'blue',
                                  margin:30,
                                 
                              }}>{param.title}</Text>
                              </View>
                          }
                          >
                          <Text style={[
                              styles.txt,
                              {
                              fontSize: 14,
                              marginTop:-10
                              }
                          ]}>
                              {param.body}
                          </Text>
                          </DropDownItem>
                      );
                    }else{
                      return (
                        <DropDownItem
                          key={i}
                          style={styles.dropDownItem}
                          contentVisible={false}
                          header={
                              <View style={{marginTop:10}}>
                              <Text style={{
                                  fontSize: 16,
                                  margin:30,
                                  color: 'blue',
                              }}>{param.title}</Text>
                              </View>
                          }
                          >
                          <View style={{flexDirection:'row'}}>
                              <TouchableOpacity style={styles.buttonHead} onPress={() => this.changeLangue('mg')}>
                                <Text style={styles.textnHead}>
                                      Malagasy
                                </Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.buttonHead} onPress={() => this.changeLangue('fr')}>
                                <Text style={styles.textnHead}>
                                      Francais
                                </Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.buttonHead} onPress={() => this.changeLangue('en')}>
                                <Text style={styles.textnHead}>
                                      Anglais
                                </Text>
                              </TouchableOpacity>
                          </View>
                          </DropDownItem>
                      );
                    }
                  
                  })
                  : null
              }
              <View style={{ height: 96 }}/>
          </ScrollView>
      </SafeAreaView>


    
      
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection:'row',
    paddingTop:100
  },
  buttonHead:{
    width:80,
    height:40,
    marginLeft:10,
    borderRadius:10,
    backgroundColor:"blue"
  },
  textnHead:{
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
    marginTop:10
  },
  dropDownItem:{
    
    borderWidth:1,
    borderRadius:10,
    marginBottom:5,
    
    borderColor:'#9A9A9A',
    marginLeft:10,
    marginRight:10,
    paddingLeft:10
  },
  txt:{
    margin:0
  }
})


const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue,
  }
}
export default connect(mapStateToProps)(Setting)