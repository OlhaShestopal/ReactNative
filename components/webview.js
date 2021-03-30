import React, { Component, useContext } from 'react'
import { WebView } from 'react-native-webview';
import { StoreContext } from '../store'


const WebViewExample = () => {
    const  {state} = useContext(StoreContext)
   return (
         <WebView
         source = {{ uri: `${state.link}` }}
         />
   )
}

export {
    WebViewExample
} 