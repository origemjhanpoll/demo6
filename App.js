import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import List from "./components/list";
import ContextProvider from "./context/headerContext";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ECECEC" }}>
      <StatusBar hidden />
      <ContextProvider>
        <List />
      </ContextProvider>
    </SafeAreaView>
  );
}
