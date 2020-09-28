import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, FlatList } from "react-native";
import List from "./components/list";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ECECEC" }}>
      <StatusBar hidden />
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => <List item={item} index={index} />}
      />
    </SafeAreaView>
  );
}
