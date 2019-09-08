//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
class Category extends Component {
    render() {
        return (
            <View
                    style={{
                      height: 130,
                      width: 130,
                      marginLeft: 20,
                      borderWidth: 0.5,
                      borderColor: "#dddddd"
                    }}
                  >
                    <View style={{ flex: 2 }}>
                      <Image
                        source={this.props.imageUri}
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: "cover"
                        }}
                      />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                      <Text>{this.props.name}</Text>
                    </View>
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
export default Category;
