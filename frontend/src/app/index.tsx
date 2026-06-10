import { Text, View, Pressable, StyleSheet} from "react-native";
import '../../global.css'
import TypeWritter from '@sucho/react-native-typewriter';
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-bg px-6 py-10">
      <View className="flex-1 justify-center">
        <Text className="text-light text-4xl font-bold text-center">What Should I Do?</Text>
        <Text className="text-text text-base text-center mt-4 leading-7">
         <TypeWritter 
        textArray={['You Should Maintain Your ScreenTime.', 'Use High-Stacks Mode.', 'You Deserve to Focus!']} 
        loop={true} 
        speed={100}      // Kecepatan mengetik (semakin kecil semakin cepat)
        delay={1500}     // Durasi jeda sebelum teks dihapus kembali
        textStyle={styles.text} 
        cursorStyle={styles.cursor}
      />
        </Text>

        <View className="mt-10 space-y-4">
          <Pressable
            className="rounded-full bg-light/95 py-4 items-center mb-2"
            onPress={() => router.push('/pages/login')}
          >
            <Text className="text-bg text-lg font-semibold">Log in</Text>
          </Pressable>

          <Pressable
            className="rounded-full border border-light/20 py-4 items-center"
            onPress={() => router.push('/pages/signup')}
          >
            <Text className="text-light text-lg font-semibold">Create account</Text>
          </Pressable>
        </View>
      </View>

      <View className="mt-8 items-center">
        <Text className="text-text text-sm text-center">
          By continuing, you agree to the{' '}
          <Text className="text-blue-400 underline" onPress={() => router.push('/Terms')}>
            Terms of Use
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 17, color: '#778DA9' },
  cursor: { color: 'blue', fontSize: 18 }
});