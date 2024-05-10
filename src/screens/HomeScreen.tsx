import { BottomNavigationBar, OnlineFriendList } from "@/components";
import { DefaultLayout } from "@/layouts";
import { AppBar } from "@/components";
import React, { useEffect } from "react";
import { chatService, userService } from "@/services";
import { NavigationProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "@/components/HomeTab";
import SettingTab from "@/components/SettingTab";
import { NewChatModal } from "@/components";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useEffect(() => {
    chatService.getRooms();
    userService.getFriendRequest();
    chatService.getOnlineFriends();

    return () => {
      chatService.dispose();
    };
  }, []);

  return (
    <DefaultLayout
      bottomNavigationBar={<BottomNavigationBar navigation={navigation} />}
      appBar={<AppBar />}
    >
      <NewChatModal />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: "none" },
          headerShown: false,
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
      >
        <Tab.Screen name="HomeTab">
          {(props: React.ComponentProps<any>) => <HomeTab {...props} />}
        </Tab.Screen>
        <Tab.Screen name="SettingTab" component={SettingTab} />
      </Tab.Navigator>
    </DefaultLayout>
  );
};
export default HomeScreen;
