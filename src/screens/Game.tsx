import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenProps} from "../types/reactNavigation";
import {GameSpecificationRow} from "../components/GameSpecificationRow";
import {Btn} from "../components/Btn";

export const Game: FC<ScreenProps> = ({route}) => {
    // @ts-ignore
    const {game} = route.params
    const addToCartBtnHandler = () => {

    }
    return (
        <ScrollView style={styles.gameScreen}>
            <View style={styles.imgWrapper}>
                <Image source={{uri: game.base64Image}} style={styles.img}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{game.name}</Text>
                <Btn onPress={addToCartBtnHandler}>
                    <Text style={styles.btnText}>В корзину {game.price}₽</Text>
                </Btn>
                <View style={styles.specifications}>
                    <GameSpecificationRow title={"Жанр"} description={game.genre}/>
                    <GameSpecificationRow title={"Разработчик"} description={game.developer}/>
                    <GameSpecificationRow title={"Дата выхода"} description={game.releaseDate}/>
                    <GameSpecificationRow title={"Платформа"} description={game.platform}/>
                    <GameSpecificationRow title={"Режимы"} description={game.features}/>
                </View>
                <Text style={styles.descriptionTitle}>Описание</Text>
                <Text style={styles.description}>{game.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        backgroundColor: "white",
    },
    img: {
        width: "100%",
        height: "100%"
    },
    imgWrapper: {
        width: "100%",
        height: 400
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        marginVertical: 20
    },
    container: {
        marginHorizontal: 15
    },
    description: {
        marginBottom: 20
    },
    descriptionTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 20
    },
    specifications: {
        marginTop: 15
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})

