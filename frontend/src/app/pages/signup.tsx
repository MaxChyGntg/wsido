import { Text, View, Pressable, TextInput } from "react-native";
import '../../../global.css'
import { router } from "expo-router";
import { useState } from "react";
import 'axios'
import axios from "axios";
export default function SignUp() {
    const [Name, setName] = useState("")
    const [Pass, setPass] = useState("")
    const [Email, setEmail] = useState("")
    const [Age, setAge] = useState(0)
    const [Change, SetChange] = useState(false)
    const [reason, setReason] = useState("")
    const ErrorName = ["Please Fill All the Info", "Age Must be Number", "Password Minimal 6 Characther"]
    const handleSignUp = async () => {

      if (!Name || !Pass || !Email || !Age){
        SetChange(true)
        setReason(ErrorName[0])
        return
      }
      else if (isNaN(Age)){
        SetChange(true)
        setReason(ErrorName[1])
        return
      }
      else if (Pass.length < 6){
        SetChange(true)
        setReason(ErrorName[2])
        return
      }
      else if (Age > 100){
        SetChange(true)
        setReason("To Old To Use")  
      } 
      else if (Age < 1){
        SetChange(true)
        setReason("To Young To Use")
      }
      else{
        SetChange(false)
        router.push('./login')
        return
      }


    }
  return (
    <View className="flex-1 bg-bg px-6 justify-center">
      <View className="rounded-4xl bg-sectext/95 border border-white/10 p-8 shadow-lg shadow-black/20">
        <Text className="text-light text-4xl font-bold mb-2">Create account</Text>
        <Text className="text-text text-base mb-8">Start your journey on focusing with a simple signup</Text>

        <View className="space-y-4">
          <TextInput
            placeholder="Name"
            value={Name}
            onChangeText={setName}
            placeholderTextColor="#778DA9"
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          <TextInput
            placeholder="Email"
            value={Email}
            onChangeText={setEmail}
            placeholderTextColor="#778DA9"
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          <TextInput
            placeholder="Password"
            value={Pass}
            onChangeText={setPass}
            numberOfLines={20}
            placeholderTextColor="#778DA9"
            secureTextEntry
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
           <TextInput
            placeholder="Age"
            value={Age}
            onChangeText={setAge}
            placeholderTextColor="#778DA9"
            keyboardType="numeric"
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          {Change &&(
          <View className="outline-2 outline-red-600 w-full p-3  justify-center rounded-[5px] items-center mt-2 bg-red-400" >
            <Text className="text-center text-bg font-bold">Sign In Error: {reason}</Text>
          </View>
          )}
        </View>
{/* Sign Up Button */}
        <Pressable className="mt-6 rounded-2xl bg-light py-4 items-center" onPress={handleSignUp}>
          <Text className="text-bg font-semibold">Sign up</Text>
        </Pressable>

        <View className="mt-6 flex-row justify-center gap-1" >
          <Text className="text-text">Already have an account?</Text>
          <Pressable onPress={() => router.push('/pages/login')} >
            <Text className="text-light font-semibold">Log in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}