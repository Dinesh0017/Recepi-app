import { StyleSheet } from "react-native";

export const createRecipeDetailStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    headerContainer: {
      height: 280,
      position: "relative",
    },
    imageContainer: {
      height: "100%",
      width: "100%",
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      overflow: "hidden",
    },
    headerImage: {
      height: "100%",
      width: "100%",
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
    },
    gradientOverlay: {
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
    },
    floatingButtons: {
      position: "absolute",
      top: 50,
      left: 20,
      right: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    floatingButton: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    titleSection: {
      position: "absolute",
      bottom: 20,
      left: 20,
    },
    recipeTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.white,
      marginTop: 5,
    },
    categoryBadge: {
      backgroundColor: theme.primary,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: "flex-start",
    },
    categoryText: {
      color: theme.white,
      fontSize: 12,
    },
    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
    },
    locationText: {
      marginLeft: 4,
      color: theme.textLight,
      fontSize: 13,
    },
    contentSection: {
      padding: 20,
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    statCard: {
      alignItems: "center",
      flex: 1,
    },
    statIconContainer: {
      padding: 10,
      borderRadius: 50,
      marginBottom: 8,
    },
    statValue: {
      fontWeight: "bold",
      fontSize: 18,
      color: theme.text,
    },
    statLabel: {
      fontSize: 12,
      color: theme.textLight,
    },
    sectionContainer: {
      marginBottom: 24,
    },
    sectionTitleRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    sectionIcon: {
      padding: 6,
      borderRadius: 6,
      marginRight: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.text,
    },
    countBadge: {
      backgroundColor: theme.secondary,
      marginLeft: 10,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 12,
    },
    countText: {
      fontSize: 12,
      color: theme.white,
    },
    ingredientsGrid: {
      flexDirection: "column",
      gap: 10,
    },
    ingredientCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.card,
      borderRadius: 10,
      padding: 12,
    },
    ingredientNumber: {
      backgroundColor: theme.secondary,
      borderRadius: 16,
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
    ingredientNumberText: {
      color: theme.white,
      fontSize: 12,
    },
    ingredientText: {
      flex: 1,
      fontSize: 14,
      color: theme.text,
    },
    ingredientCheck: {
      marginLeft: 8,
    },
    videoCard: {
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
    },
    webview: {
      flex: 1,
    },
    instructionsContainer: {
      gap: 16,
    },
    instructionCard: {
      flexDirection: "row",
      backgroundColor: theme.card,
      borderRadius: 12,
      overflow: "hidden",
    },
    stepIndicator: {
      width: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    stepNumber: {
      color: theme.white,
      fontWeight: "bold",
    },
    instructionContent: {
      flex: 1,
      padding: 12,
    },
    instructionText: {
      color: theme.text,
      fontSize: 14,
      marginBottom: 8,
    },
    instructionFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    stepLabel: {
      color: theme.textLight,
      fontSize: 12,
    },
    completeButton: {
      backgroundColor: theme.white,
      borderRadius: 20,
      padding: 4,
    },
    primaryButton: {
      marginTop: 16,
      borderRadius: 12,
      overflow: "hidden",
    },
    buttonGradient: {
      padding: 12,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    buttonText: {
      color: theme.white,
      fontWeight: "bold",
    },
  });
