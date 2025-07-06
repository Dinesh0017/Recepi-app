import { StyleSheet } from "react-native";


export const searchStyles =(theme)=> StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.text,
  },
  clearButton: {
    padding: 4,
  },
  quickFilters: {
    marginTop: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.text,
    marginBottom: 12,
  },
  filterButtons: {
    flexDirection: "row",
    gap: 12,
  },
  quickFilterButton: {
    backgroundColor: theme.card,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.border,
  },
  activeQuickFilter: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
  },
  quickFilterText: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.text,
  },
  activeQuickFilterText: {
    color: theme.white,
  },
  resultsSection: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.text,
    flex: 1,
  },
  resultsCount: {
    fontSize: 14,
    color: theme.textLight,
    fontWeight: "500",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recipesGrid: {
    gap: 16,
    paddingBottom: 32,
  },
  row: {
    justifyContent: "space-between",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    color: theme.textLight,
    textAlign: "center",
    lineHeight: 20,
  },
});
