import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [glasses, setGlasses] = useState(0);
  const goal = 8;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>💧 წყლის მთვლელი</Text>

      <Text style={styles.count}>
        {glasses} / {goal}
      </Text>
      <Text style={styles.subtitle}>
        {glasses >= goal ? "მიზანი შესრულდა! 🎉" : "ჭიქა დღეს"}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => setGlasses(glasses + 1)}
      >
        <Text style={styles.buttonText}>+ ჭიქა</Text>
      </Pressable>

      <Pressable onPress={() => setGlasses(0)}>
        <Text style={styles.reset}>თავიდან დაწყება</Text>
      </Pressable>
      <Link href="/about" style={styles.link}>
        ჩემ შესახებ →
      </Link>
      <Link href="/users" style={styles.link}>
        მომხმარებლები →
      </Link>
    </SafeAreaView>
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
  count: { fontSize: 64, fontWeight: "800", color: "#38bdf8" },
  subtitle: { fontSize: 16, color: "#94a3b8" },
  button: {
    backgroundColor: "#38bdf8",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 16,
  },
  buttonPressed: { opacity: 0.6, transform: [{ scale: 0.97 }] },
  buttonText: { fontSize: 18, fontWeight: "700", color: "#0f172a" },
  reset: { color: "#f87171", fontSize: 14 },
  link: { color: "#38bdf8", fontSize: 16 },
});
