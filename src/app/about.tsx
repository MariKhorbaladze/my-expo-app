import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ჩემ შესახებ 👩‍💻</Text>
      <Text style={styles.text}>მე ვარ მარი, Frontend დეველოპერი.</Text>

      <Link href="/" style={styles.link}>
        ← უკან მთავარზე
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
    gap: 16,
  },
  title: { fontSize: 28, fontWeight: "700", color: "#fff" },
  text: { fontSize: 16, color: "#94a3b8" },
  link: { color: "#38bdf8", fontSize: 16 },
});
