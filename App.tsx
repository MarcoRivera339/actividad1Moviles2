import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WorkNavigator from './navigations/WorkNavigator';
import NavegadorPrincipal from './navigations/MainNavigator';

export default function App() {
  return (
    <WorkNavigator/>
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
