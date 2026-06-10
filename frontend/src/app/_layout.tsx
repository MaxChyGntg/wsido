import { Stack } from "expo-router/stack";
import { SplashScreen } from "expo-router";
import '../../global.css'
import { useColorScheme } from "react-native";
export default function RootLayout() {
  return (
    <>
    <Stack>
    <Stack.Screen 
    name="index"
    options={{animation: 'slide_from_right', headerShown: false}}
    />
        <Stack.Screen 
    name="pages/login"
    options={{animation: 'slide_from_right', headerShown: false}}
    />
        <Stack.Screen 
    name="pages/signup"
    options={{animation: 'slide_from_right', headerShown: false, sheetResizeAnimationEnabled: true}}
    />

    <Stack.Screen 
    name="Terms"
    options={{animation: 'slide_from_bottom', headerStyle: {backgroundColor: '#415a77'}, sheetResizeAnimationEnabled: true}}
    />

    </Stack>
  </>
  )
}
