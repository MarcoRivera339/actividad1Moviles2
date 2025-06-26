import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavegadorBotton from './navigations/BottonNavigator';
import NavegadorPrincipal from './navigations/MainNavigator';

export default function App() {
  return (
    <NavegadorPrincipal/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
