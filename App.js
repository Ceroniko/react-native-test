import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import picturesReducer from './reducers/picturesReducer';
import thunk from 'redux-thunk';

const store = createStore(picturesReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

import GalleryScreen from './component/GalleryScreen';
import FullSizePictureScreen from './component/FullSizePictureScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pictures"
            component={GalleryScreen}
          />
          <Stack.Screen
            name="Fullsize"
            component={FullSizePictureScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;