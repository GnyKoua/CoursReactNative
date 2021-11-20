import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MyNavigation } from './navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigation />
    </NavigationContainer>
  );
}

