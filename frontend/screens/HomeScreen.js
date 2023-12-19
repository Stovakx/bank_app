import { View } from "react-native";
import Card from "../section/Card";
import Transactions from "../section/Transactions";
import Header from "../section/Header";
import { StyledSafeAreaView } from "../styles";

export default function HomeScreen() {
  return (
    <StyledSafeAreaView>
      <View>
        <View className="mb-6">
          <Header />

          <Card />

          <Transactions />
        </View>
      </View>
    </StyledSafeAreaView>
  );
}
