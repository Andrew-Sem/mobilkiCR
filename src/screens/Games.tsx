import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenProps} from "../types/reactNavigation";
import {GamesList} from "../components/GamesList";

export const Games:FC<ScreenProps> = () => {
    return(
        <View style={styles.container}>
            <GamesList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },

})
