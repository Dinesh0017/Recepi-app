import { View, Text, Alert, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import { Ionicons } from "@expo/vector-icons";
import RecipeCard from "../../components/RecipeCard";
import NoFavoritesFound from "../../components/NoFavoritesFound";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useTheme } from "../../context/ThemeContext";
import { favoritesStyles } from "../../assets/styles/favorites.styles";

const FavoritesScreen = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const { theme } = useTheme();
  const styles = favoritesStyles(theme);

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const response = await fetch(`${API_URL}/favorites/${user.id}`);
        if (!response.ok) throw new Error("Failed to fetch favorites");

        const favorites = await response.json();

        const transformedFavorites = favorites.map((favorite) => ({
          ...favorite,
          id: favorite.recipeId,
        }));

        setFavoriteRecipes(transformedFavorites);
      } catch (error) {
        console.log("Error loading favorites", error);
        Alert.alert("Error", "Failed to load favorites");
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user.id]);

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };

  if (loading) return <LoadingSpinner message="Loading your favorites..." />;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Favorites</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={22} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.recipesSection}>
          <FlatList
            data={favoriteRecipes}
            renderItem={({ item }) => <RecipeCard recipe={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.recipesGrid}
            scrollEnabled={false}
            ListEmptyComponent={<NoFavoritesFound />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
