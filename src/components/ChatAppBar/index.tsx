import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { User } from "@/models/user.model";

const ChatAppBar = ({ user }: { user?: User }) => {
  const navigation = useNavigation();

  const onBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} />
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
