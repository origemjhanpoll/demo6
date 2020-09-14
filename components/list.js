import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Animated, Dimensions } from "react-native";
import Header from "./header";
import { useHeader } from "../context/headerContext";
const HeaderAnimation = Animated.createAnimatedComponent(View);

const List = () => {
  const [data, setData] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const { state, setState } = useHeader();

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

  // useEffect(() => {
  //   scrollY.addListener((e) => setState(Math.floor(e.value)));
  // }, []);

  // useEffect(() => {
  //   console.log("e:", state);
  // }, [state]);

  return (
    <>
      <Animated.View
        style={{
          height: 60,
          zIndex: 1,
          transform: [
            {
              translateX: scrollY.interpolate({
                inputRange: [0, 10],
                outputRange: [0, 20],
              }),
            },
          ],
        }}
      >
        <Header />
      </Animated.View>

      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </>
  );
};

export default List;
