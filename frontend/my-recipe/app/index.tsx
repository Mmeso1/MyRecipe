import { Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>My Recipe</Text>
      <Header></Header>
      <Text>Footer</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}
