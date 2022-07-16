import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "../database/firebaseDB";
const auth = firebase.auth();

const demoMessage = {
  _id: 1,
  text: "Hello there!",
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "Demo person",
    avatar: "https://placeimg.com/140/140/any",
  },
};

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigation.navigate("Chat", { id: user.id, email: user.email });
      else navigation.navigate("Login");
    });

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={logout}>
          <MaterialCommunityIcons name="logout" size={30} color="grey" />
        </TouchableOpacity>
      ),
    });

    setMessages([demoMessage]);
  }, []);

  const logout = () => auth.signOut();

  return (
    <GiftedChat
      messages={messages}
      listViewProps={{ style: { backgroundColor: "grey" } }}
      user={{ _id: 1 }}
    />
  );
}

const styles = StyleSheet.create({});
