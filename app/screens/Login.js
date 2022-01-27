import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import global from "../styles/global";
import Header from "../components/Header";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={global.container}>
      <ImageBackground
        source={require("../assets/bg-popcorn.jpg")}
        style={global.image}
      >
        <Header navigation={navigation} />
        <View style={global.container2}>
          <View style={global.loginView}>
            <View>
              <TextInput
                style={global.TextInput}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View>
              <TextInput
                style={global.TextInput}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <TouchableOpacity style={global.LoginButton}>
              <Text style={global.TextInput}>Login</Text>
            </TouchableOpacity>
            <View style={global.AdditionalOptions}>
              <TouchableOpacity>
                <Text style={global.AdditionalText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={global.AdditionalText}>New User?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
