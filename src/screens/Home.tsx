import React, {FC} from 'react';
import { Text, View } from 'react-native';
import {ScreenProps} from "../types/reactNavigation";
import {GamesList} from "../components/GamesList";

export const Home:FC<ScreenProps> = () => {
    return(
        <View>
            <GamesList/>
        </View>
    )
}
