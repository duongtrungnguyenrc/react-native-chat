import { TouchableOpacity, TextInput, View } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

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
        <FontAwesomeIcon
          style={styles.searchButtonIcon}
          icon={faSearch}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SearchInput;
