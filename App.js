import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, Image } from "react-native";

export default function App() {
  console.log("app executed");

  function handlePress() {
    console.log("something as been pressed");
  }
  return (
    <SafeAreaView className="dflex justify-center items-center flex-1">
      <Text className="text-red-400" numberOfLines={1} onPress={handlePress}>
        Hello Selim How are you - it a reallly reallly long text text text text
        text text text text
      </Text>
      <Image
        className="w-20 h-20"
        source={require("./assets/adaptive-icon.png")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
