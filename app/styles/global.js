import { StyleSheet } from "react-native-web";
export default global = StyleSheet.create({
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
