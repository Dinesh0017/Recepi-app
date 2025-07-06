import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/context/ThemeContext";
import { favoritesStyles } from "@/assets/styles/favorites.styles";
function NoFavoritesFound() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <View style={favoritesStyles(theme).emptyState}>
      <View style={favoritesStyles(theme).emptyIconContainer}>
        <Ionicons name="heart-outline" size={80} color={theme.textLight} />
      </View>
      <Text style={favoritesStyles(theme).emptyTitle}>No favorites yet</Text>
      <TouchableOpacity
        style={favoritesStyles(theme).exploreButton}
        onPress={() => router.push("/")}
      >
        <Ionicons name="search" size={18} color={theme.white} />
        <Text style={favoritesStyles(theme).exploreButtonText}>
          Explore Recipes
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoFavoritesFound;
