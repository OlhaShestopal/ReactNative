import React from 'react'
import { StoreContext} from './store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {WelcomScreen} from './screens/WelcomeScreen'
import {MainScreen} from './screens/MainScreen'
import { useReducer } from 'react/cjs/react.production.min'
import { initialState } from './store/state'

const Stack = createStackNavigator();

function App() {
  
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcom" component={WelcomScreen} />
          <Stack.Screen name="Main" component={MainScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
    
  
    
  );
}

export default App;





