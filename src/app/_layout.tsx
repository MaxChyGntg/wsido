import { Stack } from "expo-router/stack";
import { SplashScreen } from "expo-router";
import '../../global.css'
export default function RootLayout() {
  return (
    <>
    <Stack>
    <Stack.Screen 
    name="index"
    options={{animation: 'ios_from_right', headerShown: false}}
    />
        <Stack.Screen 
    name="pages/login"
    options={{animation: 'ios_from_right', headerShown: false}}
    />
        <Stack.Screen 
    name="pages/signup"
    options={{animation: 'ios_from_right', headerShown: false}}
    />
    </Stack>
  </>
  )
}
