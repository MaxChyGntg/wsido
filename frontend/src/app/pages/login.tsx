import { Text, View, Pressable, TextInput } from "react-native";
import '../../../global.css'
import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function Login() {
  const [Change, setChange] = useState(false)
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")

const handleLogin = () => {
    if (!Email || !Pass){
    setChange(true)
    return
    }
  else{
    setChange(false)
    return
  }
}

  return (
    <View className="flex-1 bg-bg px-6 justify-center">
      <View className="rounded-[32px] bg-sectext/95 border border-white/10 p-8 shadow-lg shadow-black/20">
        <Text className="text-light text-4xl font-bold mb-2">Welcome back</Text>
        <Text className="text-text text-base mb-8">Sign in to continue with your account.</Text>

        <View className="space-y-4">
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            placeholderTextColor="#778DA9"
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          <TextInput
            placeholder="Password"
            onChangeText={setPass}
            placeholderTextColor="#778DA9"
            secureTextEntry
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          {Change &&(
          <View className="outline-2 outline-red-600 w-full p-3  justify-center rounded-[5px] items-center mt-2 bg-red-400" >
            <Text className="text-center text-bg font-bold">Sign In Error: Please Fill All The Box</Text>
          </View>
          )}
        </View>
        </View>

        <Pressable className="mt-6 rounded-2xl bg-light py-4 items-center" onPress={handleLogin}>
          <Text className="text-bg font-semibold">Log in</Text>
        </Pressable>

        <View className="mt-6 flex-row justify-center gap-1">
          <Text className="text-text">New here?</Text>
          <Pressable onPress={() => router.push('/pages/signup')}>
            <Text className="text-light font-semibold">Create account</Text>
          </Pressable>
        </View>
      </View>
  )
}