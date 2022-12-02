import React, { FC, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { GameCard } from "./GameCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchGames } from "../store/actions/gamesAction";
import { IGame } from "../models/IGame";

export const GamesList: FC = () => {
  const dispatch = useAppDispatch();
  const { games, loading } = useAppSelector((state) => state.games);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  if (loading == "pending") return <Text>Loading...</Text>;
  if (loading == "failed") return <Text>Error</Text>;

  return (
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  gameList: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    flexWrap: "wrap",
  },
});
