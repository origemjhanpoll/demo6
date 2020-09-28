import React, { useEffect, useCallback, memo } from "react";
import { Animated, Text } from "react-native";

const List = ({ item, index }) => {
  const scale = new Animated.Value(0);
  console.log("teste de render");

  const animaTrasition = () => {
    Animated.spring(scale, {
      toValue: 1,
      duration: 400,
      friction: 6,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animaTrasition();
  });

  return (
    <Animated.View
      style={{
        padding: 16,
        backgroundColor: "white",
        margin: 8,
        borderRadius: 8,
        transform: [
          {
            scale: scale,
          },
        ],
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text style={{ color: "gray" }}>{item.username}</Text>
    </Animated.View>
  );
};

export default memo(List);
