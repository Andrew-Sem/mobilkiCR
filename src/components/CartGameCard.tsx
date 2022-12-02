import { FC } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { GameCardProps } from "./GameCard";
import { useNavigation } from "@react-navigation/native";

export const CartGameCard: FC<GameCardProps> = ({ game }) => {
  const navigation = useNavigation();
  const { base64Image, name, developer, price } = game;
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
