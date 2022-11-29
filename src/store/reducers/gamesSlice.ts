import {IGame} from "../../models/IGame";
import {createSlice} from "@reduxjs/toolkit";
import {fetchGames} from "../actions/drugsAction";

interface GamesState {
    games: IGame[];
    loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: GamesState = {
    games: [],
    loading: "idle"
}

const drugsSlice = createSlice({
    name: "drugs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, (state) => {
            state.loading = "pending"
        })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.games = action.payload
                state.loading = "succeeded"
            })
            .addCase(fetchGames.rejected, (state,action) => {
                state.loading = "failed"
                console.log(action.error)
            })
    }
})

export default drugsSlice.reducer
