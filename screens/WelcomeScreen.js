import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { StoreContext } from '../store';
import * as types from '../store/actions';


function WelcomeScreen() {
    const {state, dispatch} = useContext(StoreContext)

    const handleGetUrl = (data) =>{
      let linkUrl;
      if (state.isFirstLoading){
        linkUrl = data.link
      } else {
        linkUrl = data.home
      }
      dispatch({
        type: types.GET_LINK,
        paiload: linkUrl
      });
      dispatch({
            type: types.CLOSE_WELCOME,
          }
          )
     
    }

    useEffect(() => {
      fetch('https://efs5i1ube5.execute-api.eu-central-1.amazonaws.com/prod')
        .then((response) => response.json())
        .then((json) => handleGetUrl(json))
        // .catch(() => ('error'))
    }, []);

    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{state.link}</Text>
      </View>
    );
}

export {
    WelcomeScreen
}