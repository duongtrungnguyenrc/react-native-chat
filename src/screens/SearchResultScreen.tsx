import { SearchResultList } from "@/components";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const SearchResultScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  return (
    <SafeAreaView>
      <SearchResultList navigation={navigation} />
    </SafeAreaView>
  );
};
export default SearchResultScreen;
