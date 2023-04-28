import { ActivityIndicator, StatusBar } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import Report from "@screens/Report";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Report /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
