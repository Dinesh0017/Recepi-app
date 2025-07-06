import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { homeStyles } from "../assets/styles/home.styles";
import { useTheme } from "../context/ThemeContext";

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const { theme } = useTheme();

  return (
    <View style={homeStyles(theme).categoryFilterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={homeStyles(theme).categoryFilterScrollContent}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.name;

          return (
            <TouchableOpacity
              key={category.id}
              style={[
                homeStyles(theme).categoryButton,
                isSelected && homeStyles(theme).selectedCategory,
              ]}
              onPress={() => onSelectCategory(category.name)}
              activeOpacity={0.7}
            >
              <Image
                source={{ uri: category.image }}
                style={[
                  homeStyles(theme).categoryImage,
                  isSelected && homeStyles(theme).selectedCategoryImage,
                ]}
                contentFit="cover"
                transition={300}
              />
              <Text
                style={[
                  homeStyles(theme).categoryText,
                  isSelected && homeStyles(theme).selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
