import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  HomeScreen,
  RegisterScreen,
  ChatScreen,
  SearchResultScreen,
  NotificationScreen,
} from "@/screens";
import { Provider } from "react-redux";
import { store } from "./context";
import Toast from "react-native-toast-message";
import { LoadingOverlay } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="Chat">
            {(props: React.ComponentProps<any>) => <ChatScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="SearchResult">
            {(props: React.ComponentProps<any>) => (
              <SearchResultScreen {...props} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="bottom" visibilityTime={3000} />
      <LoadingOverlay />
    </Provider>
  );
}
