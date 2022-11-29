import React, {FC, useEffect} from 'react';
import { Text, View } from 'react-native';
import {GameCard} from "./GameCard";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchGames} from "../store/actions/drugsAction";


export const GamesList:FC = () => {
    const dispatch = useAppDispatch()
    const {games, loading} = useAppSelector(state => state.games)
    useEffect(() => {
        dispatch(fetchGames())
    },[])
    if(loading == "pending")
        return <Text>Loading...</Text>
    if(loading == "failed")
        return <Text>Error</Text>

    return(
        <View>
            {games.map((game) => (
                <GameCard game={game} key={game.gameId}/>
            ))}
        </View>
    )
}

