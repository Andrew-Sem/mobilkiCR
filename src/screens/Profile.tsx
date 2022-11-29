import React, {FC} from 'react';
import { Text, View } from 'react-native';
import {ScreenProps} from "../types/reactNavigation";
import {StackNavigationProp} from '@react-navigation/stack'

export const Profile:FC<ScreenProps> = ({route}) => {
    //@ts-ignore
    const {userId} = route.params
    return(
        <View>
            <Text>
                {userId}
            </Text>
        </View>
    )
}

export default Profile;
