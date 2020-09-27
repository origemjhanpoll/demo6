import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Animated, Dimensions } from "react-native";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          margin: 8,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text style={{ color: "gray" }}>{item.username}</Text>
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={<Text>Carregando...</Text>}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

export default List;
