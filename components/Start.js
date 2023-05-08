import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState('');

  const loginUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", { userID: result.user.uid, name })
        Alert.alert("Successfully Signed In")
      })
      .catch((error) => {
        Alert.alert("Unable to Login, try later again.");
      })
  }

  return (
    <View style={styles.container}>
      <Text>Hello Screen1!</Text>
      <TextInput
        style={styles.nameTextInput}
        onChangeText={setName}
        value={name}
        placeholder="Type here ..."
      />
      <Button
        title="Go to Chat"
        onPress={loginUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  nameTextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});

export default Start;