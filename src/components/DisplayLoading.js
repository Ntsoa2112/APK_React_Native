import React from 'react'
import { View, ActivityIndicator,StyleSheet,Text } from 'react-native'
import { connect } from 'react-redux'

class DisplayLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    var isLoading = this.props.isLoading
      if (isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
  }
}
const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default connect(mapStateToProps)(DisplayLoading)
