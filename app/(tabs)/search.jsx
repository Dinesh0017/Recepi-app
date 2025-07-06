import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { MealAPI } from "../../services/mealAPI";
import { useDebounce } from "../../hooks/useDebounce";
import { Ionicons } from "@expo/vector-icons";

import RecipeCard from "../../components/RecipeCard";
import LoadingSpinner from "../../components/LoadingSpinner";

import { useTheme } from "../../context/ThemeContext";
import { searchStyles } from "../../assets/styles/search.styles";

const SearchScreen = () => {
  const { theme } = useTheme();
  const styles = searchStyles(theme);

  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const performSearch = async (query) => {
    if (!query.trim()) {
      const randomMeals = await MealAPI.getRandomMeals(12);
      return randomMeals
        .map((meal) => MealAPI.transformMealData(meal))
        .filter((meal) => meal !== null);
    }

    const nameResults = await MealAPI.searchMealsByName(query);
    let results = nameResults;

    if (results.length === 0) {
      const ingredientResults = await MealAPI.filterByIngredient(query);
      results = ingredientResults;
    }

    return results
      .slice(0, 12)
      .map((meal) => MealAPI.transformMealData(meal))
      .filter((meal) => meal !== null);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const results = await performSearch("");
        setRecipes(results);
      } catch (error) {
        console.error("Error loading initial data:", error);
      } finally {
        setInitialLoading(false);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    if (initialLoading) return;

    const handleSearch = async () => {
      setLoading(true);

      try {
        const results = await performSearch(debouncedSearchQuery);
        setRecipes(results);
      } catch (error) {
        console.error("Error searching:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [debouncedSearchQuery, initialLoading]);

  if (initialLoading) return <LoadingSpinner message="Loading recipes..." />;

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color={theme.textLight}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes, ingredients..."
            placeholderTextColor={theme.textLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={theme.textLight} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.resultsSection}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>
            {searchQuery ? `Results for "${searchQuery}"` : "Popular Recipes"}
          </Text>
          <Text style={styles.resultsCount}>{recipes.length} found</Text>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <LoadingSpinner message="Searching recipes..." size="small" />
          </View>
        ) : (
          <FlatList
            data={recipes}
            renderItem={({ item }) => <RecipeCard recipe={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.recipesGrid}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<NoResultsFound theme={theme} />}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

function NoResultsFound({ theme }) {
  return (
    <View style={searchStyles(theme).emptyState}>
      <Ionicons name="search-outline" size={64} color={theme.textLight} />
      <Text style={searchStyles(theme).emptyTitle}>No recipes found</Text>
      <Text style={searchStyles(theme).emptyDescription}>
        Try adjusting your search or try different keywords
      </Text>
    </View>
  );
}
