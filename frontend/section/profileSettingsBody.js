import { Alert, View, Modal } from "react-native";
import { StyledText } from "../styles";
import { CustomTextInput } from "../components/customTextInput";
import React from "react";
import Btn from "../components/btn";
import { person } from "../utils/data";

const ProfileSettingsBody = ({}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isPasswordChanged, setIsPasswordChanged] = React.useState(false);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsPasswordChanged(true);
  };

  const submitForm = () => {
    if (password != confirmPassword) {
      Alert.alert("Error", "New pasword doesn't match");
    }

    if (currentPassword !== person[0].pw) {
      Alert.alert("Error", "Incorrect current password");
      return;
    }

    console.log("změněné informace", {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    });
  };

  const toggleModal = () => {
    setModalVisible();
  };

  const passwordConfirmation = (value) => {
    setCurrentPassword(value);
  };

  return (
    <View>
      <StyledText className="text-2xl">Profile settings</StyledText>
      <View className="h-4" />
      <View className="flex-col space-y-6">
        <CustomTextInput
          label={"First Name"}
          value={firstName}
          onChange={setFirstName}
        />
        <CustomTextInput
          label={"Last Name"}
          value={lastName}
          onChange={setLastName}
        />
        <CustomTextInput label={"Email"} value={email} onChange={setEmail} />
        <CustomTextInput
          label={"Telephone"}
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <CustomTextInput
          label={"Password"}
          value={password}
          onChange={handlePasswordChange}
          secureTextEntry={true}
        />
        {isPasswordChanged && (
          <CustomTextInput
            label={"Confirm Password"}
            value={confirmPassword}
            onChange={setConfirmPassword}
            secureTextEntry={true}
          />
        )}
        <View className="items-center">
          <Btn
            text={"Confirm changes"}
            starCol={"#e879f9"}
            endCol={"#a855f7"}
            middleCol={"#a21caf"}
            className="p-4 rounded-full items-center w-[80%]"
            onPress={()=> submitForm()}
          />
        </View>
        {/* Modální okno pro zadání stávajícího hesla */}
   
      </View>
    </View>
  );
};

export default ProfileSettingsBody;

/*      <Modal visible={modalVisible} transparent animationType="slide">
          <View>
            <CustomTextInput
              secureTextEntry
              placeholder={"Current Password"}
              value={currentPassword}
              onChangeText={handlePasswordChange}
            />
            <Btn
              text={"Confirm"}
              starCol={"#e879f9"}
              endCol={"#a855f7"}
              middleCol={"#a21caf"}
              className="p-4 rounded-full items-center w-[80%]"
              onPress={() => {
                submitForm();
              }}
            />
            <Btn
              text={"Cancel"}
              starCol={"#e879f9"}
              endCol={"#a855f7"}
              middleCol={"#a21caf"}
              className="p-4 rounded-full items-center w-[80%]"
              onPress={toggleModal}
            />
          </View>
        </Modal> */