import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function LoadingSpinner({ message = "Loading...", size = "large" }) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 32,
      backgroundColor: theme.background,
    },
    content: {
      alignItems: "center",
      gap: 16,
    },
    message: {
      fontSize: 16,
      color: theme.textLight,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator size={size} color={theme.primary} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}
