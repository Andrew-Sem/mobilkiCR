import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface GameSpecificationRowProps{
    title: string,
    description: string
}


export const GameSpecificationRow:FC<GameSpecificationRowProps> = ({title, description}) => {
    return(
        <View style={styles.specification}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    specification:{
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    title:{
        color: "#444",
        fontSize: 16
    },
    description:{
        fontSize: 16
    }
})