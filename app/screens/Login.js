import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import Header from "../components/Header";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg-popcorn.jpg")}
        style={styles.image}
      >
        <Header navigation={navigation} />
        <View style={styles.container2}>
          <View style={styles.loginView}>
            <View>
              <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View>
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <TouchableOpacity style={styles.LoginButton}>
              <Text style={styles.TextInput}>Login</Text>
            </TouchableOpacity>
            <View style={styles.AdditionalOptions}>
              <TouchableOpacity>
                <Text style={styles.AdditionalText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.AdditionalText}>New User?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: "#000000a0",
    alignItems: "center",
  },
  loginView: {
    margin: 50,
    flexDirection: "column",
    backgroundColor: "#000000a0",
    width: "30%",
    borderRadius: 10,
  },
  TextInput: {
    color: "white",
    fontSize: 16,
    padding: 5,
    margin: 5,
  },
  AdditionalText: {
    color: "white",
    fontSize: 14,
    padding: 5,
    margin: 5,
  },
  LoginButton: {
    backgroundColor: "green",
    alignContent: "center",
    alignItems: "center",
  },
  AdditionalOptions: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Login;
