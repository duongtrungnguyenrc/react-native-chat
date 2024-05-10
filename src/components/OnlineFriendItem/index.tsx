import { Image, View, Text, Animated, TouchableOpacity } from "react-native";
import styles from "./styles";
import { User } from "@/models";
import { useEffect, useRef } from "react";
import { NavigationProp } from "@react-navigation/native";

const FriendItem = ({
  user,
  navigation,
}: {
  user: User;
  navigation: NavigationProp<any>;
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const onPressItem = async () => {
    navigation.navigate("Chat", { receiver: user });
  };

  return (
    <TouchableOpacity onPress={onPressItem}>
      <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
        <View style={styles.avatarContainer}>
          <Image style={styles.image} source={{ uri: user.avatar }} />
          <View style={styles.onlineStatusPoint} />
        </View>
        <Text style={styles.name}>{user.name.split(" ")[0]}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};
export default FriendItem;
