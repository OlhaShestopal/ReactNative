import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { StoreContext } from '../store';
import{WebViewExample} from '../components/webview'

function MainScreen() {
  const {state} = useContext(StoreContext)
  return (
    <WebViewExample/>
  );
}

export{
    MainScreen
}