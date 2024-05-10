import { NavigationProp } from "@react-navigation/native";
import { OnlineFriendList, RoomList } from "..";

const HomeTab = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <>
      <OnlineFriendList navigation={navigation} />
      <RoomList navigation={navigation} />
    </>
  );
};
export default HomeTab;
