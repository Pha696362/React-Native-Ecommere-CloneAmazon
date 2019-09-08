//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import StarRating from 'react-native-star-rating';

// create a component
class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover"
            }}
            source={require('../../assets/home.jpg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 10, color: "#a63838" }}>
        {this.props.type}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            The Cozy Place
          </Text>
          <Text style={{ fontSize: 10 }}>{this.props.price}$</Text>
          <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={10}
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Home;
