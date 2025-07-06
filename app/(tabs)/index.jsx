import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { MealAPI } from "@/services/mealAPI";
import { homeStyles } from "../../assets/styles/home.styles";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import CategoryFilter from "../../components/CategoryFilter";
import RecipeCard from "../../components/RecipeCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useTheme } from "../../context/ThemeContext";
import { THEMES } from "../../constants/colors";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const HomeScreen = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const { theme, changeTheme, currentThemeName } = useTheme();
  const [showThemes, setShowThemes] = useState(false);

  const styles = homeStyles(theme);

  const loadData = async () => {
    try {
      setLoading(true);
      const [apiCategories, randomMeals, featuredMeal] = await Promise.all([
        MealAPI.getCategories(),
        MealAPI.getRandomMeals(12),
        MealAPI.getRandomMeal(),
      ]);

      const transformedCategories = apiCategories.map((cat, index) => ({
        id: index + 1,
        name: cat.strCategory,
        image: cat.strCategoryThumb,
        description: cat.strCategoryDescription,
      }));

      setCategories(transformedCategories);
      if (!selectedCategory) setSelectedCategory(transformedCategories[0].name);

      const transformedMeals = randomMeals
        .map((meal) => MealAPI.transformMealData(meal))
        .filter((meal) => meal !== null);

      setRecipes(transformedMeals);
      const transformedFeatured = MealAPI.transformMealData(featuredMeal);
      setFeaturedRecipe(transformedFeatured);
    } catch (error) {
      console.log("Error loading the data", error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategoryData = async (category) => {
    try {
      const meals = await MealAPI.filterByCategory(category);
      const transformedMeals = meals
        .map((meal) => MealAPI.transformMealData(meal))
        .filter((meal) => meal !== null);
      setRecipes(transformedMeals);
    } catch (error) {
      console.error("Error loading category data:", error);
      setRecipes([]);
    }
  };

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    await loadCategoryData(category);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading && !refreshing) {
    return <LoadingSpinner message="Loading delicious recipes..." />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.primary}
          />
        }
        contentContainerStyle={styles.scrollContent}
      >
        {/* THEME SWITCHER */}
        <View
          style={{ paddingHorizontal: 16, marginTop: 16, paddingBottom: 10 }}
        >
          {/* Main Theme Toggle Button */}
          <TouchableOpacity
            onPress={() => setShowThemes(!showThemes)}
            activeOpacity={0.9}
            style={{
              backgroundColor: theme.card,
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="color-palette" size={20} color={theme.text} />
              <Text
                style={{
                  color: theme.text,
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 8,
                }}
              >
                Theme: {currentThemeName}
              </Text>
            </View>

            {/* Small Circle Preview of Current Theme Color */}
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 999,
                backgroundColor: theme.primary,
                marginLeft: 8,
              }}
            />
          </TouchableOpacity>

          {/* Horizontal Scrollable Theme List */}
          {showThemes && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 12 }}
            >
              {Object.entries(THEMES).map(([key, t]) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => {
                    changeTheme(key);
                    setShowThemes(false);
                  }}
                  activeOpacity={0.8}
                  style={{
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  {/* Colored Circle with Icon */}
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      backgroundColor: t.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: key === currentThemeName ? 3 : 1,
                      borderColor:
                        key === currentThemeName ? theme.primary : "#ccc",
                    }}
                  >
                    <Ionicons
                      name="color-palette"
                      size={24}
                      color={t.white || "#fff"}
                    />
                  </View>

                  {/* Theme Name */}
                  <Text
                    style={{
                      marginTop: 6,
                      fontSize: 12,
                      color: theme.text,
                      textTransform: "capitalize",
                      fontWeight: key === currentThemeName ? "bold" : "normal",
                    }}
                  >
                    {key}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        {/* FEATURED SECTION */}
        {featuredRecipe && (
          <View style={styles.featuredSection}>
            <TouchableOpacity
              style={styles.featuredCard}
              activeOpacity={0.9}
              onPress={() => router.push(`/recipe/${featuredRecipe.id}`)}
            >
              <View style={styles.featuredImageContainer}>
                <Image
                  source={{ uri: featuredRecipe.image }}
                  style={styles.featuredImage}
                  contentFit="cover"
                  transition={500}
                />
                <View style={styles.featuredOverlay}>
                  <View style={styles.featuredBadge}>
                    <Text style={styles.featuredBadgeText}>Featured</Text>
                  </View>

                  <View style={styles.featuredContent}>
                    <Text style={styles.featuredTitle} numberOfLines={2}>
                      {featuredRecipe.title}
                    </Text>

                    <View style={styles.featuredMeta}>
                      <View style={styles.metaItem}>
                        <Ionicons
                          name="time-outline"
                          size={16}
                          color={theme.white}
                        />
                        <Text style={styles.metaText}>
                          {featuredRecipe.cookTime}
                        </Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Ionicons
                          name="people-outline"
                          size={16}
                          color={theme.white}
                        />
                        <Text style={styles.metaText}>
                          {featuredRecipe.servings}
                        </Text>
                      </View>
                      {featuredRecipe.area && (
                        <View style={styles.metaItem}>
                          <Ionicons
                            name="location-outline"
                            size={16}
                            color={theme.white}
                          />
                          <Text style={styles.metaText}>
                            {featuredRecipe.area}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* CATEGORY FILTER */}
        {categories.length > 0 && (
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        )}

        {/* RECIPES LIST */}
        <View style={styles.recipesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{selectedCategory}</Text>
          </View>

          {recipes.length > 0 ? (
            <FlatList
              data={recipes}
              renderItem={({ item }) => <RecipeCard recipe={item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={styles.row}
              contentContainerStyle={styles.recipesGrid}
              scrollEnabled={false}
            />
          ) : (
            <View style={styles.emptyState}>
              <Ionicons
                name="restaurant-outline"
                size={64}
                color={theme.textLight}
              />
              <Text style={styles.emptyTitle}>No recipes found</Text>
              <Text style={styles.emptyDescription}>
                Try a different category
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
