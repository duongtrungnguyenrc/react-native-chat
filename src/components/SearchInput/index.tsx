import { TouchableOpacity, TextInput, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = ({
  searchCallback,
}: {
  searchCallback: (key: string) => Promise<boolean>;
}) => {
  const [key, setKey] = useState<string>("");

  const onChange = (text: string) => {
    setKey(text);
  };

  const onSearch = useDebouncedCallback(async () => {
    if (await searchCallback(key)) {
      setKey("");
    }
  }, 200);

  return (
    <View style={styles.container}>
      <TextInput
        value={key}
        defaultValue={key}
        onChangeText={onChange}
        style={styles.searchInput}
        placeholder="Search"
      />
      <TouchableOpacity
        disabled={key == ""}
        style={styles.searchButton}
        onPress={onSearch}
      >
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchInput;
