import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  welcomeSection: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.3,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  featuredCard: {
    borderRadius: 26,
    overflow: "hidden",
    backgroundColor: COLORS.card,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 10,
  },
  featuredImageContainer: {
    height: 240,
    backgroundColor: COLORS.primary,
    position: "relative",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "space-between",
    padding: 20,
  },
  featuredBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  featuredBadgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  featuredContent: {
    justifyContent: "flex-end",
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.white,
    marginBottom: 12,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  featuredMeta: {
    flexDirection: "row",
    gap: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: "600",
  },
  recipesSection: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  sectionHeader: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.4,
  },
  recipesGrid: {
    gap: 18,
  },
  row: {
    justifyContent: "space-between",
    gap: 16,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 72,
    paddingHorizontal: 36,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 10,
  },
  emptyDescription: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: 20,
  },
  categoryFilterContainer: {
    marginVertical: 20,
  },
  categoryFilterScrollContent: {
    paddingHorizontal: 16,
    gap: 14,
  },
  categoryButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.card,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    minWidth: 80,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedCategory: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    shadowOpacity: 0.15,
  },
  categoryImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginBottom: 6,
    backgroundColor: COLORS.border,
  },
  selectedCategoryImage: {
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.text,
    textAlign: "center",
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
});


export const recipeCardStyles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    height: 140,
    backgroundColor: COLORS.border,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 6,
    lineHeight: 22,
  },
  description: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 10,
    lineHeight: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 4,
    fontWeight: "500",
  },
  servingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  servingsText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 4,
    fontWeight: "500",
  },
});
