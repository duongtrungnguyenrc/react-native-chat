import { FlatList, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { clearResult, dispath, RootState } from "@/context";
import { User } from "@/models";
import { useEffect } from "react";
import BackAppBar from "../BackAppBar";
import SearchResultItem from "../SearchResultItem";
import { NavigationProp } from "@react-navigation/native";

const SearchResultList = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const results = useSelector((state: RootState) => state.searchResults);

  useEffect(() => {
    return () => {
      dispath(clearResult());
    };
  }, []);

  const renderItem = ({ item }: { item: User }): React.ReactElement => (
    <SearchResultItem user={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <BackAppBar heading="Search" />
      <FlatList
        style={styles.resultList}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ marginHorizontal: 10 }}
        data={results}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default SearchResultList;
