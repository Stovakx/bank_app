import React from "react";
import { StyledSafeAreaView, StyledText } from "../styles";
import Header from "../section/Header";
import ProfileSettingsBody from "../section/profileSettingsBody";

const SettingScreen = ({ route }) => {
  const { item, page } = route.params || {};
  const [name, onChangeName] = React.useState();
  return (
    <StyledSafeAreaView>
      <Header page={page} />
      {item.name === "Profile" ? (
        <ProfileSettingsBody />
      ) : (
        <StyledText>Teeeext</StyledText>
      )}
    </StyledSafeAreaView>
  );
};

export default SettingScreen;
