import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, LogBox } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from "./firebase";
import { useAssets } from 'expo-asset';
import { onAuthStateChanged } from 'firebase/auth';
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/home';
import SignIn from './src/screen/signIn';
import Contacts from './src/screen/Contacts';
import Profile from './src/screen/profile';
import textScreen from './src/screen/textScreen';
import Photo from './src/screen/Photo';
import ChatHeader from './components/ChatHeader';

const Stack = createStackNavigator();

export default function App() {

  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setCurrUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
    {!currUser ? (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signIn" component={SignIn} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#075e54',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
        }}
      >
        {!currUser.displayName && (
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={Home}
        />

        <Stack.Screen 
          name="photo"
          component={Photo} 
        />

        <Stack.Screen
          name="contacts"
          options={{ title: "Select Contacts" }}
          component={Contacts}
        />
       <Stack.Screen 
          name="chats" component={textScreen} 
          options={{headerTitle: (props) => <ChatHeader {...props} />}}/>
      </Stack.Navigator>
    )}
    </NavigationContainer>
    // <NavigationContainer>
    //   <View style={styles.container}>
    //    <StatusBar backgroundColor='#0e806a' barStyle='light-content' />
    //     <Header />

    //     <View style={{ flex:1, backgroundColor:'white'}}>
    //       <Navigation />
    //     </View>          
    //   </View>
   // </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});