import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import SafeScreen from "@/components/SafeScreen";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ThemeProvider>
        <SafeScreen>
          <Slot />
        </SafeScreen>
      </ThemeProvider>
    </ClerkProvider>
  );
}
