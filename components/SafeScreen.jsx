import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../context/ThemeContext"; // import theme context

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();  // get theme

  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: theme.background }}>
      {children}
    </View>
  );
};
export default SafeScreen;
