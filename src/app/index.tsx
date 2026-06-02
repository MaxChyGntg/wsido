import { Text, View, Pressable } from "react-native";
import '../../global.css'
import { router } from "expo-router";
import { supabase } from "../utils/supabase";

export default function Index() {
  return (
   <View className="flex-1 justify-center items-center">
    <Text className="font-bold text-3xl">Hello Bois</Text>
   </View>
  );
}