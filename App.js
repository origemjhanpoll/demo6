import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import List from "./components/list";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ECECEC" }}>
      <StatusBar hidden />
      <List />
    </SafeAreaView>
  );
}
