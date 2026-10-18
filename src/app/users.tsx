import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError("ვერ ჩაიტვირთა 😕"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ padding: 16, gap: 12 }}
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.info}>{item.email}</Text>
          <Text style={styles.info}>📍 {item.address.city}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  list: { backgroundColor: "#0f172a" },
  card: { backgroundColor: "#1e293b", padding: 16, borderRadius: 12, gap: 4 },
  name: { color: "#fff", fontSize: 18, fontWeight: "700" },
  info: { color: "#94a3b8", fontSize: 14 },
  error: { color: "#f87171", fontSize: 16 },
});
