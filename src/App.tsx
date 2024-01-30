import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './Router';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './store';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
