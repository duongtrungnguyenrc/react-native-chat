import { SafeAreaView, View } from "react-native";
import styles from "./styles";

const DefaultLayout = ({
  appBar,
  bottomNavigationBar,
  children,
}: {
  appBar: JSX.Element;
  bottomNavigationBar: JSX.Element;
  children: React.ReactNode;
}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {appBar}
        <View style={styles.mainSite}>{children}</View>
        {bottomNavigationBar}
      </View>
    </SafeAreaView>
  );
};

export default DefaultLayout;
