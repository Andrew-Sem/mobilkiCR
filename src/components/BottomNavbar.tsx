import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRightIcon, ShoppingCartIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";


export const BottomNavbar:FC = () => {
    const navigation = useNavigation()

    return(
        //@ts-ignore
        <TouchableOpacity style={styles.navbar} onPress={() => navigation.navigate("Cart")}>
            <Text style={styles.text}>Перейти в корзину</Text>
            <ShoppingCartIcon/>
            <ChevronRightIcon/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    navbar:{
        paddingBottom: 30,
        paddingTop: 20,
        paddingHorizontal: 10,
        justifyContent:"flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    text:{
        fontWeight:"bold",
        fontSize: 14
    }
})