import { View } from "react-native";
import Card from "../section/Card";
import Transactions from "../section/Transactions";
import Header from "../section/Header";
import { StyledSafeAreaView } from "../styles";

export default function HomeScreen() {
  const page = "Home"
  //TODO: přidat All Transactions btn s navigate na AllTransactionsScreen
  return (
    <StyledSafeAreaView>
      <View>
        <View className="mb-6">
          <Header page={page} />

          <Card />
        
          <Transactions />
        </View>
      </View>
    </StyledSafeAreaView>
  );
}
