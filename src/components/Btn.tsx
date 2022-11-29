import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BtnProps {
    onPress: (arg0?: any) => void,
    children?: React.ReactNode
}

export const Btn: FC<BtnProps> = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: "#b594f0",
        alignItems:"center"
    },
    btnText: {
        color: "white",
        fontWeight: "bold"
    }
})