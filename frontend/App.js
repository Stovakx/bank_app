
import { useFonts } from 'expo-font';
import Navigation from './navigation/navigation';
import { Text } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    "SpaceGroteskBold" : require('./assets/fonts/SpaceGrotesk-Bold.ttf'),
    "SpaceGrotesk" : require('./assets/fonts/SpaceGrotesk-Regular.ttf'),
    "SpaceGroteskLight":require('./assets/fonts/SpaceGrotesk-Light.ttf'),
    "SpaceGroteskMedium": require('./assets/fonts/SpaceGrotesk-Medium.ttf'),
    "SpaceGroteskSemiBold": require('./assets/fonts/SpaceGrotesk-SemiBold.ttf'),
  })
  if(!fontsLoaded){
    return <Text>Loading assets...</Text>
  }
  
  return (
    <Navigation/>
  );
}


