import { FlatList, View, Text } from "react-native";
import OnlineFriendItem from "../OnlineFriendItem";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/context";
import { User } from "@/models";
import { NavigationProp } from "@react-navigation/native";

const OnlineFriendList = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const onlineFriends = useSelector((state: RootState) => state.onlineFriends);

  const renderItem = ({ item }: { item: User }) => (
    <OnlineFriendItem navigation={navigation} user={item} />
  );

  const renderSperator = () => <View style={styles.seperator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={onlineFriends}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        horizontal={true}
        ItemSeparatorComponent={renderSperator}
      />
      {onlineFriends.length == 0 && (
        <Text style={styles.hintText}>No online friend 😤</Text>
      )}
    </View>
  );
};
export default OnlineFriendList;
