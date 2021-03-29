import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useContext } from 'react/cjs/react.production.min';
import { StoreContext } from '../store';

function WelcomScreen() {
    const [isLoading, setLoading] = useState(false);
    const {state} = useContext(StoreContext)
    const [data, setData] = useState([]);
  
    function handleFirstLaoding(data){
      if (state.firstLoading){
        setData(data.link);
      }else{
        setData(data.home)
      }
      setLoading(true)
    }

    useEffect(() => {
      fetch('https://efs5i1ube5.execute-api.eu-central-1.amazonaws.com/prod')
        .then((response) => response.json())
        .then((json) => handleFirstLaoding(json))
        .catch(() => setData('error'))
        .finally(() => setLoading(true));
    }, []);
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{data}</Text>
      </View>
    );
}

export {
    WelcomScreen
}