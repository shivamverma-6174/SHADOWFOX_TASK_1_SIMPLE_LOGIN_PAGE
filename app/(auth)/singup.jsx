import { Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    setEmail(value);

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(value)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errror, setErrror] = useState("");

  const validatePassword = (value) => {
    setPassword(value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(value)) {
      setError(
        "Password must be 8+ chars, include uppercase, lowercase, number & special character"
      );
    } else {
      setErrror("");
    }
  };


    const validateConfirmPassword = (value) => {
    setConfirmPassword(value);

    if (value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };




  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Create Account</Text>

      {/* Full Name */}
      <View style={styles.inputWrapper}>
        <Feather name="user" size={20} color="#7a7a7a" />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>

      {/* Email */}
      <View style={styles.inputWrapper}>
        <MaterialIcons name="email" size={20} color="#7a7a7a" />
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

      {/* Phone Number */}
      <View style={styles.inputWrapper}>
        <Feather name="phone" size={20} color="#7a7a7a" />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
      </View>

      {/* Password */}
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={20} color="#7a7a7a" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#999"
          value={password}
          onChangeText={validatePassword}
        />
      </View>

      {/* Confirm Password */}
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={20} color="#7a7a7a" />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#999"
          value={confirmPassword}
          onChangeText={validateConfirmPassword}
        />
      </View>

      {errror ? <Text style={styles.errrorText}>{errror}</Text> : null}

      {/* Sign Up Button */}
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => router.push("/sucess")}
      >
        <LinearGradient colors={["#7AB6FF", "#A0E6C1"]} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity onPress={() => router.push("/singin")}>
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={{ color: "#4A90E2" }}>Login </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 10,
    color: "#000",
  },
  errrorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
    errorText: {
    color: "#E53935",      // red
    fontSize: 12,
    marginTop: 6,
    marginLeft: 28,        // icon ke baad align karne ke liye
    fontWeight: "500",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 25,
    color: "#000",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5FBFF",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E3EDF7",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#000",
  },
  button: {
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
  loginText: {
    marginTop: 15,
    fontSize: 14,
    color: "#555",
  },
});
