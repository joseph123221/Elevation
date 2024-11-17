
import { View, Text } from 'react-native'
import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import {useFonts} from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
     "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
     "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf")
     
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <Stack>
<Stack.Screen name="index"/>
    </Stack>
  )
}

export default MainLayout

const renderBookItem = ({ item }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity style={styles.bookItem} onPress={() => handlePress(item)}>
        <Text style={styles.bookTitle}>{item.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
