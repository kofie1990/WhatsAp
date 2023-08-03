import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import STATUSDATA from '../data/statusData'
import { FontAwesome5 } from 'react-native-vector-icons'

const Status = () => {
  const [statusData, setStatusData] = useState(STATUSDATA)

  useEffect(() => {
    setStatusData(STATUSDATA)
  }, [])

  const comninedStatusData = [
    {'title' : 'Recent updates', data: statusData.filter(item => item.viewed === false)},
    {'title' : 'Viewed updates', data: statusData.filter(item => item.viewed === true)},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.myStatusContainer}>
        <View>
          <Image source={require('../../assets/favicon.png')} />
        </View>
        <View>
          <Text style={styles.myStatusHeading}>My Status</Text>
          <Text style={styles.myStatusSubtext}>Tap to add status update</Text>
        </View>
      </View> 
      <TouchableOpacity
      style={styles.writeButton}
      onPress={() => ('#')}
      >
        <FontAwesome5 name='pen' size={18} color='grey' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => ('#')}>
        <FontAwesome5 name='camera' size={20} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  myStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16
  },
  image : {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
  myStatusHeading: {
    fontSize: 16,
    fontWeight: '600'
  },
  myStatusSubtext: {
    fontSize: 14,
    color: 'grey'
  },
  writeButton: {
    position: 'absolute',
    bottom: 100,
    right: 28,
    backgroundColor: '#e8e8e8',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraButton: {
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
});