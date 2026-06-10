import { Text, View, ScrollView } from "react-native";
import '../../global.css'

export default function Terms() {
  const terms = [
    "You are responsible for managing your screen time and using the app in a way that is safe and appropriate for you.",
    "The app is not a substitute for professional help or advice. If you are struggling with screen addiction or other related issues, please seek help from a qualified professional.",
    "The developers of this app are not responsible for any negative consequences that may arise from the use of this app. Use it at your own risk.",
    "The HIGH STAKES MODE is an optional feature that provides an extra layer of accountability. It is your responsibility to use this feature in a way that is appropriate for you and the contact you choose to receive notifications.",
    "The app may collect and use data in accordance with our privacy policy. By using the app, you consent to the collection and use of your data as described in our privacy policy.",
    "The app may be updated from time to time, and we reserve the right to modify these terms of use at any time. We will notify users of any changes to the terms of use through the app or other means. Your continued use of the app after any changes to the terms of use constitutes your acceptance of the new terms.",
    "If you do not agree to these terms of use, please do not use the app. If you have any questions or concerns about these terms of use, please contact us at chay000@gmail.com."
  ];

  return (
    <View className="flex-1 bg-bg">
      <ScrollView contentContainerStyle={{ padding: 24 }} className="flex-1">
        <Text className="text-light text-4xl font-semibold text-center mb-6">Terms of Use</Text>

        <View className="bg-dusk rounded-3xl border border-light/10 p-6 shadow-lg">
          <Text className="text-amber-100 text-2xl leading-7 mb-4">
            By using the "What Should I Do?" app, you agree to the following terms of use:
          </Text>

          {terms.map((item, index) => (
            <Text key={index} className="text-light text-base leading-7 mb-4">
              <Text className="font-semibold text-amber-100">{index + 1}. </Text>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
