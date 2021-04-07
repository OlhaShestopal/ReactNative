import React, { useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { StoreContext } from '../store';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
// import * as types from '../store/actions';


function WelcomeScreen() {
const {state, dispatch} = useContext(StoreContext)
const[localState, setLocalState] = useState({})

const setData = async(value) => {
  try {
    const newUrl = JSON.stringify(value)
    await AsyncStorage.setItem('@data', newUrl)
  } catch (e) {
    console.log(e)
  }
}

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      console.log(`OK get data:${value} `)
    } else{
      console.log('get null')
    }
  } catch(e) {
    console.log(e)
  }
}

// function handleGetFirsState (localState){
// dispatch({
//   type: types.GET_URL,
//   paiload: localState
// })

// }
 useEffect( () => {
    fetch('https://co98qyg3i6.execute-api.eu-central-1.amazonaws.com/real?app=com.blumine.himalaya&uuid=test&uid=test&a=4&o=1221&s3=devtest')
    .then((response) => response.json())
    .then((json) => setLocalState(json))
    .then(() => setData(localState))
    .then(() => console.log(localState))
    // .then (() => handleGetFirsState())
    .catch((e)=>console.log(e))
  
    
}, []);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          onPress={()=>setData(localState)}
          title= 'Set'/>
          <Button
          title = 'GET'
          onPress={() =>getData('@data')}
          />
          <Button 
          title = 'Fetch'
          onPress = {() => console.log(localState)}/>
      </View>
    );
}

export {
    WelcomeScreen
}