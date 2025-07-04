import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  searchSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  searchIcon: {
    marginRight: 12,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 22,
  },

  clearButton: {
    padding: 6,
  },

  quickFilters: {
    marginTop: 24,
  },

  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 12,
  },

  filterButtons: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },

  quickFilterButton: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },

  activeQuickFilter: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    shadowOpacity: 0.1,
  },

  quickFilterText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text,
  },

  activeQuickFilterText: {
    color: COLORS.white,
  },

  resultsSection: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 8,
  },

  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 16,
  },

  resultsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    flex: 1,
  },

  resultsCount: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: "500",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  recipesGrid: {
    gap: 16,
    paddingBottom: 36,
  },

  row: {
    justifyContent: "space-between",
    gap: 16,
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 64,
    paddingHorizontal: 32,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },

  emptyDescription: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: 20,
  },
});
