import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'



import Header from './Header';
import Navigation from './Navigation';

const Tab = createMaterialTopTabNavigator()

export default function Home() {
  return(
    <View style={styles.container}> 
        <Header />
      <View style={{ flex:1, backgroundColor:'white'}}>
        <Navigation />
      </View>
    </View>
    
  )}
{/* <View style={styles.container}>    */}

     {/* <Header />

     <View style={{ flex:1, backgroundColor:'white'}}>  
       <Tab.Navigator 
      initialRouteName='Chat' */}

      //screenOptions={({ route }) => {
        //   return {
          //     tabBarLabel: () => {
            //       if (route.name === "photo") {
              //         return <Ionicons name="camera" size={20} color={'white'} />;
      //       } else {
        //         return (
          //           <Text style={{ color: 'white' }}>
          //             {route.name.toLocaleUpperCase()}
          //           </Text>
          //         );
      //       }
      //     },
      //     tabBarShowIcon: true,
      //     tabBarLabelStyle: {
        //       color: 'white',
        //       fontWeight: 'bold'
        //     },
        //     tabBarIndicatorStyle: {
          //       backgroundColor: 'white',
          //     },
          //     tabBarStyle: {
            //       backgroundColor: '#0e806a',
            //     },
            //   }
            // }}

const styles = StyleSheet.create({
    tabBarLabel: {
      display: 'none',
    },
    container: {
      flex: 1
    }
  })