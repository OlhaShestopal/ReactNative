import React, { useReducer } from "react";
import { Reducer } from "./store/reducer";
import {StoreContext} from './store/index';
import { initialState } from "./store/state";
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from './screens/WelcomeScreen';
import {MainScreen} from './screens/MainScreen';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <StoreContext.Provider value={{state,dispatch}}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading == true ?(
            <Stack.Screen name="Welcome" component= {WelcomeScreen} />
          ) :(
            <Stack.Screen name="Main" component= {MainScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  
  );
}