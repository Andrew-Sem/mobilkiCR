import {StackScreenProps} from "@react-navigation/stack"

export type StackParamList = {
    Home: undefined;
    Profile: {userId: string}
    // Losos: {karas: number}
};

export type ScreenProps = StackScreenProps<StackParamList>;