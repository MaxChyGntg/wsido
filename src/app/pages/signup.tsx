import { Text, View, Pressable, TextInput } from "react-native";
import '../../../global.css'
import { router } from "expo-router";

export default function SignUp() {
  return (
    <View className="flex-1 bg-bg px-6 justify-center">
      <View className="rounded-[32px] bg-sectext/95 border border-white/10 p-8 shadow-lg shadow-black/20">
        <Text className="text-light text-4xl font-bold mb-2">Create account</Text>
        <Text className="text-text text-base mb-8">Start your journey with a clean, simple signup.</Text>

        <View className="space-y-4">
          <TextInput
            placeholder="Name"
            placeholderTextColor="#778DA9"
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#778DA9"
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#778DA9"
            secureTextEntry
            className="w-full rounded-2xl border border-dusk bg-bg px-4 py-3 text-light"
          />
        </View>

        <Pressable className="mt-6 rounded-2xl bg-light py-4 items-center">
          <Text className="text-bg font-semibold">Sign up</Text>
        </Pressable>

        <View className="mt-6 flex-row justify-center gap-1">
          <Text className="text-text">Already have an account?</Text>
          <Pressable onPress={() => router.push('/pages/login')}>
            <Text className="text-light font-semibold">Log in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}