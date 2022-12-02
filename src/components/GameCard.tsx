import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IGame } from "../models/IGame";
import { Btn } from "./Btn";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addToCart } from "../store/actions/cartAction";

export interface GameCardProps {
  game: IGame;
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  const navigation = useNavigation();
  const { name, id, base64Image, developer, price } = game;
  const { games } = useAppSelector((state) => state.cart);
  const { userId, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const addToCartBtnHandler = () => {
    console.log(game);
    dispatch(addToCart({ token, userId, gameData: [game, ...games] }));
  };
  return (
    <TouchableOpacity
      style={styles.card}
      //@ts-ignore
      onPress={() => navigation.navigate("Game", { game })}
    >
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={{ uri: base64Image }} />
      </View>
      <View style={styles.gameInfo}>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <Text style={styles.developer}>{developer}</Text>
        </View>
        <View style={styles.saleBlock}>
          <Text style={styles.price}>{price}₽</Text>
          <Btn onPress={addToCartBtnHandler}>
            <Text style={styles.btnText}>В корзину</Text>
          </Btn>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingRight: 20,
  },
  imgWrapper: {
    width: 130,
    height: "100%",
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  gameInfo: {
    width: "60%",
    justifyContent: "space-between",
  },
  titleWrapper: {
    flexDirection: "row",
    flexShrink: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  developer: {
    color: "#444",
    marginTop: 5,
  },
  price: {
    marginTop: 10,
    fontSize: 20,
  },
  saleBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
