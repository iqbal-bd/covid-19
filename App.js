import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {colors} from "./src/theme/colors";
import {spacing} from "./src/theme/spacing";
import {useFonts} from 'expo-font';
import {typography} from './src/theme/typography';
import Text from './src/components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/screens/home';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require ('./assets/fonts/Antonio-Medium.ttf'),
    'League-Spartan-Regular' : require ('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'League-Spartan-Bold' : require ('./assets/fonts/LeagueSpartan-Bold.ttf'),
  });
  
  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
