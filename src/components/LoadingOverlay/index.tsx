import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/context";

const LoadingOverlay = () => {
  const loading = useSelector((state: RootState) => state.loading);

  return (
    loading && (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  );
};
export default LoadingOverlay;
