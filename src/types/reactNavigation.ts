import {StackScreenProps} from "@react-navigation/stack"
import {IGame} from "../models/IGame";

export type StackParamList = {
    Games: undefined;
    Game: {game:IGame}
    Cart: undefined
    // Losos: {karas: number}
};

export type ScreenProps = StackScreenProps<StackParamList>;