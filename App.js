import React from 'react';
import { Provider } from 'react-redux';
import AppForReactNative from './components/react-native/App-for-react-native';
import configureStore from './redux/configureStore';
// import AppForReact from './components/react/App-for-react';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      {/* <AppForReact /> */}
      <AppForReactNative />
    </Provider>
  );
}

