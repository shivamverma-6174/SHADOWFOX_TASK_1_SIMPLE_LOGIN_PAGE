import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SuccessScreen({ navigation }) {
  const router = useRouter();
  return (
    <View style={styles.container}>

      {/* Success Icon */}
      <View style={styles.iconWrapper}>
        <LinearGradient
          colors={["#7AB6FF", "#A0E6C1"]}
          style={styles.iconBackground}
        >
          <Feather name="check" size={50} color="#fff" />
        </LinearGradient>
      </View>

      {/* Title */}
      <Text 
      className="text-4xl font-bold text-center my-4"
    >Hello Shivam Verma!</Text>
      <Text style={styles.title}>Signup Successful!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your account has been created.  {""}
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => router.push("/")}
        >
        <LinearGradient
          colors={["#7AB6FF", "#A0E6C1"]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Home or Logout</Text>
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  iconWrapper: {
    marginBottom: 30,
  },
  iconBackground: {
    width: 100,
    height: 100,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#670",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 40,
  },
  button: {
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});
