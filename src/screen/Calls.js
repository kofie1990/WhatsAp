import { StyleSheet, Text, View , TouchableOpacity, FlatList, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Fontisto, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons'
import DATA from '../data/chatData'

const Calls = () => {
  const [callData, setCallData] = useState(DATA)

  useEffect(() => {
    setCallData(DATA)
  }, [])
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
            <Fontisto name= 'link' size={22} color='white' />
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.callSubtext}>Share a link for your Whatsapp call</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.callButton}
        onPress={() => ('#')}
      >
        <MaterialIcons name='add-call' size={22} color='white'/>
      </TouchableOpacity>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  callContainer: {
    flexDirection:'row',
    alignItems:'center',
    padding: 16,
  },
  linkContainer:{
    width:50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#128c7e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  callLink: {
   fontSize: 16,
   fontWeight: '600'
  },
  callSubtext: {
    fontSize:14,
    color: 'grey'
  },
  callButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#0e806a',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})