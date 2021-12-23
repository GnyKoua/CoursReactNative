import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MyNavigation2 } from '../../navigation/navigation2';


export default function AppForReactNative() {
  return (
    <NavigationContainer>
      <MyNavigation2 />
    </NavigationContainer>

    // <View style={{
    //   flex: 1,
    //   flexDirection: "row",
    //   justifyContent: "center"
    // }}>
    //   <View style={{
    //     flex: 0.8
    //   }}>
    //     <Damier />
    //   </View>
    // </View>
  );
}

