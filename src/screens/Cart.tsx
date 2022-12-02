import React, { FC, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Btn } from "../components/Btn";
import { CartGameCard } from "../components/CartGameCard";
import { GameCard } from "../components/GameCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCartGames } from "../store/actions/cartAction";

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { games, loading } = useAppSelector((state) => state.cart);
  const { userId, token } = useAppSelector((state) => state.auth);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(fetchCartGames({ userId, token }));
  }, []);

  useEffect(() => {
    setTotalPrice(games.reduce((acc, cur) => acc + cur.price, 0));
  }, [games]);

  if (loading === "pending") {
    return <Text>Loading...</Text>;
  }
  if (loading === "failed") {
    return <Text>Error...</Text>;
  }
  return (
    <View style={styles.cart}>
      <ScrollView>
        {games.map((game) => (
          <CartGameCard game={game} key={game.id} />
        ))}
      </ScrollView>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>Итого: {totalPrice} ₽</Text>
        <Btn
          onPress={() => {
            Alert.alert(`Усё, минус ${totalPrice} финансов`);
          }}
        >
          <Text style={styles.btnText}>Заказать</Text>
        </Btn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceView: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cart: {
    flex: 1,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});
