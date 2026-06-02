import { Drawer } from "expo-router/drawer";
import { SplashScreen } from "expo-router";
import '../../global.css'
export default function RootLayout() {
  return (
    <>
  <Drawer screenOptions={{
      drawerStyle:{
        backgroundColor: '#fef3c7',
      },
      headerStyle:{
        backgroundColor: '#fef3c7',
      }
    }}>
        <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerItemStyle: {display: 'none'}
        }}
      />
        <Drawer.Screen
        name="component" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Python',
          title: 'Python',
        }}
      />
  </Drawer>
  </>
  )
}
