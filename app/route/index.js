import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  
  
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Explore from "../screen/Explore";
import Saved from "../screen/Save";
import Trips from "../screen/Trips";
import Inbox from "../screen/Inbox";
import Profile from "../screen/Profile";

const app = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "SAVE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-empty" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "TRIPS",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" color={tintColor} size={24} />
          //  <Image source = {require('../assets/airbnb.png')} style={{height:24,width:24, tintColor:tintColor}}/>
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "INBOX",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
            activeTintColor: "red",
            inactiveTintColor: "gray",
            style:{
                backgroundColor:'white',
                borderTopWidth:0,
                shadowOffset:{ width:5, height:3},
                shadowColor:'black',
                shadowOpacity:0.5,
                elevation:5
            }
          }
  }
  
);

export default createAppContainer (app)

// {
//   defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === "Explore") {
//         iconName = `ios-search-outline${focused ? "" : ""}`;
//       } else if (routeName === "Saved") {
//         iconName = `ios-settings${focused ? "" : ""}`;
//       } else if (routeName == "Trips") {
//         iconName = `ios-settings${focused ? "" : ""}`;
//       }
//        else if (routeName == "Inbox") {
//         iconName = `ios-chatboxes${focused ? "" : ""}`;
//       }

//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       return (
//         <Icon
//           name={iconName}
//           size={horizontal ? 20 : 25}
//           color={tintColor}
//         />
//       );
//     }
//   }),
//   tabBarOptions: {
//     activeTintColor: "tomato",
//     inactiveTintColor: "gray"
//   }
