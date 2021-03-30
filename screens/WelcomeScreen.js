import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { StoreContext } from '../store';
import * as types from '../store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';


function WelcomeScreen() {
    const {state, dispatch} = useContext(StoreContext)
    
   
    const handleSetNewUrl = async(value) => {
        try {
          const newUrl = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Link', newUrl)
        } catch (e) {
          alert(e)
        }
    }
    const getData = async () => {
      try {
        return homeLink = await  AsyncStorage.getItem('@storage_Link')
      } catch(e) {
        return e
      }
    }
    const handleGetUrl = (data) =>{
    let urlLink;
      let url = getData();
      if (url) {
        urlLink = data.home
      } else {
        urlLink = data.link
      }
      
      dispatch({
        type: types.GET_LINK,
        paiload: urlLink
      });

      return urlLink;

    }

    const handleCloseScreen = () => {
      dispatch({
        type: types.CLOSE_WELCOME,
        }
      )
    }

    useEffect(() => {
      fetch('https://efs5i1ube5.execute-api.eu-central-1.amazonaws.com/prod')
        .then((response) => response.json())
        .then((json) => handleGetUrl(json))
        .then((value)=> handleSetNewUrl(value))
        .then(() => handleCloseScreen())
        
    }, []);
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading ...</Text>
      </View>
    );
}

export {
    WelcomeScreen
}