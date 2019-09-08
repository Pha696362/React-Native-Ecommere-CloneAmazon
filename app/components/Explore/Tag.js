//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Tag extends Component {
    render() {
        return (
            <View
            style={{
              minHeight: 20,
              minWidth: 40,
              padding: 5,
              backgroundColor: "white",
              borderColor: "#dddddd",
              borderWidth: 0.2,
              borderRadius: 2,
              marginRight:5
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 10 }}>{this.props.name}</Text>
          </View>
          
     
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Tag;
