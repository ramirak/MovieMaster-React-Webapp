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

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
                placeholder="Full Name"
                placeholderTextColor="white"
                onChangeText={(name) => setName(name)}
              />
            </View>
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
            <View>
              <TextInput
                style={global.TextInput}
                placeholder="Repeat Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                onChangeText={(password2) => setPassword2(password2)}
              />
            </View>
            <TouchableOpacity style={global.LoginButton}>
              <Text style={global.TextInput}>Register</Text>
            </TouchableOpacity>
            <View style={global.AdditionalOptions}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={global.AdditionalText}>
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
