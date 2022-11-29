import React, {FC} from 'react';
import { Text, View } from 'react-native';
import {IGame} from "../models/IGame";

interface GameCardProps{
    game:IGame
}

export const GameCard:FC<GameCardProps> = ({game}) => {
    const {name} = game
    return(
        <View>
            <Text>{name}</Text>
        </View>
    )
}
