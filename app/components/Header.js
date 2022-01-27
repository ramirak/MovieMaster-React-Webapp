import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>MovieMaster</Text>
      </View>

      <View style={styles.fixToText}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("Homepage")}
            style={styles.buttonContainer}
            color="#000000a0"
            title="Home"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonContainer}
            color="#000000a0"
            title="Categories"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonContainer}
            color="#000000a0"
            title="Favorites"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonContainer}
            color="#000000a0"
            title="Recommendations"
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AntDesign name="user" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#000000c0",
  },
  fixToText: {
    margin: 3,
    flexDirection: "row",
    backgroundColor: "#000000a0",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    flex: 1,
    padding: 2,
    width: 250,
  },
});

export default Header;
