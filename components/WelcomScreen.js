import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ marginRight: 40, marginLeft: 40, marginBottom: 50 }}>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 32,
          marginBottom: 50,
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text style={{ fontSize: 24, color: "white", textAlign: "center" }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
