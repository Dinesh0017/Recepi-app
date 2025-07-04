import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { height } = Dimensions.get("window");

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 10,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 30,
  },
  imageContainer: {
    height: height * 0.28,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 17,
    color: COLORS.textLight,
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 24,
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 22,
    position: "relative",
  },
  textInput: {
    fontSize: 16,
    color: COLORS.text,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.inputBackground || "#f9f9f9",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  eyeButton: {
    position: "absolute",
    right: 16,
    top: 18,
    padding: 4,
    zIndex: 1,
  },
  authButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.white,
    textAlign: "center",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  linkContainer: {
    alignItems: "center",
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  linkText: {
    fontSize: 15,
    color: COLORS.textLight,
    marginRight: 4,
  },
  link: {
    color: COLORS.primary,
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  // 🔹 New styles added below

  focusedInput: {
    borderColor: COLORS.primary,
    backgroundColor: "#fff",
  },
  errorInput: {
    borderColor: COLORS.error || "red",
  },
  helperText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 4,
    paddingHorizontal: 4,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 6,
    marginLeft: 4,
    fontWeight: "500",
  },
});
