import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { User } from "@/models/user.model";
import { SvgXml } from "react-native-svg";

const ChatAppBar = ({ user }: { user?: User }) => {
  const navigation = useNavigation();

  const onBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <SvgXml
          xml={
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>'
          }
          width={20}
          height={20}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={{ uri: user?.avatar }} />
          {user?.isOnline && <View style={styles.onlineStatusPoint} />}
        </View>
        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
};
export default ChatAppBar;
