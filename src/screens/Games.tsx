import React, { FC, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../types/reactNavigation";
import { GamesList } from "../components/GamesList";
import { BottomNavbar } from "../components/BottomNavbar";
import { useAppDispatch } from "../hooks/redux";
import { auth } from "../store/actions/authAction";

export const Games: FC<ScreenProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(auth({ username: "admin", password: "password" }));
  }, []);
  return (
    <View style={styles.container}>
      <GamesList />
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
