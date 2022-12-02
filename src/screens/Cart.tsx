import React, { FC, useEffect } from "react";
import { Text, View } from "react-native";
import { GameCard } from "../components/GameCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCartGames } from "../store/actions/cartAction";

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { games, loading } = useAppSelector((state) => state.cart);
  const { userId, token } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchCartGames({ userId, token }));
  }, []);
  if (loading === "pending") {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </View>
  );
};
