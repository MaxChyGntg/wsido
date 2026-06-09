import { Text, View, Pressable } from "react-native";
import '../../global.css'
import { router } from "expo-router";

export default function Index() {
  return (
   <View className="flex-1 justify-between items-center bg-bg flex-col">
    <Text className="text-light mt-96 text-4xl font-semibold">What Should I Do?</Text>
    <View className="flex-1 justify-center items-center">
      <Pressable className="bg-light p-5 w-57 rounded-3xl mb-1" onPress={() => router.push('/pages/login')}>
      <Text className="text-sectext text-center text-2xl font-semibold">Login</Text>
    </Pressable>
    <Text className="text-light">
      Doesnt Have Account? 
      <Text className="underline text-blue-600" onPress={() => router.push('/pages/signup')}>
        SignUp
      </Text>
    </Text>
    </View>
   </View>
  );
}