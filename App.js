import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Rooftops from './src/components/Rooftops'
// import Analytics from './src/components/Analytics'; Will include this back in when google analytics updates

import Navi from './src/components/Navi';
import Header from './src/components/Header';


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {gotoRoofstops: false, removeSearch: true}
  }

gotoRoofstops = () => {
  this.setState({gotoRoofstops: true, removeSearch: false})

}

  render() {
    return (

          <View style={styles.container}>
            <ScrollView>
              <Header />
              {
                this.state.gotoRoofstops ? <Rooftops /> : null
              }

              {
                this.state.removeSearch ? <LandingSearch gotoRoofstops = {this.gotoRoofstops}/> :  null
              }


            </ScrollView>
          </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
