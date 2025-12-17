import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="#1b1b1b1b ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image style={{ width: 300, height: 300 }} />
          <Text className="text-4xl font-bold text-center my-4">
            Hiii to ShadoFox
          </Text>
          <Text className="text-center text-lg mb-6 px-4">
            Level 1 Project {""}
          </Text>
          <View className="w-3/4">
            <TouchableOpacity
              className="p-2 my-2 bg-#ffffff rounded-lg max-w-fit "
              onPress={() => router.push("/singup")}
            >
              <LinearGradient
                colors={["#7AB6FF", "#A0E6C1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 12, padding: 2 }} // border thickness
              >
                {/* Inner Button */}
                <View className="rounded-[10px] px-6 py-3">
                  <Text className="text-lg font-semibold text-#1b1b1b text-center">
                    Sign Up
                  </Text> 
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              className="p-0 my-2 bg-#ffffff rounded-lg max-w-fit "
              onPress={() => router.push("/singin")}
            >
              <LinearGradient
                colors={["#7AB6FF", "#A0E6C1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 12, padding: 2 }} // border thickness
              >
                {/* Inner Button */}
                <View className="bg-white rounded-[10px] px-6 py-3">
                  <Text className="text-lg font-semibold text-#1b1b1b text-center">
                    Sign In
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>



            
          </View>
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      </ScrollView>
    </SafeAreaView>
  );
}
