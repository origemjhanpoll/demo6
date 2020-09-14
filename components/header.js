import React, { useEffect, useRef } from "react";
import { View, Text, Button, Animated } from "react-native";

import { useHeader } from "../context/headerContext";

const Header = ({ scroll }) => {
  const { state } = useHeader();
  const headerRef = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   if (state >= 60) {
  //     Animated.timing(headerRef, {
  //       toValue: -60,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start();
  //   } else {
  //     Animated.timing(headerRef, {
  //       toValue: 0,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // }, [state]);

  return (
    <Animated.View
      style={{
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderBottomWidth: 1,
        borderBottomColor: "#E8E8E8",
        transform: [
          {
            translateY: headerRef,
          },
        ],
      }}
    >
      <Text style={{ fontSize: 18 }}>Lista de Usuários</Text>
      <Text>{state}</Text>
    </Animated.View>
  );
};

export default Header;
