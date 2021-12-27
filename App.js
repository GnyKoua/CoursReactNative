import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppForReactNative from './components/react-native/App-for-react-native';
import { persistor, store } from './redux/configureStore';
// import AppForReact from './components/react/App-for-react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AppForReact /> */}
        <AppForReactNative />
      </PersistGate>
    </Provider>
  );
}

