import React, { Component } from 'react';
import axios from 'axios';
import {View,Text} from 'react-native';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inDollars: '',
      inEuro: '',
      inPounds: '',
    };
  }

  componentDidMount() {
    axios.get(URL).then(response => response.data)
      .then((data) => {
        this.setState({
          inDollars: data.bpi.USD.rate,
          inEuro: data.bpi.EUR.rate,
          inPounds: data.bpi.GBP.rate,
        });
      });
  }

  render() {
    const { inDollars, inEuro, inPounds } = this.state;
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'black'}}>Price of 1 Bitcoin</Text>
        <Text>
          USD:
          {' '}
          {inDollars}
        </Text>
        <Text>
        EURO:
          {' '}
          {inEuro}

        </Text>
        <Text>
        GBP:
          {' '}
          {inPounds}
        </Text>
      </View>
    );
  }
}

export default App;
