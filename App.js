import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppForReactNative from './components/react-native/App-for-react-native';
import { MyNavigation } from './navigation/navigation';
import { MyNavigation2 } from './navigation/navigation2';
// import AppForReact from './components/react/App-for-react';

export default function App() {
  return (
    // <AppForReact />
    // <AppForReactNative />
    <NavigationContainer>
      {/* <MyNavigation /> */}

      <MyNavigation2 />
    </NavigationContainer>
  );
}

