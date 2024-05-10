import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import styles from "./styles";

const FormInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  keyboardType,
  secure,
  defaultValue,
}: {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (text: string, name: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  defaultValue?: string;
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        defaultValue={defaultValue}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text, name?.toLowerCase() ?? "")}
        keyboardType={keyboardType}
        secureTextEntry={secure}
      />
    </View>
  );
};
export default FormInput;
