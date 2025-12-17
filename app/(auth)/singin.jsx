import { Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SigninScreen({ navigation }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    setEmail(value);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(value)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };

const [password, setPassword] = useState("");
  const [errror, setErrror] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value) => {
    setPassword(value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(value)) {
      setErrror(
        "Password must be 8+ chars, include uppercase, lowercase, number & symbol"
      );
    } else {
      setErrror("");
    }
  };



  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Email */}
      <View style={styles.inputBox}>
        <MaterialIcons name="email" size={20} color="#9aa" />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={validateEmail}
          style={styles.input}
          placeholderTextColor="#999"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      {/* Password */}
      <View
        style={[
          styles.inputBox,
          error && styles.inputBoxError,
        ]}
      >
        <Feather name="lock" size={20} color="#9aa" />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9aa"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={validatePassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={18}
            color="#9aa"
          />
        </TouchableOpacity>
      </View>
      {errror ? <Text style={styles.errorText}>{errror}</Text> : null}

      {/* Sign In Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ width: "75%" }}
        onPress={() => router.push("/sucess")}
      >
        <LinearGradient
          colors={["#7AB6FF", "#A0E6C1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Footer */}
      <TouchableOpacity onPress={() => router.push("/singup")}>
        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <Text style={styles.signupText}>Sign Up {""}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  errorText: {
    color: "#E53935", // red
    fontSize: 12,
    marginTop: 6,
    marginLeft: 28, // icon ke baad align karne ke liye
    fontWeight: "500",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 32,
    color: "#000",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F4FBFF",
    borderRadius: 28,
    paddingHorizontal: 18,
    height: 56,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DCEAF5",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#000",
  },
  signInButton: {
    height: 56,
    borderRadius: 28, // 🔥 perfect pill
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  footerText: {
    marginTop: 18,
    fontSize: 14,
    color: "#6b7280",
  },
  signupText: {
    color: "#4A90E2",
    fontWeight: "600",
  },
});
