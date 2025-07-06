import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export const authStyles =(theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  imageContainer: {
    height: height * 0.3,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: theme.text,
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: theme.textLight,
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
    position: "relative",
  },
  textInput: {
    fontSize: 16,
    color: theme.text,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: theme.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  eyeButton: {
    position: "absolute",
    right: 16,
    top: 16,
    padding: 4,
  },
  authButton: {
    backgroundColor: theme.primary,
    paddingVertical: 18,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.white,
    textAlign: "center",
  },
  linkContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: theme.textLight,
    textAlign: "center",
  },
  link: {
    color: theme.primary,
    fontWeight: "600",
  },
});
