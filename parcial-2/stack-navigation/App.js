import { View } from 'react-native';
import HomeView from './screens/HomeView';

import{
  createsStaticNavigator,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <HomeView/>
  ); 
}


